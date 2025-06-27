<template>
    <div class="b-date-picker" ref="pickerRef">
        <!-- Mobile fallback: native date input -->
        <text-input 
            v-if="isMobile"
            :is-expanded="isExpanded"
            :has-addons="withIcon"
            :is-small="isSmall"
            :is-medium="isMedium"
            :is-large="isLarge"
            :placeholder="placeholder"
            :required="required"
            :model-value="nativeDateValue"
            :error="error"
            type="date"
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
                class="is-clickable"
                @click="togglePicker"
                @input="handleManualInput"
                @blur="handleBlur"
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
                <box v-if="showPicker" class="b-date-picker-window" @click.stop>
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
            </transition>
        </template>
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
})

const emit = defineEmits<DatePickerEmits>()

const pickerRef = ref<HTMLElement | null>(null)

// Mobile detection
const isMobile = ref(false)

const state = reactive<DatePickerState>({
    showingPicker: false,
    currentDate: dayjs(),
    selectedDate: null,
    minDate: null,
    maxDate: null,
})

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

onMounted(() => {
    detectMobile()
    initializeState()
    if (!isMobile.value) {
        document.addEventListener('click', handleClickOutside)
    }
    window.addEventListener('resize', detectMobile)
})

onUnmounted(() => {
    if (!isMobile.value) {
        document.removeEventListener('click', handleClickOutside)
    }
    window.removeEventListener('resize', detectMobile)
})

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
    
    const day = dayjs(`${previousMonthFormat}${daysInPreviousMonth}`)
    const previousIsDisabled = !!(
        (state.minDate && day.isBefore(state.minDate)) || 
        (state.maxDate && day.isAfter(state.maxDate))
    )
    
    const prefillDays: CalendarDay[] = [{
        class: previousIsDisabled ? 'has-text-grey is-disabled' : 'has-text-grey',
        date: day,
        day: daysInPreviousMonth,
        disabled: previousIsDisabled
    }]
    
    for (let i = 0; i < firstDayOfMonth - 1; i++) {
        daysInPreviousMonth--
        const day = dayjs(`${previousMonthFormat}${daysInPreviousMonth}`)
        const previousIsDisabled = !!(
            (state.minDate && day.isBefore(state.minDate)) || 
            (state.maxDate && day.isAfter(state.maxDate))
        )
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
            const isDisabled = !!(
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
            const nextIsDisabled = !!(
                (state.minDate && date.isBefore(state.minDate)) || 
                (state.maxDate && date.isAfter(state.maxDate))
            )
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