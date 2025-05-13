<template>
    <figure class="image is-clickable" :style="`width: ${size}px; height: ${size}px;`">
        <img 
            v-if="imageUrl"
            :width="`${size}px`"
            :height="`${size}px`"
            :src="imageUrl"
            :class="{
                'is-rounded': isRound
            }"    
        />
        <div 
            v-else
            :style="`
                width: ${size}px; 
                height: ${size}px; 
                border-radius: ${isRound ? '50%' : '0'};
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: ${backgroundColour};
                color: ${textColor};`
            ">
            {{ getInitials(name ?? '') }}
        </div>
    </figure>
</template>
<script setup lang="ts">
import { _Avatar } from '../interfaces/avatar'
import { getInitials } from '../utils/initials'

withDefaults(
    defineProps<_Avatar>(), {
    size: 48,
    backgroundColour: "grey",
    textColor: "white",
    isRound: true
})
</script>