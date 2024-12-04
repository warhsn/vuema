<template>
    <div class="fixed-grid has-7-cols">
        <div class="grid">
            <div 
                v-for="day in weekDays" 
                :key="day"
                class="cell has-text-centered has-text-weight-bold"
            >
                {{ day }}
            </div>
            
            <div 
                v-for="(date, index) in calendarDays"
                :key="index"
                class="cell has-text-centered is-clickable"
                :class="getDayClasses(date)"
                @click.stop="$emit('select-date', date.date.format(dateFormat))"
            >
                <span :class="date.class">
                    {{ date.day }}
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { CalendarDay } from './types'

const props = defineProps<{
    calendarDays: CalendarDay[]
    today: string
    selectedDate: string | null
    dateFormat: string
}>()

defineEmits<{
    (e: 'select-date', date: string): void
}>()

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

function getDayClasses(date: CalendarDay) {
    const formattedDate = date.date.format(props.dateFormat)
    return {
        'has-background-primary': formattedDate === props.today,
        'has-background-grey': formattedDate === props.selectedDate,
        'has-text-black': formattedDate === props.today || formattedDate === props.selectedDate,
    }
}
</script>