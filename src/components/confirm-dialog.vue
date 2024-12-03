<template>
    <Teleport to="body">
        <modal 
            :is-closeable="false"
            :is-active="isActive"
            :is-card="false">
            <p 
                class="is-size-4 has-text-weight-bold mb-4 is-flex is-align-items-center"
                v-if="title">
                <span class="icon mr-2" v-if="titleIcon">
                    <b-icon
                        :icon="titleIcon"
                        :icon-type="titleIconType"
                        :class="['mr-1', titleIconClass]"
                    />
                </span>
                <span>{{ title }}</span>
            </p>
            <slot />
            <buttons class="mt-4" :align="controlAlignment">
                <action-button
                    class="is-small"
                    @click="cancel">
                    Cancel
                </action-button>
                <action-button
                    :processing="confirming"
                    @click="confirm"
                    :class="confirmButtonClass">
                    Proceed
                </action-button>
            </buttons>
        </modal>
    </Teleport>
</template>
<script setup lang="ts">
import type { _Dialog } from '../interfaces/dialog'

withDefaults(
    defineProps<_Dialog>(), {
        confirming: false,
        isActive: false,
        confirmButtonClass: 'is-success',
        controlAlignment: 'right',
        titleIcon: null,
        titleIconType: null,
        titleIconClass: 'has-text-danger'
    }
)

const emits = defineEmits<{
    (e: 'cancel'): void,
    (e: 'confirm'): void,
}>()

function cancel() {
    emits('cancel')
}

function confirm() {
    emits('confirm')
}
</script>