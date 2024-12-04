<template>
    <div class="b-date-picker" ref="pickerRef">
        <text-input
            :model-value="state.selectedDate"
            :error="error"
            :required="required"
            class="is-clickable"
            has-addons
            @click="togglePicker"
            @input="handleManualInput"
            @blur="handleBlur"
            @update:model-value="handleManualInput"
        >
            <template #left>
                <action-button role="presentation">
                    <b-icon icon="calendar"/>
                </action-button>
            </template>
            
            <slot />
            
            <template #inner>
                <box 
                    v-show="showPicker" 
                    class="b-date-picker-window"
                    @click.stop
                >
                    <calendar-header 
                        :month="currentMonth"
                        :year="displayYear"
                        @previous-month="goToPreviousMonth"
                        @next-month="goToNextMonth"
                        @month-change="handleMonthChange"
                        @year-change="handleYearChange"
                    />
                    
                    <calendar-grid 
                        :calendar-days="calendarDays"
                        :today="today"
                        :selected-date="state.selectedDate"
                        :date-format="props.format"
                        @select-date="selectDate"
                    />
                </box>
            </template>
        </text-input>
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

// Add new methods to handle month and year changes
function handleMonthChange(month: number): void {
    state.currentDate = state.currentDate.month(month)
}

function handleYearChange(year: number): void {
    state.currentDate = state.currentDate.year(year)
}

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
        state.currentDate = dayjs(String(props.modelValue)).isValid() 
            ? dayjs(String(props.modelValue))
            : dayjs()
        emit('update:model-value', state.currentDate.format(props.format))
    } else {
        state.currentDate = dayjs()
    }
    
    state.selectedDate = state.currentDate.format(props.format)
    state.minDate = props.minDate ? dayjs(props.minDate) : null
    state.maxDate = props.maxDate ? dayjs(props.maxDate) : null
}

function handleClickOutside(event: MouseEvent): void {
    const target = event.target as HTMLElement
    if (pickerRef.value && !pickerRef.value.contains(target)) {
        state.showingPicker = false
    }
}

function togglePicker(): void {
    state.showingPicker = !state.showingPicker
}

function selectDate(date: string): void {
    emit('update:model-value', date)
    state.currentDate = dayjs(date)
    state.selectedDate = state.currentDate.format(props.format)
    togglePicker()
}

function goToPreviousMonth(): void {
    state.currentDate = state.currentDate.subtract(1, 'month')
}

function goToNextMonth(): void {
    state.currentDate = state.currentDate.add(1, 'month')
}

// Calendar generation helpers
function generatePrefillDays(): CalendarDay[] {
    const firstDayOfMonth = state.currentDate.startOf('month').weekday()
    if (firstDayOfMonth === 0) return []
    
    const previousMonth = state.currentDate.subtract(1, 'month')
    const previousMonthFormat = previousMonth.format('YYYY-MM-')
    let daysInPreviousMonth = previousMonth.daysInMonth()
    
    const prefillDays: CalendarDay[] = [{
        class: 'has-text-grey',
        date: dayjs(`${previousMonthFormat}${daysInPreviousMonth}`),
        day: daysInPreviousMonth
    }]
    
    for (let i = 0; i < firstDayOfMonth - 1; i++) {
        daysInPreviousMonth--
        prefillDays.unshift({
            class: 'has-text-grey',
            date: dayjs(`${previousMonthFormat}${daysInPreviousMonth}`),
            day: daysInPreviousMonth
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
            return {
                class: '',
                date,
                day: index + 1
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
            return {
                class: 'has-text-grey',
                date: dayjs(`${nextMonthFormat}${day}`),
                day: index + 1
            }
        })
}

function handleManualInput(valueOrEvent: string | Event): void {
    // Extract the value whether we receive a string or an event
    const inputValue = typeof valueOrEvent === 'string' 
        ? valueOrEvent 
        : (valueOrEvent.target as HTMLInputElement).value;
    
    const trimmedValue = inputValue.trim()
    
    // If the input is empty, clear the date
    if (!trimmedValue) {
        state.selectedDate = null
        state.currentDate = dayjs()
        emit('update:model-value', '')
        return
    }
    
    // Try to parse the input date
    const parsedDate = dayjs(trimmedValue, props.format, true)
    
    if (parsedDate.isValid()) {
        // Check if date is within min/max bounds
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
        
        // Update both the current date and selected date
        state.currentDate = parsedDate
        state.selectedDate = parsedDate.format(props.format)
        emit('update:model-value', state.selectedDate)
    } else {
        // If invalid, clear the field
        state.selectedDate = null
        emit('update:model-value', '')
    }
}

// Update handleBlur method:
function handleBlur(): void {
    const value = state.selectedDate
    
    // If empty, just emit empty string
    if (!value) {
        state.selectedDate = null
        state.currentDate = dayjs()
        emit('update:model-value', '')
        return
    }
    
    // Check if the date is valid
    const parsedDate = dayjs(value, props.format, true)
    
    if (!parsedDate.isValid()) {
        // Clear the field if date is invalid
        state.selectedDate = null
        state.currentDate = dayjs()
        emit('update:model-value', '')
        return
    }
    
    // Check bounds if date is valid
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
</script>