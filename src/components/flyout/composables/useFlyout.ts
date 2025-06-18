// composables/useFlyout.ts
import { ref, computed, type Ref } from 'vue'
import type { UseFlyoutReturn, UseFlyoutOptions } from '../types/flyout'

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
export function useFlyout(options: UseFlyoutOptions = {}): UseFlyoutReturn {
    const {
        initialValue = false,
        onOpen,
        onClose
    } = options

    const isOpen = ref(initialValue)

    const open = () => {
        if (!isOpen.value) {
            isOpen.value = true
            onOpen?.()
        }
    }

    const close = () => {
        if (isOpen.value) {
            isOpen.value = false
            onClose?.()
        }
    }

    const toggle = () => {
        if (isOpen.value) {
            close()
        } else {
            open()
        }
    }

    return {
        isOpen,
        open,
        close,
        toggle
    }
}

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
export function useMultipleFlyouts<T extends Record<string, boolean>>(
    flyouts: T
): Record<keyof T, UseFlyoutReturn> {
    const result = {} as Record<keyof T, UseFlyoutReturn>

    for (const [name, initialValue] of Object.entries(flyouts)) {
        result[name as keyof T] = useFlyout({ initialValue })
    }

    return result
}

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
export function useFlyoutWithConfirmation(
    options: UseFlyoutOptions & {
        confirmMessage?: string
        onConfirm?: () => void
        onCancel?: () => void
    } = {}
): UseFlyoutReturn & {
    confirmClose: () => void
    forceClose: () => void
} {
    const {
        confirmMessage = 'Are you sure you want to close?',
        onConfirm,
        onCancel,
        ...flyoutOptions
    } = options

    const baseFlyout = useFlyout(flyoutOptions)

    const confirmClose = () => {
        if (confirm(confirmMessage)) {
            baseFlyout.close()
            onConfirm?.()
        } else {
            onCancel?.()
        }
    }

    const forceClose = () => {
        baseFlyout.close()
    }

    return {
        ...baseFlyout,
        close: confirmClose,
        confirmClose,
        forceClose
    }
}

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
export function useFlyoutForm<T extends Record<string, any>>(
    initialData: T,
    options: {
        onSubmit?: (data: T) => void | Promise<void>
        onReset?: () => void
        resetOnClose?: boolean
    } = {}
): UseFlyoutReturn & {
    formData: Ref<T>
    isDirty: Ref<boolean>
    reset: () => void
    submit: () => Promise<void>
} {
    const { onSubmit, onReset, resetOnClose = true } = options

    const formData = ref({ ...initialData }) as Ref<T>
    const originalData = ref({ ...initialData }) as Ref<T>

    const isDirty = computed((): boolean => {
        return JSON.stringify(formData.value) !== JSON.stringify(originalData.value)
    })

    const reset = (): void => {
        formData.value = { ...originalData.value }
        onReset?.()
    }

    const submit = async (): Promise<void> => {
        if (onSubmit) {
            await onSubmit(formData.value)
            originalData.value = { ...formData.value }
        }
    }

    const flyout = useFlyout({
        onClose: () => {
            if (resetOnClose) {
                reset()
            }
        }
    })

    return {
        ...flyout,
        formData,
        isDirty,
        reset,
        submit
    }
}

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
export function useFlyoutWithLoading(
    options: UseFlyoutOptions = {}
): UseFlyoutReturn & {
    isLoading: Ref<boolean>
    withLoading: <T>(fn: () => Promise<T>) => Promise<T>
} {
    const flyout = useFlyout(options)
    const isLoading = ref(false)

    const withLoading = async <T>(fn: () => Promise<T>): Promise<T> => {
        isLoading.value = true
        try {
            return await fn()
        } finally {
            isLoading.value = false
        }
    }

    return {
        ...flyout,
        isLoading,
        withLoading
    }
}