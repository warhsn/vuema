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
                        <action-button :class="cancelButtonClasses" @click="cancel" v-if="withCancel">
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
    </Teleport>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { _Modal } from '../interfaces/modal'

const props = withDefaults(
    defineProps<_Modal>(), {
        isCard: true,
        withFooter: true,
        withHeader: true,
        isDismissable: false,
        isCloseable: true,
        to: 'body',
        transition: 'modal'
    }
)

const isActive = ref(false)

const emit = defineEmits<{
    (e: 'close'): void,
}>()

function close(): void {
    isActive.value = false
    emit('close')
}

function cancel(): void {
    isActive.value = false
    emit('close')
}

function dismiss(): void {
    if (props.isDismissable) {
        emit('close')
    }
}

defineExpose({
    close
})
</script>