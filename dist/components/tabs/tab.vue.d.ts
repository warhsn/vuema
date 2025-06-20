import { _Tab } from '../../interfaces/tab';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLLIElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<_Tab, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<_Tab> & Readonly<{}>, {
    iconType: string;
    iconPack: string;
    routeParams: Record<string, any>;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLLIElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
