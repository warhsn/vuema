<template>
    <div class="dropdown" :class="{
        'is-active': isActive,
        'is-hoverable': props.hoverable,
        'is-right': align === 'right',
        'is-left': align === 'left',
    }">
        <dropdown-trigger @click="toggleIsActive">
            <slot name="trigger" :is-active="isActive"/>
        </dropdown-trigger>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
                <slot />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { _Dropdown } from '../interfaces/dropdown'
import { ref } from 'vue'

const props = defineProps<_Dropdown>()

const isActive = ref(false)

function toggleIsActive() {
    if(!props.hoverable) {
        isActive.value = !isActive.value
    }
    
}

</script>