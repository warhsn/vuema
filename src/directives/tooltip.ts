import type { ObjectDirective } from 'vue'
import type { App } from 'vue'

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
    }
}

const DEFAULT_OPTIONS: Partial<TooltipOptions> = {
    position: 'top',
    color: 'dark',
    size: 'medium',
    multiline: false,
    always: false,
}

const createTooltip = (el: TooltipHTMLElement, options: TooltipOptions) => {
    if (el._tooltipInstance) {
        el._tooltipInstance.cleanup();
    }

    const mergedOptions = { ...DEFAULT_OPTIONS, ...options };

    const tooltip = document.createElement('div');
    tooltip.className = 'bulma-tooltip';
    tooltip.textContent = mergedOptions.content;
    tooltip.style.position = 'absolute';
    tooltip.style.zIndex = '9999';
    tooltip.style.padding = '0.5rem 0.75rem';
    tooltip.style.borderRadius = '4px';
    tooltip.style.fontSize = '0.85rem';
    tooltip.style.pointerEvents = 'none';
    tooltip.style.opacity = '0';
    tooltip.style.transition = 'opacity 150ms ease-in-out';

    if (mergedOptions.size === 'small') {
        tooltip.style.fontSize = '0.75rem';
        tooltip.style.padding = '0.25rem 0.5rem';
    } else if (mergedOptions.size === 'large') {
        tooltip.style.fontSize = '1rem';
        tooltip.style.padding = '0.75rem 1rem';
    }

    if (mergedOptions.color === 'primary') {
        tooltip.style.backgroundColor = '#00d1b2';
        tooltip.style.color = '#fff';
    } else if (mergedOptions.color === 'link') {
        tooltip.style.backgroundColor = '#3273dc';
        tooltip.style.color = '#fff';
    } else if (mergedOptions.color === 'info') {
        tooltip.style.backgroundColor = '#209cee';
        tooltip.style.color = '#fff';
    } else if (mergedOptions.color === 'success') {
        tooltip.style.backgroundColor = '#23d160';
        tooltip.style.color = '#fff';
    } else if (mergedOptions.color === 'warning') {
        tooltip.style.backgroundColor = '#ffdd57';
        tooltip.style.color = 'rgba(0, 0, 0, 0.7)';
    } else if (mergedOptions.color === 'danger') {
        tooltip.style.backgroundColor = '#ff3860';
        tooltip.style.color = '#fff';
    } else {
        tooltip.style.backgroundColor = '#363636';
        tooltip.style.color = '#fff';
    }

    if (mergedOptions.multiline) {
        tooltip.style.maxWidth = '300px';
        tooltip.style.whiteSpace = 'pre-wrap';
    } else {
        tooltip.style.whiteSpace = 'nowrap';
    }

    const arrow = document.createElement('div');
    arrow.style.position = 'absolute';
    arrow.style.width = '0';
    arrow.style.height = '0';
    arrow.style.borderStyle = 'solid';
    arrow.style.borderWidth = '6px';
    arrow.style.pointerEvents = 'none';

    if (mergedOptions.position === 'top') {
        arrow.style.borderColor = `${tooltip.style.backgroundColor} transparent transparent transparent`;
        arrow.style.bottom = '-12px';
        arrow.style.left = '50%';
        arrow.style.transform = 'translateX(-50%)';
    } else if (mergedOptions.position === 'right') {
        arrow.style.borderColor = `transparent ${tooltip.style.backgroundColor} transparent transparent`;
        arrow.style.left = '-12px';
        arrow.style.top = '50%';
        arrow.style.transform = 'translateY(-50%)';
    } else if (mergedOptions.position === 'bottom') {
        arrow.style.borderColor = `transparent transparent ${tooltip.style.backgroundColor} transparent`;
        arrow.style.top = '-12px';
        arrow.style.left = '50%';
        arrow.style.transform = 'translateX(-50%)';
    } else if (mergedOptions.position === 'left') {
        arrow.style.borderColor = `transparent transparent transparent ${tooltip.style.backgroundColor}`;
        arrow.style.right = '-12px';
        arrow.style.top = '50%';
        arrow.style.transform = 'translateY(-50%)';
    }

    tooltip.appendChild(arrow);
    document.body.appendChild(tooltip);

    const updatePosition = () => {
        const rect = el.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();

        if (mergedOptions.position === 'top') {
            tooltip.style.left = `${rect.left + rect.width / 2 - tooltipRect.width / 2 + window.scrollX}px`;
            tooltip.style.top = `${rect.top - tooltipRect.height - 8 + window.scrollY}px`;
        } else if (mergedOptions.position === 'right') {
            tooltip.style.left = `${rect.right + 8 + window.scrollX}px`;
            tooltip.style.top = `${rect.top + rect.height / 2 - tooltipRect.height / 2 + window.scrollY}px`;
        } else if (mergedOptions.position === 'bottom') {
            tooltip.style.left = `${rect.left + rect.width / 2 - tooltipRect.width / 2 + window.scrollX}px`;
            tooltip.style.top = `${rect.bottom + 8 + window.scrollY}px`;
        } else if (mergedOptions.position === 'left') {
            tooltip.style.left = `${rect.left - tooltipRect.width - 8 + window.scrollX}px`;
            tooltip.style.top = `${rect.top + rect.height / 2 - tooltipRect.height / 2 + window.scrollY}px`;
        }
    };

    const showTooltip = () => {
        updatePosition();
        tooltip.style.opacity = '1';
    };

    const hideTooltip = () => {
        if (!mergedOptions.always) {
            tooltip.style.opacity = '0';
        }
    };

    el.addEventListener('mouseenter', showTooltip);
    el.addEventListener('mouseleave', hideTooltip);
    el.addEventListener('focus', showTooltip);
    el.addEventListener('blur', hideTooltip);

    if (mergedOptions.always) {
        showTooltip();
    }

    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition);

    el._tooltipInstance = {
        tooltip,
        cleanup: () => {
            el.removeEventListener('mouseenter', showTooltip);
            el.removeEventListener('mouseleave', hideTooltip);
            el.removeEventListener('focus', showTooltip);
            el.removeEventListener('blur', hideTooltip);
            window.removeEventListener('resize', updatePosition);
            window.removeEventListener('scroll', updatePosition);
            document.body.removeChild(tooltip);
            delete el._tooltipInstance;
        }
    };

    return el._tooltipInstance;
};

export const vTooltip: ObjectDirective<TooltipHTMLElement, string | TooltipOptions> = {
    mounted(el, binding) {
        const options = typeof binding.value === 'string'
            ? { content: binding.value }
            : binding.value;

        if (binding.modifiers) {
            if (binding.modifiers.top) options.position = 'top';
            if (binding.modifiers.right) options.position = 'right';
            if (binding.modifiers.bottom) options.position = 'bottom';
            if (binding.modifiers.left) options.position = 'left';

            if (binding.modifiers.primary) options.color = 'primary';
            if (binding.modifiers.link) options.color = 'link';
            if (binding.modifiers.info) options.color = 'info';
            if (binding.modifiers.success) options.color = 'success';
            if (binding.modifiers.warning) options.color = 'warning';
            if (binding.modifiers.danger) options.color = 'danger';

            options.multiline = binding.modifiers.multiline || options.multiline;
            options.always = binding.modifiers.always || options.always;
        }

        createTooltip(el, options as TooltipOptions);
    },

    updated(el, binding) {
        const options = typeof binding.value === 'string'
            ? { content: binding.value }
            : binding.value;

        if (binding.modifiers) {
            if (binding.modifiers.top) options.position = 'top';
            if (binding.modifiers.right) options.position = 'right';
            if (binding.modifiers.bottom) options.position = 'bottom';
            if (binding.modifiers.left) options.position = 'left';

            if (binding.modifiers.primary) options.color = 'primary';
            if (binding.modifiers.link) options.color = 'link';
            if (binding.modifiers.info) options.color = 'info';
            if (binding.modifiers.success) options.color = 'success';
            if (binding.modifiers.warning) options.color = 'warning';
            if (binding.modifiers.danger) options.color = 'danger';

            options.multiline = binding.modifiers.multiline || options.multiline;
            options.always = binding.modifiers.always || options.always;
        }

        createTooltip(el, options as TooltipOptions);
    },

    beforeUnmount(el) {
        if (el._tooltipInstance) {
            el._tooltipInstance.cleanup();
        }
    }
};

export const TooltipPlugin = {
    install(app: App) {
        app.directive('tooltip', vTooltip);
    }
};

export default vTooltip;