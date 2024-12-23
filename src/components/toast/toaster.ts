import { App, createApp } from 'vue'
import Toast from './toast.vue'
import type { ToastPosition } from './types'

class Toaster {
    private toastApp: App
    private toastComponent: any
    private position: ToastPosition
    private timeout: number
    private transition: String

    constructor(position: ToastPosition = 'bottom-right', timeout: number = 4000, transition: String = 'toast') {
        this.position = position
        this.timeout = timeout
        this.transition = transition
        const toastContainer = document.createElement('div')
        toastContainer.id = 'toast-container'
        document.body.appendChild(toastContainer)

        this.toastApp = createApp(Toast, {
            position: this.position
        })
        this.toastComponent = this.toastApp.mount('#toast-container')
    }

    setPosition(position: ToastPosition) {
        this.position = position
        // Recreate the toast component with new position
        this.destroy()
        const toastContainer = document.createElement('div')
        toastContainer.id = 'toast-container'
        document.body.appendChild(toastContainer)
        this.toastApp = createApp(Toast, {
            position: this.position,
            timeout: this.timeout,
            transition: this.transition
        })
        this.toastComponent = this.toastApp.mount('#toast-container')
    }

    success(message: string) {
        this.toastComponent.addToast({
            message,
            type: 'is-success',
            timeout: this.timeout,
            transition: this.transition
        })
    }

    error(message: string) {
        this.toastComponent.addToast({
            message,
            type: 'is-danger',
            timeout: this.timeout,
            transition: this.transition
        })
    }

    warning(message: string) {
        this.toastComponent.addToast({
            message,
            type: 'is-warning',
            timeout: this.timeout,
            transition: this.transition
        })
    }

    info(message: string) {
        this.toastComponent.addToast({
            message,
            type: 'is-info',
            timeout: this.timeout,
            transition: this.transition
        })
    }

    destroy() {
        const container = document.getElementById('toast-container')
        if (container) {
            this.toastApp.unmount()
            container.remove()
        }
    }
}

export default Toaster