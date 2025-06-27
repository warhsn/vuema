import { _Forms } from "./forms";

export interface _TextInput extends _Forms
{
    type?: string
    modelValue?: string | number
    withToggle?: boolean
}