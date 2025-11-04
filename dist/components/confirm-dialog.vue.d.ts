import { _Dialog } from '../interfaces/dialog';
declare function cancel(): void;
declare function confirm(): void;
declare function open(): void;
declare function close(): void;
declare function toggle(): void;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        trigger?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<_Dialog, {
    open: typeof open;
    close: typeof close;
    cancel: typeof cancel;
    confirm: typeof confirm;
    toggle: typeof toggle;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    cancel: () => any;
    confirm: () => any;
}, string, import('vue').PublicProps, Readonly<_Dialog> & Readonly<{
    onCancel?: (() => any) | undefined;
    onConfirm?: (() => any) | undefined;
}>, {
    to: string;
    transition: string;
    cancelText: string;
    confirmText: string;
    confirming: boolean;
    confirmButtonClass: string;
    controlAlignment: string;
    titleIcon: string | null;
    titleIconType: string | null;
    titleIconClass: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
