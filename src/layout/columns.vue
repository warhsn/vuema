<template>
    <div class="columns" :class="_class">
        <slot />
    </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { _Columns } from '../interfaces/columns'

const props = defineProps<_Columns>()

const _class = computed(() => {
    return {
        'is-centered': props.isCentered,
    }
})
</script>