<template>
    <div class="time-selector">
        <div class="time-selector-content">
            <!-- Hour Selector -->
            <div class="time-selector-column">
                <div class="time-selector-label">{{ format === '12' ? 'Hour' : 'Hour' }}</div>
                <div class="time-selector-scroll">
                    <button
                        v-for="h in hourOptions"
                        :key="h"
                        type="button"
                        class="time-selector-option"
                        :class="{
                            'is-selected': isHourSelected(h),
                            'is-disabled': isHourDisabled(h)
                        }"
                        :disabled="isHourDisabled(h)"
                        @click="selectHour(h)"
                    >
                        {{ formatHourDisplay(h) }}
                    </button>
                </div>
            </div>

            <!-- Minute Selector -->
            <div class="time-selector-column">
                <div class="time-selector-label">Minute</div>
                <div class="time-selector-scroll">
                    <button
                        v-for="m in minuteOptions"
                        :key="m"
                        type="button"
                        class="time-selector-option"
                        :class="{
                            'is-selected': minute === m,
                            'is-disabled': isMinuteDisabled(m)
                        }"
                        :disabled="isMinuteDisabled(m)"
                        @click="selectMinute(m)"
                    >
                        {{ formatMinuteDisplay(m) }}
                    </button>
                </div>
            </div>

            <!-- Period Selector (for 12-hour format) -->
            <div v-if="format === '12'" class="time-selector-column time-selector-period">
                <div class="time-selector-label">Period</div>
                <div class="time-selector-scroll">
                    <button
                        type="button"
                        class="time-selector-option"
                        :class="{ 'is-selected': period === 'AM' }"
                        @click="selectPeriod('AM')"
                    >
                        AM
                    </button>
                    <button
                        type="button"
                        class="time-selector-option"
                        :class="{ 'is-selected': period === 'PM' }"
                        @click="selectPeriod('PM')"
                    >
                        PM
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import type { TimeSelectorProps, TimeSelectorEmits } from './types'
import { generateHourOptions, generateMinuteOptions, to24Hour, to12Hour, isTimeInRange } from './utils'

const props = withDefaults(defineProps<TimeSelectorProps>(), {
    format: '24',
    minuteStep: 1,
    minTime: null,
    maxTime: null
})

const emit = defineEmits<TimeSelectorEmits>()

const hourOptions = computed(() => generateHourOptions(props.format))
const minuteOptions = computed(() => generateMinuteOptions(props.minuteStep))

const formatHourDisplay = (hour: number): string => {
    return hour.toString().padStart(2, '0')
}

const formatMinuteDisplay = (minute: number): string => {
    return minute.toString().padStart(2, '0')
}

const isHourSelected = (h: number): boolean => {
    if (props.hour === null) return false

    if (props.format === '12') {
        const { hour: hour12 } = to12Hour(props.hour)
        return hour12 === h
    } else {
        return props.hour === h
    }
}

const isHourDisabled = (h: number): boolean => {
    // Convert to 24-hour format for comparison
    const hour24 = props.format === '12' ? to24Hour(h, props.period) : h

    // Check with current minute or use 0 if no minute selected
    const checkMinute = props.minute !== null ? props.minute : 0

    // Check if time is in range
    if (!isTimeInRange(hour24, checkMinute, props.minTime, props.maxTime)) {
        return true
    }

    // Check custom disabled function
    if (props.isTimeDisabled && props.isTimeDisabled(hour24, checkMinute)) {
        return true
    }

    return false
}

const isMinuteDisabled = (m: number): boolean => {
    // Use current hour or 0 if no hour selected
    const checkHour = props.hour !== null ? props.hour : 0

    // Check if time is in range
    if (!isTimeInRange(checkHour, m, props.minTime, props.maxTime)) {
        return true
    }

    // Check custom disabled function
    if (props.isTimeDisabled && props.isTimeDisabled(checkHour, m)) {
        return true
    }

    return false
}

const selectHour = (h: number): void => {
    if (isHourDisabled(h)) return

    const hour24 = props.format === '12' ? to24Hour(h, props.period) : h
    emit('update:hour', hour24)

    // Emit select-time if both hour and minute are set
    if (props.minute !== null) {
        emit('select-time', hour24, props.minute, props.period)
    }
}

const selectMinute = (m: number): void => {
    if (isMinuteDisabled(m)) return

    emit('update:minute', m)

    // Emit select-time if both hour and minute are set
    if (props.hour !== null) {
        emit('select-time', props.hour, m, props.period)
    }
}

const selectPeriod = (p: 'AM' | 'PM'): void => {
    emit('update:period', p)

    // Update hour based on new period
    if (props.hour !== null) {
        const { hour: hour12 } = to12Hour(props.hour)
        const newHour24 = to24Hour(hour12, p)
        emit('update:hour', newHour24)

        if (props.minute !== null) {
            emit('select-time', newHour24, props.minute, p)
        }
    }
}

// Auto-scroll to selected values on mount
onMounted(() => {
    scrollToSelected()
})

// Watch for changes and scroll to selection
watch([() => props.hour, () => props.minute], () => {
    scrollToSelected()
}, { flush: 'post' })

const scrollToSelected = (): void => {
    setTimeout(() => {
        const selectedOptions = document.querySelectorAll('.time-selector-option.is-selected')
        selectedOptions.forEach(option => {
            option.scrollIntoView({ block: 'center', behavior: 'smooth' })
        })
    }, 50)
}
</script>

<style scoped>
.time-selector {
    padding: 0.75rem;
    min-width: 240px;
}

.time-selector-content {
    display: flex;
    gap: 0.5rem;
}

.time-selector-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 60px;
}

.time-selector-period {
    min-width: 70px;
}

.time-selector-label {
    font-size: 0.75rem;
    font-weight: 600;
    text-align: center;
    padding: 0.25rem 0.5rem;
    margin-bottom: 0.5rem;
    color: var(--bulma-text-strong);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.time-selector-scroll {
    max-height: 200px;
    overflow-y: auto;
    border: 1px solid var(--bulma-border);
    border-radius: var(--bulma-radius-small);
    background-color: var(--bulma-scheme-main);
}

.time-selector-scroll::-webkit-scrollbar {
    width: 6px;
}

.time-selector-scroll::-webkit-scrollbar-track {
    background: var(--bulma-scheme-main-bis);
}

.time-selector-scroll::-webkit-scrollbar-thumb {
    background: var(--bulma-border);
    border-radius: var(--bulma-radius-small);
}

.time-selector-scroll::-webkit-scrollbar-thumb:hover {
    background: var(--bulma-border-hover);
}

.time-selector-option {
    width: 100%;
    padding: 0.5rem;
    border: none;
    background: transparent;
    cursor: pointer;
    text-align: center;
    font-size: 0.875rem;
    transition: all 0.2s ease;
    color: var(--bulma-text);
}

.time-selector-option:hover:not(.is-disabled) {
    background-color: var(--bulma-scheme-main-ter);
}

.time-selector-option.is-selected {
    background-color: var(--bulma-primary);
    color: var(--bulma-primary-invert);
    font-weight: 600;
}

.time-selector-option.is-disabled {
    color: var(--bulma-text-weak);
    cursor: not-allowed;
    opacity: 0.5;
}
</style>
