import { _DragDropUploader } from '../interfaces/drag-drop-uploader';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
        description?(_: {}): any;
    };
    refs: {
        fileInput: HTMLInputElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<_DragDropUploader, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "files-selected": (files: File[]) => any;
    "file-added": (file: File) => any;
    "upload-progress": (progress: {
        file: File;
        progress: number;
    }) => any;
    "file-uploaded": (result: {
        file: File;
        response: any;
    }) => any;
    "upload-error": (error: {
        file: File;
        error: string;
    }) => any;
    "upload-completed": (results: any[]) => any;
    "upload-failed": (errors: {
        file: File;
        error: string;
    }[]) => any;
}, string, import('vue').PublicProps, Readonly<_DragDropUploader> & Readonly<{
    "onFiles-selected"?: ((files: File[]) => any) | undefined;
    "onFile-added"?: ((file: File) => any) | undefined;
    "onUpload-progress"?: ((progress: {
        file: File;
        progress: number;
    }) => any) | undefined;
    "onFile-uploaded"?: ((result: {
        file: File;
        response: any;
    }) => any) | undefined;
    "onUpload-error"?: ((error: {
        file: File;
        error: string;
    }) => any) | undefined;
    "onUpload-completed"?: ((results: any[]) => any) | undefined;
    "onUpload-failed"?: ((errors: {
        file: File;
        error: string;
    }[]) => any) | undefined;
}>, {
    multiple: boolean;
    accepts: string;
    uploadButtonText: string;
    clearOnSuccess: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    fileInput: HTMLInputElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
