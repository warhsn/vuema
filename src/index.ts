import installLayout from './layout/install'
import installElements from './elements/install'
import installComponents from './components/install'
import Toaster from './components/toast/toaster'
import { useToaster } from './components/toast/user-toaster'
import { ToasterSymbol } from './symbols'
import installForms from './forms/install'
import type { App, Plugin } from 'vue'

import './scss/styles.scss'

const Vuema: Plugin = {
    install: (app: App) => {
        installLayout(app)
        installElements(app)
        installComponents(app)
        installForms(app)
    
        const toaster = new Toaster('bottom-right')
        app.provide(ToasterSymbol, toaster)
        app.config.globalProperties.$toaster = toaster

        app.unmount = () => {
            toaster.destroy()
        }
    }
}

export { Vuema as default, useToaster }