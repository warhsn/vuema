import { _NumberInput } from './number-input';
export interface _CurrencyInput extends _NumberInput {
    modelValue?: string | number;
    currency?: string;
    options?: Object;
}
