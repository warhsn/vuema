<template>
    <span class="icon">
        <i :class="`${iconType || 'fa-solid'} fa-${icon} ${iconClasses}`"></i>
    </span>
</template>
<script setup lang="ts">
import { _Icons } from '../interfaces/icons'

defineProps<_Icons>()
</script>