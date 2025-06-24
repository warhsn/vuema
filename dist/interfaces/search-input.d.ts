import { _Forms } from './forms';
export interface _SearchInput extends _Forms {
    modelValue: Array<any>;
    items: Array<any>;
    valueKey: string;
    labelKey: string;
    searchPlaceholder?: string;
    allowNew?: boolean;
}
