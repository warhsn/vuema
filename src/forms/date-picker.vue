<template>
    <div class="b-date-picker">
        <text-input
            classes="is-clickable"
            @click="togglePicker"
            :model-value="state.selected_date"
            :error="error"
            :required="required"
            has-addons>
            <template #left>
                <action-button role="presentation">
                    <b-icon icon="calendar"/>
                </action-button>
            </template>
            <slot />
            <template #inner>
                <box @click.stop v-show="showPicker" class="b-date-picker-window">
                    <div class="fixed-grid has-4-cols">
                        <div class="grid">
                            <div class="cell">
                                <div @click.stop="goToPreviousMonth" class="arrow prev is-clickable"></div>
                            </div>
                            <div class="cell is-col-span-2">
                                <p class="has-text-centered">{{ display_month }} {{ display_year }}</p>
                            </div>
                            <div class="cell">
                                <div @click.stop="goToNextMonth" class="arrow next is-clickable is-pulled-right"></div>
                            </div>
                        </div>
                    </div>
                    <div class="fixed-grid has-7-cols">
                        <div class="grid">
                            <div class="cell has-text-centered has-text-weight-bold">Mon</div>
                            <div class="cell has-text-centered has-text-weight-bold">Tue</div>
                            <div class="cell has-text-centered has-text-weight-bold">Wed</div>
                            <div class="cell has-text-centered has-text-weight-bold">Thu</div>
                            <div class="cell has-text-centered has-text-weight-bold">Fri</div>
                            <div class="cell has-text-centered has-text-weight-bold">Sat</div>
                            <div class="cell has-text-centered has-text-weight-bold">Sun</div>
                            <div 
                                v-for="(date, index) in calendar_days"
                                :key="index"
                                class="cell has-text-centered is-clickable"
                                @click.stop="selectDate(date.date.format(props.format))"
                                :class="{
                                    'has-background-primary': date.date.format(props.format) === today,
                                    'has-background-grey': date.date.format(props.format) === state.selected_date,
                                    'has-text-black': date.date.format(props.format) === today || date.date.format(props.format) === state.selected_date,
                                }">
                                <span :class="date.class">
                                    {{ date.day }}
                                </span>
                            </div>
                        </div>
                    </div>
                </box>
            </template>
        </text-input>
    </div>
</template>

<script setup lang="ts">
import { _DatePicker } from '../interfaces/date-picker'
import { _hasErrors } from '../computed/errors'
import dayjs, { Dayjs } from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
import isoWeek from 'dayjs/plugin/isoWeek'
import { reactive, computed, onMounted } from 'vue'
import updateLocale from 'dayjs/plugin/updateLocale'

dayjs.extend(updateLocale)
dayjs.extend(weekday)
dayjs.extend(isoWeek)
dayjs.updateLocale('en', {
    weekStart: 1,
})

interface DatePickerState {
    showing_picker: boolean
    current_date: Dayjs
    selected_date: string | null
    min_date: Dayjs | null
    max_date: Dayjs | null
}

// Initialize with default current_date to avoid null
const state = reactive<DatePickerState>({
    showing_picker: false,
    current_date: dayjs(), // Initialize with current date
    selected_date: null,
    min_date: null,
    max_date: null,
})

interface CalendarDay {
    class: string
    date: Dayjs
    day: number
}

const inputName = 'update:model-value'

const props = withDefaults(
    defineProps<_DatePicker>(), {
        format: 'YYYY-MM-DD'
    }
)

const emit = defineEmits<{
    (e: typeof inputName, value: string): void
}>()

onMounted(() => {
    if(props.modelValue) {
        if(dayjs(String(props.modelValue)).isValid()) {
            state.current_date = dayjs(String(props.modelValue))
        } else {
            state.current_date = dayjs()
            emit(inputName, state.current_date.format(props.format));
        }
        
        state.selected_date = state.current_date.format(props.format)
    } else {
        state.current_date = dayjs()
        state.selected_date = state.current_date.format(props.format)
    }

    if (props.minDate) {
        state.min_date = dayjs(props.minDate)
    }
    
    if (props.maxDate) {
        state.max_date = dayjs(props.maxDate)
    }
})

function onInput(date: string): void {
    emit(inputName, date);
}

function togglePicker(): void {
    state.showing_picker = !state.showing_picker
}

function selectDate(date: string): void {
    onInput(date)
    state.current_date = dayjs(date)
    state.selected_date = state.current_date.format(props.format)
    togglePicker()
}

function goToPreviousMonth(): void {
    state.current_date = state.current_date.subtract(1, 'month')
}

function goToNextMonth(): void {
    state.current_date = state.current_date.add(1, 'month')
}

const display_date = computed(() => {
    return state.current_date.format(props.format)
})

const today = computed(() => {
    return dayjs().format(props.format)
})

const showPicker = computed(() => {
    return state.showing_picker
})

const display_month = computed(() => {
    return state.current_date.format('MMMM')
})

const display_year = computed(() => {
    return state.current_date.format('YYYY')
})

function firstDayOfMonth(): number {
    return state.current_date.startOf('month').weekday()
}

function lastDayOfMonth(): number {
    return state.current_date.endOf('month').weekday()
}

const calendar_days = computed((): CalendarDay[] => {
    const first_day_of_month = firstDayOfMonth() 
    const prefill_days: CalendarDay[] = []

    if(first_day_of_month !== 0) {
        const previous_month = state.current_date.subtract(1, 'month')
        const previous_month_format = previous_month.format('YYYY-MM-')
        let days_in_previous_month = previous_month.daysInMonth()
        prefill_days.push({
            class: 'has-text-grey',
            date: dayjs(`${previous_month_format}${days_in_previous_month}`),
            day: days_in_previous_month
        })
        
        const day_range = [...Array(first_day_of_month - 1).keys()]

        for (const _ of day_range) {
            days_in_previous_month--
            prefill_days.unshift({
                class: 'has-text-grey',
                date: dayjs(`${previous_month_format}${days_in_previous_month}`),
                day: days_in_previous_month
            })
        }
    }

    const current_month_days: CalendarDay[] = Array(state.current_date.daysInMonth())
        .fill(null)
        .map((_, day) => {
            const date = dayjs(
                `${state.current_date.format('YYYY-MM-')}${(day + 1).toString().padStart(2, '0')}`
            )
            return {
                class: '',
                date,
                day: day + 1
            }
        })

    const last_day_of_month = lastDayOfMonth() 
    const postfill_days: CalendarDay[] = []

    if(last_day_of_month !== 6) {
        const next_month = state.current_date.add(1, 'month')
        const next_month_format = next_month.format('YYYY-MM-')
        let counter = 0
        const day_range = [...Array(6 - last_day_of_month).keys()]

        for (const _ of day_range) {
            counter++
            postfill_days.push({
                class: 'has-text-grey',
                date: dayjs(`${next_month_format}${counter.toString().padStart(2, '0')}`),
                day: counter
            })
        }
    }

    return [...prefill_days, ...current_month_days, ...postfill_days]
})
</script>
