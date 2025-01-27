import { _SelectInput } from '../interfaces/select-input';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
        description?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<_SelectInput, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string | number | (string | number)[]) => any;
}, string, import('vue').PublicProps, Readonly<_SelectInput> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number | (string | number)[]) => any) | undefined;
}>, {
    isSmall: boolean;
    isMedium: boolean;
    isLarge: boolean;
    isRounded: boolean;
    modelValue: string | number | Array<string | number>;
    isLoading: boolean;
    promptLabel: string;
    multiple: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
