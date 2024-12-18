<template>
    <div class="column" :class="_class">
        <slot />
    </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { _Columns } from '../interfaces/columns'

const props = defineProps<_Columns>()

const _class = computed(() => {
    return {
        'is-1': props.is1,
        'is-2': props.is2,
        'is-3': props.is3,
        'is-4': props.is4,
        'is-5': props.is5,
        'is-6': props.is6,
        'is-7': props.is7,
        'is-8': props.is8,
        'is-9': props.is9,
        'is-10': props.is10,
        'is-11': props.is11,
        'is-12': props.is12,
        'is-narrow': props.isNarrow,
        'is-mobile': props.isMobile,
        'is-desktop': props.isDesktop,
        'is-half': props.isHalf,
        'is-three-quarters-mobile': props.isThreeQuartersMobile,
        'is-two-thirds-tablet': props.isTwoThirdsTablet,
        'is-half-desktop': props.isHalfDesktop,
        'is-one-third-widescreen': props.isOneThirdWidescreen,
        'is-one-quarter-fullhd': props.isOneQuarterFullhd,
        'is-gapless': props.isGapless,
        'is-multiline': props.isMultiline,
    }
})
</script>