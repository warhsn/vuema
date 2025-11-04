import { _TextInput } from '../interfaces/text-input';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
        description?(_: {}): any;
        left?(_: {}): any;
        inner?(_: {}): any;
        right?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<_TextInput, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    blur: () => any;
    focus: () => any;
    "update:modelValue": (value: string | number) => any;
}, string, import('vue').PublicProps, Readonly<_TextInput> & Readonly<{
    onBlur?: (() => any) | undefined;
    onFocus?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
}>, {
    type: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
