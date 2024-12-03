<template>
    <span :class="{
        'icon-text': textIcon
    }">
        <base-icon
            :icon="icon"
            :icon-type="iconType"
            :icon-pack="iconPack"
            :icon-classes="iconClasses">
        </base-icon>
        <span v-if="$slots.default">
            <slot />
        </span>
    </span>
</template>
<script setup lang="ts">
import { _Icons } from '../interfaces/icons'

defineProps<_Icons>()

</script>