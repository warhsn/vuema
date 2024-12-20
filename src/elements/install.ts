import { defineAsyncComponent } from 'vue'

export default function (app: any) {
    app.component('base-icon', defineAsyncComponent(() => import('./base-icon.vue')))
    app.component('action-button', defineAsyncComponent(() => import('./button.vue')))
    app.component('icon-button', defineAsyncComponent(() => import('./icon-button.vue')))
    app.component('submit-button', defineAsyncComponent(() => import('./submit-button.vue')))
    app.component('buttons', defineAsyncComponent(() => import('./buttons.vue')))
    app.component('loader', defineAsyncComponent(() => import('./loader.vue')))
    app.component('block', defineAsyncComponent(() => import('./block.vue')))
    app.component('box', defineAsyncComponent(() => import('./box.vue')))
    app.component('b-icon', defineAsyncComponent(() => import('./icon.vue')))
    app.component('avatar', defineAsyncComponent(() => import('./avatar.vue')))
}    