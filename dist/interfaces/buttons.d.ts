import { _Addons } from './addons';
import { _Align } from './align';
import { _Icons } from './icons';
import { default as _Processing } from './processing';
import { _Shapes } from './shapes';
import { _Sizes } from './sizes';
import { _Status } from './status';
export interface _Buttons extends _Addons, _Align, _Processing, _Sizes, _Status, _Icons, _Shapes {
    disabled?: boolean;
    isSelected?: boolean;
    areNormal?: boolean;
    areSmall?: boolean;
    areMedium?: boolean;
    areLarge?: boolean;
    isHovered?: boolean;
    isFocused?: boolean;
    isActive?: boolean;
    isStatic?: boolean;
}
