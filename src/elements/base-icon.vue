<template>
    <span class="icon">
        <i :class="[props.iconType || 'fa-solid', `fa-${props.icon}`, props.iconClasses]"></i>
    </span>
</template>
<script setup lang="ts">
import { _Icons } from '../interfaces/icons'

const props = defineProps<_Icons>()
</script>