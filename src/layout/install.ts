import { defineAsyncComponent } from 'vue'

export default function (app: any) {
    app.component('column', defineAsyncComponent(() => import('./column.vue')))
    app.component('columns', defineAsyncComponent(() => import('./columns.vue')))
    app.component('flex', defineAsyncComponent(() => import('./flex.vue')))
}