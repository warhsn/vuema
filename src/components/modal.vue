<template>
    <Transition name="modal" mode="in-out">
        <div v-if="isActive" class="modal" :class="{
            'is-active': isActive
        }">
            <div @click="dismiss" class="modal-background"></div>
            <div class="modal-wrapper" :class="{
                'modal-card': isCard,
                'modal-content': !isCard,
            }">
                <header class="modal-card-head" v-if="withHeader && isCard">
                    <p class="modal-card-title">
                        <span v-if="title">
                            {{ title }}
                        </span>
                        <slot name="title" />
                    </p>
                    <button v-if="isCloseable" @click="close" class="delete" aria-label="close"></button>
                </header>
                <section class="modal-card-body" v-if="isCard">
                    <slot />
                </section>
                <footer class="modal-card-foot" v-if="withFooter && isCard">
                    <action-button @click="cancel" v-if="withCancel">
                        Cancel
                    </action-button>
                    <slot name="footer"/>
                </footer>
                <div class="box is-clipped" v-if="!isCard">
                    <slot />
                </div>
        
                <button @click="close" v-if="(!isCard || !withHeader) && isCloseable" class="modal-close is-large" aria-label="close"></button>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { _Modal } from '../interfaces/modal'

const props = withDefaults(
    defineProps<_Modal>(), {
        isActive: false,
        isCard: false,
        withFooter: true,
        withHeader: true,
        isDismisable: false,
        isCloseable: true
    }
)

const emit = defineEmits<{
    (e: 'close'): void,
}>()

function close(): void {
    emit('close')
}

function cancel(): void {
    emit('close')
}

function dismiss(): void {
    if (props.isDismisable) {
        emit('close')
    }
}
</script>

<style scoped>
.modal {
    opacity: 1;
    transition: all 0.3s ease;
}

.modal-enter-active,
.modal-leave-active {
    transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-enter-from .modal-wrapper,
.modal-leave-to .modal-wrapper {
    transform: scale(1.1);
    transition: transform 0.3s ease;
}

.modal-wrapper {
    transform: scale(1);
    transition: transform 0.3s ease;
}
</style>