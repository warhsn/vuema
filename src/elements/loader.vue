<template>
    <div :style="containerStyle">
        <flex width="100%" column class="filter-container align-center is-justify-content-center" v-if="loading">
            <svg v-bind="{ viewBox: '0 0 50 50', style: { width: '48px', height: '48px' } }">
                <circle class="spinner" v-bind="{ cx: 25, cy: 25, r: 20 }" fill="none" stroke-width="1" />
                <circle class="dot" v-bind="{ cx: 10, cy: 10, r: 2 }" />
            </svg>
        </flex>
        <slot v-else />
    </div>
</template>

<script setup lang = "ts" >
import { computed } from 'vue';

    const props = withDefaults(
        defineProps<{ loading?: boolean }>(), {
        loading: true
    })

    const containerStyle = computed((): string => {
        if (props.loading) {
            return 'height: 100vh; width: 100%; display: flex; align-items: center; justify-content: center;'
        }
        return ''
    })

</script>

<style lang="scss" scoped>

.filter-container {
    filter: drop-shadow(0 0 0.35rem rgba(red, 0.75));
}

svg {
    animation: rotate 2s linear infinite;
    z-index: 2;

    circle.spinner {
        stroke: red;
        stroke-linecap: round;
        animation: dash 1.5s cubic-bezier(0.45, 0, 0.55, 1) infinite;
    }

    circle.dot {
        fill: red;
    }
}

@keyframes rotate {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes dash {
    0% {
        stroke-dasharray: 1, 150;
        stroke-dashoffset: 0;
    }

    50% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -35;
    }

    100% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -124;
    }
}
</style>
