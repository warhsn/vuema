import { _Modal } from '../interfaces/modal';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        title?(_: {}): any;
        default?(_: {}): any;
        default?(_: {}): any;
        footer?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<_Modal, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    close: () => any;
}, string, import('vue').PublicProps, Readonly<_Modal> & Readonly<{
    onClose?: (() => any) | undefined;
}>, {
    isActive: boolean;
    withHeader: boolean;
    withFooter: boolean;
    isDismisable: boolean;
    isCloseable: boolean;
    isCard: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
