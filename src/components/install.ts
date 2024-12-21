import { defineAsyncComponent } from 'vue'

export default function (app: any) {
    // Side Menu
    app.component('side-menu', defineAsyncComponent(() => import('./side-menu.vue')))
    app.component('side-menu-label', defineAsyncComponent(() => import('./side-menu-label.vue')))
    app.component('side-menu-list', defineAsyncComponent(() => import('./side-menu-list.vue')))
    app.component('side-menu-list-item', defineAsyncComponent(() => import('./side-menu-list-item.vue')))

    // Dropdown
    app.component('dropdown', defineAsyncComponent(() => import('./dropdown.vue')))
    app.component('dropdown-divider', defineAsyncComponent(() => import('./dropdown-divider.vue')))
    app.component('dropdown-item', defineAsyncComponent(() => import('./dropdown-item.vue')))
    app.component('dropdown-trigger', defineAsyncComponent(() => import('./dropdown-trigger.vue')))

    // Modal
    app.component('modal', defineAsyncComponent(() => import('./modal.vue')))

    // Dialogs
    app.component('confirm', defineAsyncComponent(() => import('./confirm-dialog.vue')))
    app.component('alert', defineAsyncComponent(() => import('./alert-dialog.vue')))
}