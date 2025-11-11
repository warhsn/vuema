<template>
    <div class="b-time-picker" ref="pickerRef">
        <!-- Mobile fallback: native time input -->
        <div v-if="isMobile">
            <field-label v-if="$slots.default || $slots.description" :required="required">
                <slot />
                <template #description>
                    <slot name="description" />
                </template>
            </field-label>
            <div
                class="field"
                :class="{ 'has-addons': withIcon || showClearButton }">
                <div v-if="withIcon" class="control" :class="slotSizes">
                    <icon-button
                        :is-small="isSmall"
                        :is-medium="isMedium"
                        :is-large="isLarge"
                        @click.prevent
                        class="is-shadowless"
                        role="presentation"
                        icon="clock"
                    />
                </div>
                <div class="control" :class="controlClasses">
                    <input
                        type="time"
                        class="input"
                        :class="inputClasses"
                        :placeholder="placeholder"
                        :disabled="disabled"
                        :value="nativeTimeValue"
                        @input="handleNativeInput"
                        @blur="handleBlur"
                    >
                </div>
                <div v-if="showClearButton" class="control" :class="slotSizes">
                    <icon-button
                        :is-small="isSmall"
                        :is-medium="isMedium"
                        :is-large="isLarge"
                        @click.prevent="clearTime"
                        class="is-shadowless"
                        icon="times-circle"
                        title="Clear time"
                    />
                </div>
            </div>
            <FieldError :error="error"/>
        </div>

        <!-- Desktop: custom time picker -->
        <template v-else>
            <field-label v-if="$slots.default || $slots.description" :required="required">
                <slot />
                <template #description>
                    <slot name="description" />
                </template>
            </field-label>
            <div
                class="field"
                :class="{ 'has-addons': withIcon || showClearButton }">
                <div v-if="withIcon" class="control" :class="slotSizes">
                    <icon-button
                        :is-small="isSmall"
                        :is-medium="isMedium"
                        :is-large="isLarge"
                        @click.prevent="togglePicker"
                        class="is-shadowless"
                        icon="clock"
                    />
                </div>
                <div class="control" :class="controlClasses">
                    <input
                        class="input time-picker-input"
                        :class="inputClasses"
                        :placeholder="placeholder"
                        :disabled="disabled"
                        :value="state.selectedTime"
                        role="combobox"
                        :aria-expanded="state.showingPicker"
                        aria-haspopup="dialog"
                        :aria-describedby="pickerId + '-description'"
                        @click="togglePicker"
                        @input="handleManualInput"
                        @blur="handleBlur"
                        @keydown="handleInputKeydown"
                    >
                </div>
                <div v-if="showClearButton" class="control" :class="slotSizes">
                    <icon-button
                        :is-small="isSmall"
                        :is-medium="isMedium"
                        :is-large="isLarge"
                        @click.prevent="clearTime"
                        class="is-shadowless"
                        icon="times-circle"
                        title="Clear time"
                    />
                </div>
            </div>
            <FieldError :error="error"/>

            <transition name="vuema-fade" mode="in-out">
                <box
                    v-if="showPicker"
                    ref="pickerWindow"
                    class="b-time-picker-window"
                    :style="pickerPositionStyle"
                    role="dialog"
                    :aria-label="`Select time`"
                    :id="pickerId + '-dialog'"
                    @click.stop
                >
                    <time-selector
                        :hour="state.hour"
                        :minute="state.minute"
                        :period="state.period"
                        :format="format"
                        :minute-step="minuteStep"
                        :min-time="minTime"
                        :max-time="maxTime"
                        :is-time-disabled="isTimeDisabled"
                        @update:hour="updateHour"
                        @update:minute="updateMinute"
                        @update:period="updatePeriod"
                        @select-time="handleTimeSelect"
                    />

                    <div class="field is-grouped mt-3 px-3 pb-3">
                        <div class="control">
                            <button
                                class="button is-small is-light"
                                @click="selectNow"
                                type="button"
                            >
                                Now
                            </button>
                        </div>
                        <div class="control">
                            <button
                                class="button is-small is-light"
                                @click="clearTime"
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
            Use arrow keys to navigate, Enter to select, Escape to close
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, computed, onMounted, ref, onUnmounted } from 'vue'
import type { TimePickerProps, TimePickerState, TimePickerEmits } from './time-picker/types'
import { parseTime, formatTime, formatTime24 } from './time-picker/utils'
import TimeSelector from './time-picker/time-selector.vue'
import FieldError from './field-error.vue'
import FieldLabel from './field-label.vue'
import { _hasErrors } from '../computed/errors'
import useSizes from '../utils/sizes'

const props = withDefaults(defineProps<TimePickerProps>(), {
    format: '24',
    withIcon: true,
    minuteStep: 1,
})

const emit = defineEmits<TimePickerEmits>()

const pickerRef = ref<HTMLElement | null>(null)
const pickerWindow = ref<HTMLElement | null>(null)

// Mobile detection
const isMobile = ref(false)

const state = reactive<TimePickerState>({
    showingPicker: false,
    selectedTime: null,
    hour: null,
    minute: null,
    period: 'AM'
})

const pickerPosition = reactive({
    alignRight: false,
    alignCenter: false,
    showAbove: false
})

const pickerId = `time-picker-${Math.random().toString(36).substr(2, 9)}`

const sizes = useSizes(props)
const hasErrors = _hasErrors(props)

const showPicker = computed(() => state.showingPicker)
const showClearButton = computed(() => !!state.selectedTime)

// Convert time format for native input (always HH:mm)
const nativeTimeValue = computed(() => {
    if (!state.selectedTime) return ''

    const parsed = parseTime(state.selectedTime)
    if (!parsed) return ''

    return formatTime24(parsed.hour, parsed.minute)
})

const inputClasses = computed(() => {
    return {
        'is-danger': hasErrors.value,
        'is-rounded': props.isRounded,
        ...sizes
    }
})

const controlClasses = computed(() => {
    return {
        'is-loading': props.isLoading,
        'is-expanded': props.isExpanded
    }
})

const slotSizes = computed(() => {
    const { 'is-expanded': isExpanded, ...sizesWithoutExpanded } = sizes
    return {
        'is-danger': hasErrors.value,
        'is-rounded': props.isRounded,
        ...sizesWithoutExpanded
    }
})

const pickerPositionStyle = computed(() => {
    const style: Record<string, string> = {}

    if (pickerPosition.alignRight) {
        style.right = '0'
        style.left = 'auto'
        style.minWidth = '240px'
        style.maxWidth = 'calc(100vw - 1rem)'
    } else if (pickerPosition.alignCenter) {
        style.left = '50%'
        style.transform = 'translateX(-50%)'
        style.maxWidth = 'calc(100vw - 2rem)'
    } else {
        style.left = '0'
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

    if (event.key === 'Escape') {
        event.preventDefault()
        state.showingPicker = false
    }
}

function handleInputKeydown(event: KeyboardEvent): void {
    const { key } = event

    if ((key === 'ArrowDown' || key === ' ') && !state.showingPicker) {
        event.preventDefault()
        togglePicker()
        return
    }

    if (key === 'Escape' && state.showingPicker) {
        event.preventDefault()
        state.showingPicker = false
        return
    }
}

function detectMobile(): void {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    const isSmallScreen = window.innerWidth <= 768
    const isMobileUserAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    isMobile.value = isTouchDevice && (isSmallScreen || isMobileUserAgent)
}

function initializeState(): void {
    if (props.modelValue) {
        const timeValue = String(props.modelValue)
        const parsed = parseTime(timeValue)
        if (parsed) {
            state.hour = parsed.hour
            state.minute = parsed.minute
            state.period = parsed.period
            state.selectedTime = formatTime(parsed.hour, parsed.minute, props.format)
        } else {
            resetState()
        }
    } else {
        resetState()
    }
}

function resetState(): void {
    state.hour = null
    state.minute = null
    state.period = 'AM'
    state.selectedTime = null
}

function handleNativeInput(event: Event): void {
    const target = event.target as HTMLInputElement
    const inputValue = target.value.trim()

    if (!inputValue) {
        resetState()
        emit('update:model-value', '')
        return
    }

    // Native input provides HH:mm format
    const parsed = parseTime(inputValue)
    if (parsed) {
        state.hour = parsed.hour
        state.minute = parsed.minute
        state.period = parsed.period
        const formattedTime = formatTime(parsed.hour, parsed.minute, props.format)
        state.selectedTime = formattedTime
        emit('update:model-value', formattedTime)
    } else {
        resetState()
        emit('update:model-value', '')
    }
}

function handleManualInput(event: Event): void {
    const target = event.target as HTMLInputElement
    const inputValue = target.value.trim()

    if (!inputValue) {
        resetState()
        emit('update:model-value', '')
        return
    }

    const parsed = parseTime(inputValue)
    if (parsed) {
        state.hour = parsed.hour
        state.minute = parsed.minute
        state.period = parsed.period
        state.selectedTime = inputValue
        emit('update:model-value', inputValue)
    }
}

function handleBlur(): void {
    if (!state.selectedTime) {
        resetState()
        emit('update:model-value', '')
        return
    }

    const parsed = parseTime(state.selectedTime)
    if (!parsed) {
        resetState()
        emit('update:model-value', '')
        return
    }

    // Reformat to ensure consistency
    const formattedTime = formatTime(parsed.hour, parsed.minute, props.format)
    state.selectedTime = formattedTime
    emit('update:model-value', formattedTime)
}

function handleClickOutside(event: MouseEvent): void {
    const target = event.target as HTMLElement
    if (pickerRef.value && !pickerRef.value.contains(target)) {
        state.showingPicker = false
    }
}

function calculatePickerPosition(): void {
    if (!pickerRef.value) return

    const PICKER_WIDTH = 280
    const MARGIN = 16

    const rect = pickerRef.value.getBoundingClientRect()
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight

    pickerPosition.alignRight = false
    pickerPosition.alignCenter = false
    pickerPosition.showAbove = false

    const rightEdgePos = rect.left + PICKER_WIDTH
    const leftSpace = rect.left
    const rightSpace = viewportWidth - rect.right

    if (rightEdgePos > viewportWidth - MARGIN) {
        if (rect.right - PICKER_WIDTH >= MARGIN) {
            pickerPosition.alignRight = true
        } else if (leftSpace >= MARGIN && rightSpace >= MARGIN) {
            pickerPosition.alignCenter = true
        } else {
            pickerPosition.alignRight = true
        }
    }

    const pickerHeight = 320
    const spaceBelow = viewportHeight - rect.bottom - MARGIN
    const spaceAbove = rect.top - MARGIN

    if (spaceBelow < pickerHeight && spaceAbove > spaceBelow) {
        pickerPosition.showAbove = true
    }
}

function togglePicker(): void {
    if (props.disabled) return

    state.showingPicker = !state.showingPicker

    if (state.showingPicker) {
        setTimeout(() => calculatePickerPosition(), 0)
    }
}

function updateHour(hour: number): void {
    state.hour = hour
}

function updateMinute(minute: number): void {
    state.minute = minute
}

function updatePeriod(period: 'AM' | 'PM'): void {
    state.period = period
}

function handleTimeSelect(hour: number, minute: number, period: 'AM' | 'PM'): void {
    state.hour = hour
    state.minute = minute
    state.period = period

    const formattedTime = formatTime(hour, minute, props.format)
    state.selectedTime = formattedTime
    emit('update:model-value', formattedTime)

    // Close picker after selection
    setTimeout(() => {
        state.showingPicker = false
    }, 200)
}

function selectNow(): void {
    const now = new Date()
    const hour = now.getHours()
    const minute = now.getMinutes()

    state.hour = hour
    state.minute = minute
    state.period = hour >= 12 ? 'PM' : 'AM'

    const formattedTime = formatTime(hour, minute, props.format)
    state.selectedTime = formattedTime
    emit('update:model-value', formattedTime)

    state.showingPicker = false
}

function clearTime(): void {
    resetState()
    emit('update:model-value', '')
    state.showingPicker = false
}
</script>
