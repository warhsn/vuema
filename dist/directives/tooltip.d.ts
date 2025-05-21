import { ObjectDirective, App } from 'vue';
interface TooltipOptions {
    content: string;
    position?: 'top' | 'right' | 'bottom' | 'left';
    color?: 'primary' | 'link' | 'info' | 'success' | 'warning' | 'danger' | 'dark';
    size?: 'small' | 'medium' | 'large';
    multiline?: boolean;
    always?: boolean;
}
type TooltipHTMLElement = HTMLElement & {
    _tooltipInstance?: {
        tooltip: HTMLElement;
        cleanup: () => void;
    };
};
export declare const vTooltip: ObjectDirective<TooltipHTMLElement, string | TooltipOptions>;
export declare const TooltipPlugin: {
    install(app: App): void;
};
export default vTooltip;
