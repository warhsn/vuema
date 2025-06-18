// types/flyout.ts
import type { Component, Ref, VNode } from 'vue'

export type FlyoutPosition = 'left' | 'right' | 'top' | 'bottom'
export type FlyoutSize = 'small' | 'medium' | 'large' | 'full'

export interface FlyoutProps {
    /**
     * Controls the visibility of the flyout
     */
    modelValue: boolean

    /**
     * Title displayed in the header
     */
    title?: string

    /**
     * Position of the flyout
     * @default 'right'
     */
    position?: FlyoutPosition

    /**
     * Size of the flyout
     * @default 'medium'
     */
    size?: FlyoutSize

    /**
     * Whether the flyout can be closed
     * @default true
     */
    closable?: boolean

    /**
     * Whether clicking the overlay closes the flyout
     * @default true
     */
    closeOnOverlay?: boolean

    /**
     * Whether to show the default header
     * @default true
     */
    showHeader?: boolean

    /**
     * Additional CSS classes for the overlay
     */
    overlayClass?: string | string[] | Record<string, boolean>

    /**
     * Additional CSS classes for the container
     */
    containerClass?: string | string[] | Record<string, boolean>

    /**
     * Additional CSS classes for the header
     */
    headerClass?: string | string[] | Record<string, boolean>

    /**
     * Additional CSS classes for the content
     */
    contentClass?: string | string[] | Record<string, boolean>

    /**
     * Additional CSS classes for the footer
     */
    footerClass?: string | string[] | Record<string, boolean>

    /**
     * Additional CSS classes for the close button
     */
    closeButtonClass?: string | string[] | Record<string, boolean>

    /**
     * Aria label for the close button
     * @default 'Close flyout'
     */
    closeAriaLabel?: string

    /**
     * Component to render in the flyout content
     */
    component?: Component | string

    /**
     * Props to pass to the component
     */
    componentProps?: Record<string, any>

    /**
     * Event listeners for the component
     */
    componentListeners?: Record<string, (...args: any[]) => void>

    /**
     * Z-index of the flyout
     * @default 1000
     */
    zIndex?: number

    /**
     * Animation duration in milliseconds
     * @default 300
     */
    animationDuration?: number
}

export interface FlyoutEmits {
    /**
     * Emitted when the flyout visibility changes
     */
    'update:modelValue': [value: boolean]

    /**
     * Emitted when the flyout is requested to close
     */
    'close': []

    /**
     * Emitted when the flyout starts opening
     */
    'open': []

    /**
     * Emitted when the flyout has fully opened
     */
    'opened': []

    /**
     * Emitted when the flyout has fully closed
     */
    'closed': []
}

export interface FlyoutSlots {
    /**
     * Default slot for custom content
     * @param close Function to close the flyout
     * @param flyoutProps Current flyout properties
     */
    default: (props: {
        close: () => void
        flyoutProps: {
            position: FlyoutPosition
            size: FlyoutSize
            title?: string
        }
    }) => VNode[]

    /**
     * Header slot for custom header content
     * @param close Function to close the flyout
     */
    header: (props: { close: () => void }) => VNode[]

    /**
     * Footer slot for custom footer content
     * @param close Function to close the flyout
     */
    footer: (props: { close: () => void }) => VNode[]
}

/**
 * Flyout component instance type for template refs
 */
export interface FlyoutInstance {
    /**
     * Programmatically close the flyout
     */
    close: () => void

    /**
     * Reference to the flyout container element
     */
    flyoutRef: HTMLElement | undefined
}

/**
 * Composable for managing flyout state
 */
export interface UseFlyoutReturn {
    /**
     * Whether the flyout is open
     */
    isOpen: Ref<boolean>

    /**
     * Open the flyout
     */
    open: () => void

    /**
     * Close the flyout
     */
    close: () => void

    /**
     * Toggle the flyout
     */
    toggle: () => void
}

/**
 * Configuration for the useFlyout composable
 */
export interface UseFlyoutOptions {
    /**
     * Initial open state
     * @default false
     */
    initialValue?: boolean

    /**
     * Callback when flyout opens
     */
    onOpen?: () => void

    /**
     * Callback when flyout closes
     */
    onClose?: () => void
}

// Re-export Vue types for convenience
export type { Component, VNode } from 'vue'