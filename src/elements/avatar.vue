<template>
    <figure class="image is-clickable" :style="`width: ${size}px; height: ${size}px;`">
        <div
            :style="`
                width: ${size}px;
                height: ${size}px;
                border-radius: ${isRound ? '50%' : '0'};
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: ${backgroundColour};
                color: ${textColor};
                ${imageUrl ? `background-image: url('${imageUrl}'); background-size: cover; background-position: center;` : ''}`
            ">
            {{ imageUrl ? '' : getInitials(name ?? '') }}
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