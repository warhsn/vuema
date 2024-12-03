<template>
    <div class="buttons"
        :class="classes">
        <slot />
    </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { _Buttons } from '../interfaces/buttons'

    const props = defineProps<_Buttons>()

    const classes = computed(() => {
        const classes = []

        if(props.hasAddons) classes.push('has-addons')
        if(props.align) classes.push(`is-${props.align}`)
        if(props.isRounded) classes.push(`is-rounded`)

        return classes
    })

</script>