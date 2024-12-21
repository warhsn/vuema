<template>
<div>
    <div class="is-inline-block" @click="isActive = !isActive">
        <slot name="trigger" />
    </div>
    <Teleport :to="props.to">
        <Transition :name="props.transition" mode="in-out">
            <div v-if="isActive" class="modal" :class="{
                'is-active': isActive
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
                                @click="close"
                                :class="okButtonClass">
                                Okay
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
        okButtonClass: 'is-success',
        controlAlignment: 'right',
        titleIcon: null,
        titleIconType: null,
        titleIconClass: 'has-text-danger',
        to: 'body',
        transition: 'modal'
    }
)

const isActive = ref(false)

const emits = defineEmits<{
    (e: 'close'): void,
}>()

function close() {
    isActive.value = false
}
</script>