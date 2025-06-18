import { Ref } from 'vue';
import { UseFlyoutReturn, UseFlyoutOptions } from '../types/flyout';
/**
 * Composable for managing flyout state and interactions
 *
 * @param options Configuration options
 * @returns Flyout state and control functions
 *
 * @example
 * ```ts
 * const { isOpen, open, close, toggle } = useFlyout({
 *   onOpen: () => console.log('Flyout opened'),
 *   onClose: () => console.log('Flyout closed')
 * })
 * ```
 */
export declare function useFlyout(options?: UseFlyoutOptions): UseFlyoutReturn;
/**
 * Composable for managing multiple flyouts
 *
 * @param flyouts Object mapping flyout names to their initial states
 * @returns Object with flyout states and control functions
 *
 * @example
 * ```ts
 * const flyouts = useMultipleFlyouts({
 *   settings: false,
 *   profile: false,
 *   notifications: false
 * })
 *
 * flyouts.settings.open()
 * flyouts.profile.toggle()
 * ```
 */
export declare function useMultipleFlyouts<T extends Record<string, boolean>>(flyouts: T): Record<keyof T, UseFlyoutReturn>;
/**
 * Composable for flyout with confirmation before closing
 *
 * @param options Configuration options
 * @returns Flyout state and control functions with confirmation
 *
 * @example
 * ```ts
 * const { isOpen, open, close, confirmClose } = useFlyoutWithConfirmation({
 *   confirmMessage: 'Are you sure you want to close? Changes will be lost.',
 *   onConfirm: () => console.log('Confirmed close')
 * })
 * ```
 */
export declare function useFlyoutWithConfirmation(options?: UseFlyoutOptions & {
    confirmMessage?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
}): UseFlyoutReturn & {
    confirmClose: () => void;
    forceClose: () => void;
};
/**
 * Composable for flyout with form state management
 *
 * @param initialData Initial form data
 * @param options Configuration options
 * @returns Flyout state with form management
 *
 * @example
 * ```ts
 * const form = useFlyoutForm(
 *   { name: '', email: '' },
 *   {
 *     onSubmit: (data) => console.log('Submitted:', data),
 *     onReset: () => console.log('Form reset')
 *   }
 * )
 * ```
 */
export declare function useFlyoutForm<T extends Record<string, any>>(initialData: T, options?: {
    onSubmit?: (data: T) => void | Promise<void>;
    onReset?: () => void;
    resetOnClose?: boolean;
}): UseFlyoutReturn & {
    formData: Ref<T>;
    isDirty: Ref<boolean>;
    reset: () => void;
    submit: () => Promise<void>;
};
/**
 * Composable for flyout with loading state
 *
 * @param options Configuration options
 * @returns Flyout state with loading management
 *
 * @example
 * ```ts
 * const { isOpen, isLoading, open, close, withLoading } = useFlyoutWithLoading()
 *
 * const handleSubmit = withLoading(async () => {
 *   await saveData()
 *   close()
 * })
 * ```
 */
export declare function useFlyoutWithLoading(options?: UseFlyoutOptions): UseFlyoutReturn & {
    isLoading: Ref<boolean>;
    withLoading: <T>(fn: () => Promise<T>) => Promise<T>;
};
