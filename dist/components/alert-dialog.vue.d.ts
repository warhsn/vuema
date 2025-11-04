import { _Dialog } from '../interfaces/dialog';
declare function close(): void;
declare function open(): void;
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
    toggle: typeof toggle;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    close: () => any;
}, string, import('vue').PublicProps, Readonly<_Dialog> & Readonly<{
    onClose?: (() => any) | undefined;
}>, {
    to: string;
    transition: string;
    controlAlignment: string;
    titleIcon: string | null;
    titleIconType: string | null;
    titleIconClass: string;
    okButtonClass: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
