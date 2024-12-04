<template>
    <div>
        <div class="has-text-centered">
            <div class="columns is-mobile mb-0 has-text-weight-semibold">
                <div class="column p-1" v-for="day in weekDays" :key="day">{{ day }}</div>
            </div>
            <div class="columns is-mobile is-multiline mb-0">
                <div 
                    v-for="(date, index) in calendarDays"
                    :key="index"
                    class="column is-1-mobile p-1"
                    @click.stop="date.disabled ? null : $emit('select-date', date.date.format(dateFormat))"
                >
                    <span 
                        class="is-block p-1 has-text-centered"
                        :class="[
                            date.class,
                            {
                                'has-background-primary has-text-white': date.date.format(dateFormat) === today,
                                'has-background-grey-light': date.date.format(dateFormat) === selectedDate,
                                'is-clickable': !date.disabled
                            }
                        ]"
                    >
                        {{ date.day }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { CalendarGridProps } from './types'

const props = defineProps<CalendarGridProps>()

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
</script>

<style scoped>
.column.is-1-mobile {
    flex: none;
    width: 14.28571%;
}
</style>