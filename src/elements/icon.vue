<template>
    <base-icon
        :icon="icon"
        :icon-type="iconType"
        :icon-pack="iconPack"
        :icon-classes="iconClasses">
    </base-icon>
</template>
<script setup lang="ts">
import { _Icons } from '../interfaces/icons'

defineProps<_Icons>()

</script>