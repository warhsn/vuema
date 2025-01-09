import { _Forms } from "./forms";

export interface _SelectInput extends _Forms {
    modelValue: string | number | Array<string | number>
    items: Array<any>
    valueKey: string
    labelKey: string
    promptLabel?: string
    multiple?: boolean
    itemCount?: number
}