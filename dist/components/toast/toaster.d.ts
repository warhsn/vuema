import { ToastPosition } from './types';
declare class Toaster {
    private toastApp;
    private toastComponent;
    private position;
    constructor(position?: ToastPosition);
    setPosition(position: ToastPosition): void;
    success(message: string, timeout?: number): void;
    error(message: string, timeout?: number): void;
    warning(message: string, timeout?: number): void;
    info(message: string, timeout?: number): void;
    destroy(): void;
}
export default Toaster;
