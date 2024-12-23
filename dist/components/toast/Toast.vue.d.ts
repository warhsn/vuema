import { ToastPosition } from './types';
export interface ToastNotification {
    id: number;
    message: string;
    type: string;
    timeout?: number;
}
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    position: {
        type: () => ToastPosition;
        default: string;
    };
}>, {
    notifications: import('vue').Ref<{
        id: number;
        message: string;
        type: string;
        timeout?: number | undefined;
    }[], ToastNotification[] | {
        id: number;
        message: string;
        type: string;
        timeout?: number | undefined;
    }[]>;
    addToast: (notification: Omit<ToastNotification, "id">) => void;
    removeToast: (id: number) => void;
    positionClass: import('vue').ComputedRef<string>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    position: {
        type: () => ToastPosition;
        default: string;
    };
}>> & Readonly<{}>, {
    position: ToastPosition;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
