<template>
    <div class="fixed-grid has-4-cols">
        <div class="grid">
            <div class="cell is-flex is-justify-content-start is-align-items-center">
                <div 
                    class="arrow prev is-clickable"
                    @click.stop="$emit('previous-month')"
                ></div>
            </div>
            <div class="cell is-col-span-2">
                <div class="is-flex is-justify-content-center">
                    <div class="select is-small mr-2">
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
            <div class="cell is-flex is-justify-content-end is-align-items-center">
                <div 
                    class="arrow next is-clickable is-pulled-right"
                    @click.stop="$emit('next-month')"
                ></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { CalendarHeaderProps, CalendarHeaderEmits } from './types'

const props = defineProps<CalendarHeaderProps>()
const emit = defineEmits<CalendarHeaderEmits>()

// Array of month names
const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
]

// Generate year range (20 years before and after current year)
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

<style scoped>
.select select {
    padding-right: 2rem;
}
</style>