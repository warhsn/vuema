<template>
    <li :class="{ 
        'is-active': props.routeName === props.activeValue 
    }">
        <router-link 
            :to="{ 
                name: props.routeName,
                params: props.routeParams
            }"
        >
            <b-icon 
                v-if="props.icon"
                :icon="props.icon"
                :icon-type="props.iconType"
                :icon-pack="props.iconPack"
            />
            <span>
                <slot />
            </span>
        </router-link>
    </li>
</template>

<script lang="ts" setup>
import type { _Tab } from '@/interfaces/tab'

const props = withDefaults(defineProps<_Tab>(), {
    routeParams: () => ({}),
    iconType: '',
    iconPack: '',
})
</script>