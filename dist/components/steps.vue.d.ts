import { _Steps } from '../interfaces/steps';
declare const _default: import('vue').DefineComponent<_Steps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    stepClick: (stepIndex: number) => any;
}, string, import('vue').PublicProps, Readonly<_Steps> & Readonly<{
    onStepClick?: ((stepIndex: number) => any) | undefined;
}>, {
    currentStep: number;
    isClickable: boolean;
    isVertical: boolean;
    hasArrowSeparator: boolean;
    hasBulletSeparator: boolean;
    hasDotSeparator: boolean;
    hasSucceedsSeparator: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLElement>;
export default _default;
