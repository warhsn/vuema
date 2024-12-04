import installLayout from './layout/install'
import installElements from './elements/install'
import installComponents from './components/install'
import installForms from './forms/install'
import type { App, Plugin } from 'vue'
import './scss/styles.scss'

const Vuema: Plugin = {
    install: (app: App) => {
        installLayout(app)
        installElements(app)
        installComponents(app)
        installForms(app)
    }
}

export default Vuema