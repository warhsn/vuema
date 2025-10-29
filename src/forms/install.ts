import { defineAsyncComponent } from 'vue'

export default function (app: any) {
    app.component('field-label', defineAsyncComponent(() => import('./field-label.vue')))
    app.component('field-error', defineAsyncComponent(() => import('./field-error.vue')))
    app.component('text-input', defineAsyncComponent(() => import('./text-input.vue')))
    app.component('password-input', defineAsyncComponent(() => import('./password-input.vue')))
    app.component('text-area', defineAsyncComponent(() => import('./text-area.vue')))
    app.component('select-input', defineAsyncComponent(() => import('./select-input.vue')))
    app.component('radio-input', defineAsyncComponent(() => import('./radio-input.vue')))
    app.component('checkbox-input', defineAsyncComponent(() => import('./checkbox-input.vue')))
    app.component('switch-input', defineAsyncComponent(() => import('./switch-input.vue')))
    app.component('currency-input', defineAsyncComponent(() => import('./currency-input.vue')))
    app.component('tag-input', defineAsyncComponent(() => import('./tag-input.vue')))
    app.component('file-input', defineAsyncComponent(() => import('./file-input.vue')))
    app.component('number-input', defineAsyncComponent(() => import('./number-input.vue')))
    app.component('date-picker', defineAsyncComponent(() => import('./date-picker/date-picker.vue')))
    app.component('time-input', defineAsyncComponent(() => import('./time-input.vue')))
    app.component('search-input', defineAsyncComponent(() => import('./search-input.vue')))
    app.component('phone-input', defineAsyncComponent(() => import('./phone-input.vue')))
    app.component('drag-drop-uploader', defineAsyncComponent(() => import('./drag-drop-uploader.vue')))
}
