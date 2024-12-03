<template>
    <div :style="{
        'width': width || '',
        'min-width': minWidth || '',
    }" class="is-flex" :class="{ 'flex-column': column }">
        <slot />
    </div>
</template>

<script lang="ts">
export default {

    props: {
        column: {
            type: Boolean,
            default: false,
        },
        width: {
            type: String
        },
        minWidth: {
            type: String
        }
    },

}
</script>
