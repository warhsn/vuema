import { ToastPosition } from './types';
declare class Toaster {
    private toastApp;
    private toastComponent;
    private position;
    private timeout;
    private transition;
    constructor(position?: ToastPosition, timeout?: number, transition?: String);
    setPosition(position: ToastPosition): void;
    success(message: string): void;
    error(message: string): void;
    warning(message: string): void;
    info(message: string): void;
    destroy(): void;
}
export default Toaster;
