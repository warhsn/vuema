<template>
    <div @click="emit('click')" class="dropdown-item">
        <slot />
    </div>
</template>
<script lang="ts" setup>

const emit = defineEmits<{
    (event: 'click'): void
}>()

</script>