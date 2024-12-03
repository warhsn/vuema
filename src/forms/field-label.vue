<template>
    <label 
        :for="forLabel"
        class="label">
        <slot />
        <span 
            v-if="required" 
            class="has-text-danger">
            *
        </span>
        <slot name="description" />
    </label>
</template>
<script setup lang="ts">
import { _Forms } from '../interfaces/forms'

defineProps<_Forms>()

</script>