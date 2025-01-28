import { _TextInput } from '../interfaces/text-input';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
        description?(_: {}): any;
        left?(_: {
            class: {
                'is-small': boolean;
                'is-medium': boolean;
                'is-large': boolean;
            };
        }): any;
        inner?(_: {}): any;
        right?(_: {
            class: {
                'is-small': boolean;
                'is-medium': boolean;
                'is-large': boolean;
            };
        }): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<_TextInput, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    focus: () => any;
    "update:modelValue": (value: string | number) => any;
}, string, import('vue').PublicProps, Readonly<_TextInput> & Readonly<{
    onFocus?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
