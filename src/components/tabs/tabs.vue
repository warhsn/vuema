<template>
    <div class="tabs" :class="{
        'is-boxed': props.isBoxed,
        'is-toggle': props.isToggle,
        'is-toggle-rounded': props.isToggleRounded,
        'is-fullwidth': props.isFullwidth
    }">
        <ul>
            <slot />
        </ul>
    </div>
</template>
<script lang="ts" setup>
import { _Tabs } from '@/interfaces/tabs'

const props = defineProps<_Tabs>()
</script>