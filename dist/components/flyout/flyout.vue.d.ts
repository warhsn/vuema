import { Component } from 'vue';
interface Props {
    modelValue: boolean;
    title?: string;
    position?: 'left' | 'right' | 'top' | 'bottom';
    size?: 'small' | 'medium' | 'large' | 'full';
    closable?: boolean;
    closeOnOverlay?: boolean;
    showHeader?: boolean;
    component?: Component | string;
    componentProps?: Record<string, any>;
    componentListeners?: Record<string, (...args: any[]) => void>;
    zIndex?: number;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        header?(_: {}): any;
        default?(_: {
            close: () => void;
        }): any;
        footer?(_: {
            close: () => void;
        }): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    close: () => any;
    "update:modelValue": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onClose?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}>, {
    size: "small" | "medium" | "large" | "full";
    position: "left" | "right" | "top" | "bottom";
    closable: boolean;
    closeOnOverlay: boolean;
    showHeader: boolean;
    zIndex: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
