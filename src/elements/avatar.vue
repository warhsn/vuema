<template>
    <figure class="image is-clickable" :class="_class">
        <img 
            v-if="props.imageUrl"
            :src="props.imageUrl" 
            :style="imageStyle"
            :class="{
                'is-rounded': props.isRound
            }"    
        />
        <div 
            v-else
            :style="avatarStyle">
            {{ getInitials(props.name ?? '') }}
        </div>
    </figure>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { _Avatar } from '../interfaces/avatar'
import { getInitials } from '@/utils/initials';

const props = withDefaults(
    defineProps<_Avatar>(), {
    size: 48,
    backgroundColour: "grey",
    textColor: "white"
})

const imageStyle = computed(() => {
    return {
        width: `${props.size}px`,
        height: `${props.size}px`
    }
})

const avatarStyle = computed(() => {
    return {
        width: `${props.size}px`,
        height: `${props.size}px`,
        borderRadius: props.isRound ? '50%' : '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: props.backgroundColour,
        color: props.textColor
    }
})

const _class = computed(() => {
    return {
        [`is-${props.size}x${props.size}`]: true
    }
})
</script>