<template>
    <div class="b-date-picker" ref="pickerRef">
        <!-- Mobile fallback: native date input -->
        <text-input 
            v-if="isMobile"
            type="date"
            :is-expanded="isExpanded"
            :has-addons="withIcon"
            :is-small="isSmall"
            :is-medium="isMedium"
            :is-large="isLarge"
            :placeholder="placeholder"
            :required="required"
            :model-value="nativeDateValue"
            :error="error"
            @input="handleNativeInput"
            @blur="handleBlur"
            @update:model-value="handleNativeInput"
            v-bind="$attrs">
            <template #left>
                <icon-button
                    v-if="withIcon"
                    :is-small="isSmall"
                    :is-medium="isMedium"
                    :is-large="isLarge"
                    @click.prevent
                    class="is-shadowless"
                    role="presentation"
                    icon="calendar"
                />
            </template>
            <template v-for="slotName in slotNames" :key="slotName" v-slot:[slotName]>
                <slot :name="slotName"></slot>
            </template>
        </text-input>

        <!-- Desktop: custom date picker -->
        <template v-else>
            <text-input 
                :is-expanded="isExpanded"
                :has-addons="withIcon"
                :is-small="isSmall"
                :is-medium="isMedium"
                :is-large="isLarge"
                :placeholder="placeholder"
                :required="required"
                :model-value="state.selectedDate"
                :error="error"
                class="date-picker-input"
                role="combobox"
                :aria-expanded="state.showingPicker"
                aria-haspopup="dialog"
                :aria-describedby="pickerId + '-description'"
                @click="togglePicker"
                @input="handleManualInput"
                @blur="handleBlur"
                @keydown="handleInputKeydown"
                @update:model-value="handleManualInput"
                v-bind="$attrs">
                <template #left>
                    <icon-button
                        v-if="withIcon"
                        :is-small="isSmall"
                        :is-medium="isMedium"
                        :is-large="isLarge"
                        @click.prevent
                        class="is-shadowless"
                        role="presentation"
                        icon="calendar"
                    />
                </template>
                <template v-for="slotName in slotNames" :key="slotName" v-slot:[slotName]>
                    <slot :name="slotName"></slot>
                </template>
            </text-input>

            <transition name="vuema-fade" mode="in-out">
                <box 
                    v-if="showPicker" 
                    ref="pickerWindow"
                    class="b-date-picker-window" 
                    :style="pickerPositionStyle"
                    role="dialog"
                    :aria-label="`Select date, current month is ${months[currentMonth]} ${displayYear}`"
                    :id="pickerId + '-dialog'"
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
                        :focused-date="keyboardNavigation.focusedDate"
                        :is-keyboard-navigating="keyboardNavigation.isNavigating"
                        :date-format="props.format"
                        @select-date="selectDate"
                    />
                    
                    <div class="field is-grouped mt-3">
                        <div class="control">
                            <button 
                                class="button is-small is-light"
                                @click="selectToday"
                                type="button"
                            >
                                Today
                            </button>
                        </div>
                        <div class="control">
                            <button 
                                class="button is-small is-light"
                                @click="clearDate"
                                type="button"
                            >
                                Clear
                            </button>
                        </div>
                    </div>
                </box>
            </transition>
        </template>
        
        <!-- Hidden description for screen readers -->
        <div 
            :id="pickerId + '-description'"
            class="is-sr-only"
            aria-live="polite"
        >
            Use arrow keys to navigate dates, Enter to select, Escape to close
        </div>
    </div>
</template>

<script setup lang="ts">
import { 
    reactive,
    computed,
    onMounted,
    ref,
    onUnmounted,
    useSlots, type Slots,
    ComputedRef
} from 'vue'
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
import type { Dayjs } from 'dayjs'
import CalendarHeader from './calendar-header.vue'
import CalendarGrid from './calendar-grid.vue'

initializeDayjs()

const slots: Slots = useSlots()
const slotNames: ComputedRef<string[]> = computed((): string[] => {
    return Object.keys(slots)
})

const props = withDefaults(defineProps<DatePickerProps>(), {
    format: 'YYYY-MM-DD',
    modelValue: null,
    minDate: null,
    maxDate: null,
    required: false,
    withIcon: true,
    disabledDates: () => [],
    isDateDisabled: undefined,
})

const emit = defineEmits<DatePickerEmits>()

const pickerRef = ref<HTMLElement | null>(null)
const pickerWindow = ref<HTMLElement | null>(null)

// Mobile detection
const isMobile = ref(false)

const state = reactive<DatePickerState>({
    showingPicker: false,
    currentDate: dayjs(),
    selectedDate: null,
    minDate: null,
    maxDate: null,
})

const pickerPosition = reactive({
    alignRight: false,
    alignCenter: false,
    showAbove: false
})

const keyboardNavigation = reactive({
    focusedDate: null as string | null,
    isNavigating: false
})

const pickerId = `date-picker-${Math.random().toString(36).substr(2, 9)}`

const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
]

const showPicker = computed(() => state.showingPicker)
const displayYear = computed(() => state.currentDate.format('YYYY'))
const today = computed(() => dayjs().format(props.format))
const currentMonth = computed(() => state.currentDate.month())

// Convert date format for native input (always YYYY-MM-DD)
const nativeDateValue = computed(() => {
    if (!state.selectedDate) return ''
    
    // If the current format is already YYYY-MM-DD, use it directly
    if (props.format === 'YYYY-MM-DD') {
        return state.selectedDate
    }
    
    // Otherwise, parse and convert to YYYY-MM-DD
    const parsedDate = dayjs(state.selectedDate, props.format, true)
    return parsedDate.isValid() ? parsedDate.format('YYYY-MM-DD') : ''
})

const calendarDays = computed((): CalendarDay[] => {
    const prefillDays = generatePrefillDays()
    const currentMonthDays = generateCurrentMonthDays()
    const postfillDays = generatePostfillDays()
    
    return [...prefillDays, ...currentMonthDays, ...postfillDays]
})

const pickerPositionStyle = computed(() => {
    const style: Record<string, string> = {}
    
    if (pickerPosition.alignRight) {
        style.right = '0'
        style.left = 'auto'
        // Ensure it doesn't go off the left edge
        style.minWidth = '280px'
        style.maxWidth = 'calc(100vw - 1rem)'
    } else if (pickerPosition.alignCenter) {
        style.left = '50%'
        style.transform = 'translateX(-50%)'
        // Ensure centered picker doesn't overflow
        style.maxWidth = 'calc(100vw - 2rem)'
    } else {
        style.left = '0'
        // Ensure left-aligned picker doesn't overflow right edge
        style.maxWidth = 'calc(100vw - 1rem)'
    }
    
    if (pickerPosition.showAbove) {
        style.top = 'auto'
        style.bottom = 'calc(100% + 5px)'
    } else {
        style.top = 'calc(100% + 5px)'
    }
    
    return style
})

onMounted(() => {
    detectMobile()
    initializeState()
    if (!isMobile.value) {
        document.addEventListener('click', handleClickOutside)
        document.addEventListener('keydown', handleKeyDown)
    }
    window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
    if (!isMobile.value) {
        document.removeEventListener('click', handleClickOutside)
        document.removeEventListener('keydown', handleKeyDown)
    }
    window.removeEventListener('resize', handleResize)
})

function handleResize(): void {
    detectMobile()
    if (state.showingPicker) {
        calculatePickerPosition()
    }
}

function handleKeyDown(event: KeyboardEvent): void {
    if (!state.showingPicker) return
    
    const { key } = event
    
    // Handle escape key
    if (key === 'Escape') {
        event.preventDefault()
        state.showingPicker = false
        keyboardNavigation.isNavigating = false
        keyboardNavigation.focusedDate = null
        return
    }
    
    // Handle enter key
    if (key === 'Enter' && keyboardNavigation.focusedDate) {
        event.preventDefault()
        selectDate(keyboardNavigation.focusedDate)
        return
    }
    
    // Handle arrow keys
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key)) {
        event.preventDefault()
        handleArrowNavigation(key)
        keyboardNavigation.isNavigating = true
    }
}

function handleArrowNavigation(key: string): void {
    const currentFocused = keyboardNavigation.focusedDate 
        ? dayjs(keyboardNavigation.focusedDate, props.format)
        : state.selectedDate 
            ? dayjs(state.selectedDate, props.format)
            : state.currentDate
    
    let newFocused = currentFocused
    
    switch (key) {
        case 'ArrowUp':
            newFocused = currentFocused.subtract(7, 'day')
            break
        case 'ArrowDown':
            newFocused = currentFocused.add(7, 'day')
            break
        case 'ArrowLeft':
            newFocused = currentFocused.subtract(1, 'day')
            break
        case 'ArrowRight':
            newFocused = currentFocused.add(1, 'day')
            break
    }
    
    // Check if the new date is disabled
    if (isDateDisabledHelper(newFocused)) return
    
    // Update the calendar view if navigating to a different month
    if (newFocused.month() !== state.currentDate.month() || 
        newFocused.year() !== state.currentDate.year()) {
        state.currentDate = newFocused
    }
    
    keyboardNavigation.focusedDate = newFocused.format(props.format)
}

function handleInputKeydown(event: KeyboardEvent): void {
    const { key } = event
    
    // Open picker on ArrowDown or Space
    if ((key === 'ArrowDown' || key === ' ') && !state.showingPicker) {
        event.preventDefault()
        togglePicker()
        return
    }
    
    // Close picker on Escape
    if (key === 'Escape' && state.showingPicker) {
        event.preventDefault()
        state.showingPicker = false
        return
    }
}

function selectToday(): void {
    const todayDate = dayjs()
    
    // Check if today is disabled
    if (isDateDisabledHelper(todayDate)) return
    
    const formattedToday = todayDate.format(props.format)
    state.currentDate = todayDate
    state.selectedDate = formattedToday
    emit('update:model-value', formattedToday)
    togglePicker()
}

function clearDate(): void {
    state.selectedDate = null
    state.currentDate = dayjs()
    emit('update:model-value', '')
    togglePicker()
}

function isDateDisabledHelper(date: Dayjs): boolean {
    const dateString = date.format(props.format)
    
    // Check min/max dates
    if (state.minDate && date.isBefore(state.minDate)) return true
    if (state.maxDate && date.isAfter(state.maxDate)) return true
    
    // Check disabled dates array
    if (props.disabledDates && props.disabledDates.includes(dateString)) return true
    
    // Check custom disabled function
    if (props.isDateDisabled && props.isDateDisabled(dateString)) return true
    
    return false
}

function detectMobile(): void {
    // Check for touch capability and screen size
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    const isSmallScreen = window.innerWidth <= 768
    const isMobileUserAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    
    isMobile.value = isTouchDevice && (isSmallScreen || isMobileUserAgent)
}

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

function handleNativeInput(valueOrEvent: string | Event): void {
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
    
    // Native input always provides YYYY-MM-DD format
    const parsedDate = dayjs(trimmedValue, 'YYYY-MM-DD', true)
    
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
        // Convert to the desired format for consistency
        const formattedDate = parsedDate.format(props.format)
        state.selectedDate = formattedDate
        emit('update:model-value', formattedDate)
    } else {
        state.selectedDate = null
        emit('update:model-value', '')
    }
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

function calculatePickerPosition(): void {
    if (!pickerRef.value) return
    
    const PICKER_WIDTH = 320
    const MOBILE_PICKER_WIDTH = 280
    const MARGIN = 16
    
    const pickerWidth = isMobile.value ? MOBILE_PICKER_WIDTH : PICKER_WIDTH
    const rect = pickerRef.value.getBoundingClientRect()
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    
    // Reset position flags
    pickerPosition.alignRight = false
    pickerPosition.alignCenter = false
    pickerPosition.showAbove = false
    
    // Horizontal positioning
    const rightEdgePos = rect.left + pickerWidth
    const leftSpace = rect.left
    const rightSpace = viewportWidth - rect.right
    
    // Check if default left alignment would overflow
    if (rightEdgePos > viewportWidth - MARGIN) {
        // Check if right alignment would fit better
        if (rect.right - pickerWidth >= MARGIN) {
            pickerPosition.alignRight = true
        } else if (leftSpace >= MARGIN && rightSpace >= MARGIN) {
            // Center if both sides have some space but neither fits fully
            pickerPosition.alignCenter = true
        } else {
            // Force right alignment and let CSS max-width handle overflow
            pickerPosition.alignRight = true
        }
    }
    
    // Vertical positioning - check if there's enough space below
    const pickerHeight = 350 // Approximate picker height
    const spaceBelow = viewportHeight - rect.bottom - MARGIN
    const spaceAbove = rect.top - MARGIN
    
    if (spaceBelow < pickerHeight && spaceAbove > spaceBelow) {
        pickerPosition.showAbove = true
    }
}

function togglePicker(): void {
    state.showingPicker = !state.showingPicker
    
    if (state.showingPicker) {
        // Calculate position when opening
        setTimeout(() => calculatePickerPosition(), 0)
    } else {
        // Reset keyboard navigation when closing
        keyboardNavigation.isNavigating = false
        keyboardNavigation.focusedDate = null
    }
}

function selectDate(date: string): void {
    const selectedDate = dayjs(date)
    
    // Check if date is disabled
    if (isDateDisabledHelper(selectedDate)) {
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
    
    const day = dayjs(`${previousMonthFormat}${daysInPreviousMonth}`)
    const previousIsDisabled = isDateDisabledHelper(day)
    
    const prefillDays: CalendarDay[] = [{
        class: previousIsDisabled ? 'has-text-grey is-disabled' : 'has-text-grey',
        date: day,
        day: daysInPreviousMonth,
        disabled: previousIsDisabled
    }]
    
    for (let i = 0; i < firstDayOfMonth - 1; i++) {
        daysInPreviousMonth--
        const day = dayjs(`${previousMonthFormat}${daysInPreviousMonth}`)
        const previousIsDisabled = isDateDisabledHelper(day)
        prefillDays.unshift({
            class: previousIsDisabled ? 'has-text-grey is-disabled' : 'has-text-grey',
            date: day,
            day: daysInPreviousMonth,
            disabled: previousIsDisabled
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
            const isDisabled = isDateDisabledHelper(date)
            
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
            const nextIsDisabled = isDateDisabledHelper(date)
            return {
                class: nextIsDisabled ? 'has-text-grey is-disabled' : 'has-text-grey',
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