import installLayout from './layout/install'
import installElements from './elements/install'
import installComponents from './components/install'
import Toaster from './components/toast/toaster'
import { useToaster } from './components/toast/user-toaster'
import { ToasterSymbol } from './symbols'
import installForms from './forms/install'
import type { App, Plugin } from 'vue'
import useDebouncedRef from './utils/debounced-ref'

import './scss/vuema.scss'

const componentOptions = { 
    toaster: { 
        position: 'bottom-right',
        timeout: 4000,
        transition: 'toast',
    }
}

const Vuema: Plugin = {
    install: (app: App, options = componentOptions) => {
        installLayout(app)
        installElements(app)
        installComponents(app)
        installForms(app)
    
        const toaster = new Toaster(
            options?.toaster?.position,
            options?.toaster?.timeout,
            options?.toaster?.transition,
    )
        app.provide(ToasterSymbol, toaster)
        app.config.globalProperties.$toaster = toaster

        app.unmount = () => {
            toaster.destroy()
        }
    }
}

export { Vuema as default, useToaster, useDebouncedRef }