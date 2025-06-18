// src/components/flyout/index.ts
import Flyout from './flyout.vue'
import { useFlyout, useMultipleFlyouts, useFlyoutWithConfirmation, useFlyoutForm, useFlyoutWithLoading } from './composables/useFlyout'
import type { App } from 'vue'
import type { FlyoutProps, FlyoutEmits, FlyoutSlots, FlyoutInstance } from './types/flyout'

// Plugin installation
export const VuemaFlyoutPlugin = {
    install(app: App) {
        app.component('VuemaFlyout', Flyout)
    }
}

// Individual exports
export {
    Flyout,
    useFlyout,
    useMultipleFlyouts,
    useFlyoutWithConfirmation,
    useFlyoutForm,
    useFlyoutWithLoading
}

// Type exports
export type {
    FlyoutProps,
    FlyoutEmits,
    FlyoutSlots,
    FlyoutInstance
}

// Default export
export default Flyout