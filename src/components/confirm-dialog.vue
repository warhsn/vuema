<template>
<div>
    <div class="is-inline-block" @click="isActive = !isActive">
        <slot name="trigger" />
    </div>
    <Teleport :to="props.to">
        <Transition :name="props.transition" mode="in-out">
            <div v-if="isActive || confirming" class="modal" :class="{
                'is-active': isActive || confirming
            }">
                <div class="modal-background"></div>
                <div class="modal-wrapper modal-content">
                    <div class="box is-clipped">
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
                                {{ props.cancelText }}
                            </action-button>
                            <action-button
                                :loading="confirming"
                                @click="confirm"
                                :class="confirmButtonClass">
                                {{ props.confirmText }}
                            </action-button>
                        </buttons>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import type { _Dialog } from '../interfaces/dialog'

const props = withDefaults(
    defineProps<_Dialog>(), {
        confirming: false,
        confirmButtonClass: 'is-success',
        controlAlignment: 'right',
        titleIcon: null,
        titleIconType: null,
        titleIconClass: '',
        to: 'body',
        transition: 'modal',
        confirmText: 'Proceed',
        cancelText: 'Cancel'
    }
)

const isActive = ref(false)

const emits = defineEmits<{
    (e: 'cancel'): void,
    (e: 'confirm'): void,
}>()

function cancel() {
    isActive.value = false
    emits('cancel')
}

function confirm() {
    isActive.value = false
    emits('confirm')
}

function open() {
    isActive.value = true
}

function close() {
    isActive.value = false
}

function toggle() {
    isActive.value = !isActive.value
}

defineExpose({
    open,
    close,
    cancel,
    confirm,
    toggle
})
</script>