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

    type ButtonClasses = {
        'has-addons': boolean;
        'is-rounded': boolean;
        'are-normal': boolean;
        'are-small': boolean;
        'are-medium': boolean;
        'are-large': boolean;
        [key: `is-${string}`]: boolean;
    }

    const classes = computed(() => {

        const classes: ButtonClasses = {
            'has-addons': props.hasAddons,
            'is-rounded': props.isRounded,
            'are-normal': props.areNormal,
            'are-small': props.areSmall,
            'are-medium': props.areMedium,
            'are-large': props.areLarge,
        }

        if (props.align) {
            classes[`is-${props.align}`] = true
        }

        return classes
    })

</script>