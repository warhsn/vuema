import { TimePickerProps } from './time-picker/types';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
        default?(_: {}): any;
        description?(_: {}): any;
        description?(_: {}): any;
    };
    refs: {
        pickerRef: HTMLDivElement;
        pickerWindow: unknown;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<TimePickerProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:model-value": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<TimePickerProps> & Readonly<{
    "onUpdate:model-value"?: ((value: string) => any) | undefined;
}>, {
    format: "12" | "24";
    withIcon: boolean;
    minuteStep: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    pickerRef: HTMLDivElement;
    pickerWindow: unknown;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
