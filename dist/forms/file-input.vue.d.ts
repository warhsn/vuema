import { _FileInput } from '../interfaces/file-input';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<_FileInput, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    selected: (value: File | null) => any;
    uploaded: (value: string | number) => any;
    errorMessage: (value: string | number) => any;
}, string, import('vue').PublicProps, Readonly<_FileInput> & Readonly<{
    onSelected?: ((value: File | null) => any) | undefined;
    onUploaded?: ((value: string | number) => any) | undefined;
    onErrorMessage?: ((value: string | number) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
