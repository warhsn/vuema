<template>
    <div :class="['toast-container', positionClass]">
        <TransitionGroup 
            name="toast"
            tag="div"
            :class="['toast-group', positionClass]"
        >
            <div 
                v-for="notification in notifications" 
                :key="notification.id"
                class="notification-wrapper"
            >
                <div :class="['notification', notification.type]">
                    <button class="delete" @click="removeToast(notification.id)"></button>
                    {{ notification.message }}
                </div>
            </div>
        </TransitionGroup>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import type { ToastPosition } from './types'

export interface ToastNotification {
    id: number
    message: string
    type: string
    timeout?: number
}

export default defineComponent({
    name: 'Toast',
    props: {
        position: {
            type: String as () => ToastPosition,
            default: 'top-right'
        }
    },
    setup(props) {
        const notifications = ref<ToastNotification[]>([])

        const positionClass = computed(() => `toast-${props.position}`)

        const addToast = (notification: Omit<ToastNotification, 'id'>) => {
            const id = Date.now()
            setTimeout(() => {
                notifications.value.push({ ...notification, id })
            }, notifications.value.length * 100)

            if (notification.timeout !== 0) {
                setTimeout(() => {
                    removeToast(id)
                }, notification.timeout || 3000)
            }
        }

        const removeToast = (id: number) => {
            const index = notifications.value.findIndex(n => n.id === id)
            if (index > -1) {
                notifications.value.splice(index, 1)
            }
        }

        return {
            notifications,
            addToast,
            removeToast,
            positionClass
        }
    }
})
</script>

<style scoped>
.toast-container {
    position: fixed;
    z-index: 1000;
    pointer-events: none;
    display: flex;
    flex-direction: column;
}

.toast-group {
    display: flex;
    flex-direction: column;
}

/* Position Classes */
.toast-top-right {
    top: 1rem;
    right: 1rem;
}

.toast-top-center {
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
}

.toast-top-left {
    top: 1rem;
    left: 1rem;
}

.toast-bottom-right {
    bottom: 1rem;
    right: 1rem;
    flex-direction: column-reverse;
}

.toast-bottom-center {
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    flex-direction: column-reverse;
}

.toast-bottom-left {
    bottom: 1rem;
    left: 1rem;
    flex-direction: column-reverse;
}

.notification-wrapper {
    margin: 0.5rem 0;
    min-width: 250px;
    max-width: 350px;
    pointer-events: auto;
}

.notification {
    margin: 0;
    padding: 0.75rem 2.5rem 0.75rem 1.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    position: relative;
}

.toast-top-right .toast-enter-from,
.toast-bottom-right .toast-enter-from {
    transform: translateX(100%);
    opacity: 0;
}

.toast-top-right .toast-leave-to,
.toast-bottom-right .toast-leave-to {
    transform: translateX(100%);
    opacity: 0;
}

.toast-top-left .toast-enter-from,
.toast-bottom-left .toast-enter-from {
    transform: translateX(-100%);
    opacity: 0;
}

.toast-top-left .toast-leave-to,
.toast-bottom-left .toast-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}

.toast-top-center .toast-enter-from,
.toast-bottom-center .toast-enter-from {
    transform: translateY(-20px) translateX(-50%);
    opacity: 0;
}

.toast-top-center .toast-leave-to,
.toast-bottom-center .toast-leave-to {
    transform: translateY(-20px) translateX(-50%);
    opacity: 0;
}

.toast-enter-active,
.toast-leave-active {
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.toast-leave-active {
    position: absolute;
}

.toast-move {
    transition: all 0.3s ease;
}

.delete {
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
}
</style>