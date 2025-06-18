import { default as Flyout } from './flyout.vue';
import { useFlyout, useMultipleFlyouts, useFlyoutWithConfirmation, useFlyoutForm, useFlyoutWithLoading } from './composables/useFlyout';
import { App } from 'vue';
import { FlyoutProps, FlyoutEmits, FlyoutSlots, FlyoutInstance } from './types/flyout';
export declare const VuemaFlyoutPlugin: {
    install(app: App): void;
};
export { Flyout, useFlyout, useMultipleFlyouts, useFlyoutWithConfirmation, useFlyoutForm, useFlyoutWithLoading };
export type { FlyoutProps, FlyoutEmits, FlyoutSlots, FlyoutInstance };
export default Flyout;
