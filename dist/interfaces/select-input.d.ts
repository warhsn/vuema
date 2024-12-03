import { _Forms } from './forms';
export interface _SelectInput extends _Forms {
    valueKey: string;
    labelKey: string;
    items: Array<any>;
    promptLabel?: string;
    leftIconClass?: string;
    multiple?: boolean;
    itemCount?: number;
}
