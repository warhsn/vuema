<template>
    <button 
        class="button"
        :class="_class"
        :disabled="disabled">
            <b-icon
                :icon="icon"
                :icon-type="iconType"
            />
    </button>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { _Buttons } from '../interfaces/buttons'

const props = defineProps<_Buttons>()

const _class = computed(() => {
    return {
        'is-success': props.isSuccess,
        'is-warning': props.isWarning,
        'is-danger': props.isDanger,
        'is-info': props.isInfo,
        'is-loading': props.loading,
        'is-small': props.isSmall,
        'is-medium': props.isMedium,
        'is-large': props.isLarge,
        'is-normal': props.isNormal,
        'is-outlined': props.isOutlined,
        'is-link': props.isLink,
        'is-inverted': props.isInverted,
        'is-rounded': props.isRounded,
        'is-selected': props.isSelected,
        'is-primary': props.isPrimary,
        'is-black': props.isBlack,
        'is-white': props.isWhite,
        'is-light': props.isLight,
        'is-text': props.isText,
        'is-ghost': props.isGhost,
        'is-responsive': props.isResponsive,
        'is-fullwidth': props.isFullwidth,
        'is-hovered': props.isHovered,
        'is-focused': props.isFocused,
        'is-active': props.isActive,
        'is-static': props.isStatic,
    }
})

</script>