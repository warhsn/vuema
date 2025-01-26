<template>
    <div class="b-date-picker" ref="pickerRef">
        <text-input is-expanded :model-value="state.selectedDate" :error="error" :required="required"
            class="is-clickable" :has-addons="withIcon" @click="togglePicker" @input="handleManualInput"
            @blur="handleBlur" @update:model-value="handleManualInput">
            <template #left>
                <icon-button @click.prevent class="is-shadowless" v-if="withIcon" role="presentation" icon="calendar" />
            </template>

            <template #description>
                <slot name="description" />
            </template>

            <slot />
        </text-input>

        <transition name="vuema-fade" mode="in-out">
            <box v-if="showPicker" class="b-date-picker-window" @click.stop>
                <calendar-header :month="currentMonth" :year="displayYear" @previous-month="goToPreviousMonth"
                    @next-month="goToNextMonth" @month-change="handleMonthChange" @year-change="handleYearChange" />

                <calendar-grid :calendar-days="calendarDays" :today="today" :selected-date="state.selectedDate"
                    :date-format="props.format" @select-date="selectDate" />
            </box>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { reactive, computed, onMounted, ref, onUnmounted } from 'vue'
import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
import isoWeek from 'dayjs/plugin/isoWeek'
import updateLocale from 'dayjs/plugin/updateLocale'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import type { 
    DatePickerProps, 
    DatePickerState, 
    CalendarDay,
    DatePickerEmits 
} from './types'
import CalendarHeader from './calendar-header.vue'
import CalendarGrid from './calendar-grid.vue'

// Initialize dayjs plugins and locale
initializeDayjs()

// Props and emits
const props = withDefaults(defineProps<DatePickerProps>(), {
    format: 'YYYY-MM-DD',
    modelValue: null,
    minDate: null,
    maxDate: null,
    required: false,
    withIcon: true,
})

const emit = defineEmits<DatePickerEmits>()

// Refs
const pickerRef = ref<HTMLElement | null>(null)

// State
const state = reactive<DatePickerState>({
    showingPicker: false,
    currentDate: dayjs(),
    selectedDate: null,
    minDate: null,
    maxDate: null,
})

// Computed properties
const showPicker = computed(() => state.showingPicker)
const displayYear = computed(() => state.currentDate.format('YYYY'))
const today = computed(() => dayjs().format(props.format))
const currentMonth = computed(() => state.currentDate.month())

const calendarDays = computed((): CalendarDay[] => {
    const prefillDays = generatePrefillDays()
    const currentMonthDays = generateCurrentMonthDays()
    const postfillDays = generatePostfillDays()
    
    return [...prefillDays, ...currentMonthDays, ...postfillDays]
})

// Lifecycle hooks
onMounted(() => {
    initializeState()
    document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
})

// Methods
function initializeDayjs(): void {
    dayjs.extend(updateLocale)
    dayjs.extend(weekday)
    dayjs.extend(isoWeek)
    dayjs.extend(customParseFormat)
    dayjs.updateLocale('en', { weekStart: 1 })
}

function initializeState(): void {
    if (props.modelValue) {
        const initialDate = dayjs(String(props.modelValue))
        if (initialDate.isValid()) {
            state.currentDate = initialDate
            state.selectedDate = initialDate.format(props.format)
        } else {
            state.currentDate = dayjs()
            state.selectedDate = null
        }
    } else {
        state.currentDate = dayjs()
        state.selectedDate = null
    }
    
    state.minDate = props.minDate ? dayjs(props.minDate) : null
    state.maxDate = props.maxDate ? dayjs(props.maxDate) : null
}

function handleClickOutside(event: MouseEvent): void {
    const target = event.target as HTMLElement
    if (pickerRef.value && !pickerRef.value.contains(target)) {
        state.showingPicker = false
    }
}

function handleManualInput(valueOrEvent: string | Event): void {
    const inputValue = typeof valueOrEvent === 'string' 
        ? valueOrEvent 
        : (valueOrEvent.target as HTMLInputElement).value
    
    const trimmedValue = inputValue.trim()
    
    if (!trimmedValue) {
        state.selectedDate = null
        state.currentDate = dayjs()
        emit('update:model-value', '')
        return
    }
    
    const parsedDate = dayjs(trimmedValue, props.format, true)
    
    if (parsedDate.isValid()) {
        if (state.minDate && parsedDate.isBefore(state.minDate)) {
            state.selectedDate = null
            emit('update:model-value', '')
            return
        }
        if (state.maxDate && parsedDate.isAfter(state.maxDate)) {
            state.selectedDate = null
            emit('update:model-value', '')
            return
        }
        
        state.currentDate = parsedDate
        state.selectedDate = parsedDate.format(props.format)
        emit('update:model-value', state.selectedDate)
    } else {
        state.selectedDate = null
        emit('update:model-value', '')
    }
}

function handleBlur(): void {
    const value = state.selectedDate
    
    if (!value) {
        state.selectedDate = null
        state.currentDate = dayjs()
        emit('update:model-value', '')
        return
    }
    
    const parsedDate = dayjs(value, props.format, true)
    
    if (!parsedDate.isValid()) {
        state.selectedDate = null
        state.currentDate = dayjs()
        emit('update:model-value', '')
        return
    }
    
    if (state.minDate && parsedDate.isBefore(state.minDate)) {
        state.selectedDate = null
        state.currentDate = dayjs()
        emit('update:model-value', '')
        return
    }
    
    if (state.maxDate && parsedDate.isAfter(state.maxDate)) {
        state.selectedDate = null
        state.currentDate = dayjs()
        emit('update:model-value', '')
        return
    }
}

function togglePicker(): void {
    state.showingPicker = !state.showingPicker
}

function selectDate(date: string): void {
    const selectedDate = dayjs(date)
    
    if (
        (state.minDate && selectedDate.isBefore(state.minDate)) || 
        (state.maxDate && selectedDate.isAfter(state.maxDate))
    ) {
        return
    }
    
    emit('update:model-value', date)
    state.currentDate = selectedDate
    state.selectedDate = selectedDate.format(props.format)
    togglePicker()
}

function handleMonthChange(month: number): void {
    state.currentDate = state.currentDate.month(month)
}

function handleYearChange(year: number): void {
    state.currentDate = state.currentDate.year(year)
}

function goToPreviousMonth(): void {
    state.currentDate = state.currentDate.subtract(1, 'month')
}

function goToNextMonth(): void {
    state.currentDate = state.currentDate.add(1, 'month')
}

function generatePrefillDays(): CalendarDay[] {
    const firstDayOfMonth = state.currentDate.startOf('month').weekday()
    if (firstDayOfMonth === 0) return []
    
    const previousMonth = state.currentDate.subtract(1, 'month')
    const previousMonthFormat = previousMonth.format('YYYY-MM-')
    let daysInPreviousMonth = previousMonth.daysInMonth()
    
    const prefillDays: CalendarDay[] = [{
        class: 'has-text-grey is-disabled',
        date: dayjs(`${previousMonthFormat}${daysInPreviousMonth}`),
        day: daysInPreviousMonth,
        disabled: true  // Always true for prefill days
    }]
    
    for (let i = 0; i < firstDayOfMonth - 1; i++) {
        daysInPreviousMonth--
        const day = dayjs(`${previousMonthFormat}${daysInPreviousMonth}`)
        const previousIsDisabled = !!(state.minDate && day.isBefore(state.minDate))
        prefillDays.unshift({
            class: 'has-text-grey is-disabled',
            date: day,
            day: daysInPreviousMonth,
            disabled: previousIsDisabled  // Always true for prefill days
        })
    }
    
    return prefillDays
}

function generateCurrentMonthDays(): CalendarDay[] {
    return Array(state.currentDate.daysInMonth())
        .fill(null)
        .map((_, index) => {
            const day = (index + 1).toString().padStart(2, '0')
            const date = dayjs(`${state.currentDate.format('YYYY-MM-')}${day}`)
            const isDisabled = !!(  // Convert to boolean with !!
                (state.minDate && date.isBefore(state.minDate)) || 
                (state.maxDate && date.isAfter(state.maxDate))
            )
            
            return {
                class: isDisabled ? 'has-text-grey is-disabled' : '',
                date,
                day: index + 1,
                disabled: isDisabled
            }
        })
}

function generatePostfillDays(): CalendarDay[] {
    const lastDayOfMonth = state.currentDate.endOf('month').weekday()
    if (lastDayOfMonth === 6) return []
    
    const nextMonth = state.currentDate.add(1, 'month')
    const nextMonthFormat = nextMonth.format('YYYY-MM-')
    
    return Array(6 - lastDayOfMonth)
        .fill(null)
        .map((_, index) => {
            const day = (index + 1).toString().padStart(2, '0')
            const date = dayjs(`${nextMonthFormat}${day}`)
            const nextIsDisabled = !!(state.minDate && date.isBefore(state.minDate))
            return {
                class: 'has-text-grey is-disabled',
                date: date,
                day: index + 1,
                disabled: nextIsDisabled 
            }
        })
}
</script>

<style scoped>
.is-disabled {
    cursor: not-allowed !important;
    opacity: 0.5;
}
</style>