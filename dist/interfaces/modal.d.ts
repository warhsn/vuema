import { _Transition } from './transition';
export interface _Modal extends _Transition {
    withCancel?: boolean;
    withHeader?: boolean;
    withFooter?: boolean;
    title?: string;
    isDismissable?: boolean;
    isCloseable?: boolean;
    isCard?: boolean;
    to?: string;
    transition?: string;
    cancelButtonClasses?: string;
}
