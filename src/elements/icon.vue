<template>
    <base-icon
        :icon="props.icon"
        :icon-type="props.iconType"
        :icon-pack="props.iconPack"
        :icon-classes="props.iconClasses">
    </base-icon>
</template>
<script setup lang="ts">
import { _Icons } from '../interfaces/icons'

const props = defineProps<_Icons>()

</script>