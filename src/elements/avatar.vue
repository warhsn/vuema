<template>
    <figure class="image is-clickable" :class="_class">
        <img 
            v-if="props.imageUrl"
            :src="props.imageUrl" 
            :class="{
                'is-rounded': props.isRound
            }"    
        />
        <div 
            v-else
            :style="`
                width: ${props.size}px; 
                height: ${props.size}px; 
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: ${props.backgroundColour};
                color: ${props.textColor};`
            ">
            {{ props.name }}
        </div>
    </figure>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { _Avatar } from '../interfaces/avatar'

const props = withDefaults(
    defineProps<_Avatar>(), {
    size: '48',
    backgroundColour: "grey",
    textColor: "white"
})

const _class = computed(() => {
    return {
        'is-48x48': props.size === '48'
    }
})


</script>