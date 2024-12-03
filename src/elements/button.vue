<template>
    <button 
        class="button"
        @click.prevent
        :class="_class"
        :disabled="disabled">
            <span v-if="leftIcon" class="icon">
                <b-icon :icon="leftIcon" :icon-type="leftIconType"/>
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
import { computed } from 'vue'
import { _Buttons } from '../interfaces/buttons'

const props = defineProps<_Buttons>()

const _class = computed(() => {
    return {
        'is-success': props.isSuccess,
        'is-warning': props.isWarning,
        'is-danger': props.isDanger,
        'is-info': props.isInfo,
        'is-loading': props.processing,
        'is-small': props.isSmall,
        'is-medium': props.isMedium,
        'is-large': props.isLarge,
        'is-outlined': props.isOutlined,
        'is-link': props.isLink,
        'is-inverted': props.isInverted,
        'is-rounded': props.isRounded,
        'is-selected': props.isSelected,
        'is-primary': props.isPrimary,
    }
})

</script>