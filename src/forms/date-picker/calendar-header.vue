<template>
    <div class="mb-3">
        <div class="columns is-mobile">
            <div class="column is-narrow">
                <button 
                    class="button is-small"
                    @click.prevent="$emit('previous-month')">
                    <span class="icon is-small">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                        </svg>
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
                                @click.prevent
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
                                @click.prevent
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
                    @click.prevent="$emit('next-month')"
                >
                    <span class="icon is-small">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M8.59 7.41L10 6l6 6-6 6-1.41-1.41L13.17 12z"/>
                        </svg>
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