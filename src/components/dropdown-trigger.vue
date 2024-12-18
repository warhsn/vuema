<template>
    <div class="dropdown-trigger">
        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
            <span>
                <slot :is-active="props.isActive"/>
            </span>
            <span class="icon is-small">
                <b-icon icon="angle-down" icon-type="fas"/>
            </span>
        </button>
    </div>
</template>
<script setup lang="ts">
import { _Activity } from '../interfaces/activity'
const props = defineProps<_Activity>()
</script>