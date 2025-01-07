import { DatePickerProps } from './types';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        description?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {
        pickerRef: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<DatePickerProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:model-value": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<DatePickerProps> & Readonly<{
    "onUpdate:model-value"?: ((value: string) => any) | undefined;
}>, {
    required: boolean;
    modelValue: string | null;
    format: string;
    minDate: string | null;
    maxDate: string | null;
    withIcon: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
