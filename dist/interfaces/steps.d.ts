import { _Sizes } from './sizes';
export interface StepItem {
    label: string;
    icon?: string;
    iconType?: string;
    isCompleted?: boolean;
    isDisabled?: boolean;
}
export interface _Steps extends _Sizes {
    steps: StepItem[];
    currentStep?: number;
    isClickable?: boolean;
    isVertical?: boolean;
    hasArrowSeparator?: boolean;
    hasBulletSeparator?: boolean;
    hasDotSeparator?: boolean;
    hasSucceedsSeparator?: boolean;
}
