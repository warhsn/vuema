<template>
    <div class="box p-2">
        <div class="columns is-mobile is-centered is-gapless mb-0">
            <div class="column is-narrow">
                <button 
                    class="button is-small"
                    @click.stop="$emit('previous-month')"
                >
                    <span class="icon is-small">
                        <i class="fas fa-chevron-left"></i>
                    </span>
                </button>
            </div>
            <div class="column is-narrow px-2">
                <div class="field is-grouped">
                    <div class="control">
                        <div class="select is-small">
                            <select 
                                :value="month"
                                @change="handleMonthChange"
                                @click.stop
                            >
                                <option 
                                    v-for="(monthName, index) in months" 
                                    :key="monthName"
                                    :value="index"
                                >
                                    {{ monthName }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="control">
                        <div class="select is-small">
                            <select 
                                :value="year"
                                @change="handleYearChange"
                                @click.stop
                            >
                                <option 
                                    v-for="yearNum in yearRange" 
                                    :key="yearNum"
                                    :value="yearNum"
                                >
                                    {{ yearNum }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-narrow">
                <button 
                    class="button is-small"
                    @click.stop="$emit('next-month')"
                >
                    <span class="icon is-small">
                        <i class="fas fa-chevron-right"></i>
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { CalendarHeaderProps, CalendarHeaderEmits } from './types'

const props = defineProps<CalendarHeaderProps>()
const emit = defineEmits<CalendarHeaderEmits>()

const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
]

const currentYear = new Date().getFullYear()
const yearRange = computed(() => {
    const years: number[] = []
    for (let year = currentYear - 20; year <= currentYear + 20; year++) {
        years.push(year)
    }
    return years
})

function handleMonthChange(event: Event) {
    const target = event.target as HTMLSelectElement
    const newMonth = parseInt(target.value)
    emit('month-change', newMonth)
}

function handleYearChange(event: Event) {
    const target = event.target as HTMLSelectElement
    const newYear = parseInt(target.value)
    emit('year-change', newYear)
}
</script>