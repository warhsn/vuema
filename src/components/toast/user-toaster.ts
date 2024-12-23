import { inject } from 'vue'
import { ToasterSymbol } from '../../symbols'
import type Toaster from './toaster'

export function useToaster() {
    const toaster = inject<Toaster>(ToasterSymbol)

    if (!toaster) {
        throw new Error('Toaster not provided! Did you forget to install the plugin?')
    }

    return {
        success: (message: string) => toaster.success(message),
        error: (message: string) => toaster.error(message),
        warning: (message: string) => toaster.warning(message),
        info: (message: string) => toaster.info(message),
    }
}