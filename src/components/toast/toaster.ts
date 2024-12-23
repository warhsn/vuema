import { App, createApp } from 'vue'
import Toast from './Toast.vue'
import type { ToastPosition } from './types'

class Toaster {
    private toastApp: App
    private toastComponent: any
    private position: ToastPosition

    constructor(position: ToastPosition = 'top-right') {
        this.position = position
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
            position: this.position
        })
        this.toastComponent = this.toastApp.mount('#toast-container')
    }

    success(message: string, timeout = 3000) {
        this.toastComponent.addToast({
            message,
            type: 'is-success',
            timeout
        })
    }

    error(message: string, timeout = 3000) {
        this.toastComponent.addToast({
            message,
            type: 'is-danger',
            timeout
        })
    }

    warning(message: string, timeout = 3000) {
        this.toastComponent.addToast({
            message,
            type: 'is-warning',
            timeout
        })
    }

    info(message: string, timeout = 3000) {
        this.toastComponent.addToast({
            message,
            type: 'is-info',
            timeout
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