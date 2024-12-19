import { _Sizes } from './sizes';
export interface _Columns extends _Sizes {
    isCentered?: boolean;
    isMultiline?: boolean;
    isMobile?: string;
    isDesktop?: string;
    isHalf?: string;
    isThreeQuartersMobile?: string;
    isTwoThirdsTablet?: string;
    isHalfDesktop?: string;
    isOneThirdWidescreen?: string;
    isOneQuarterFullhd?: string;
    isNarrow?: boolean;
    isGapless?: boolean;
}
