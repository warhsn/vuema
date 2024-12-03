import { _Forms } from "./forms";

export interface _NumberInput extends _Forms {
    modelValue?: string | number
    min?: number
    max?: number
    decimals?: number
}