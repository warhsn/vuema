<template>
    <button
        :disabled="disabled"
        type="submit" 
        class="button"
        :class="_class"
        @click.prevent="$emit('submit')">
            <span v-if="leftIcon" class="icon">
                <b-icon :icon="leftIcon"/>
            </span>
            <span>
                <slot />
            </span>
            <span v-if="rightIcon" class="icon">
                <b-icon v-if="rightIcon" :icon="rightIcon"/>
            </span>
    </button>
</template>
<script setup lang="ts">
import { computed, withDefaults } from 'vue'
import { _Buttons } from '../interfaces/buttons'

const props = withDefaults(defineProps<_Buttons>(), {
    disabled: false
})

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