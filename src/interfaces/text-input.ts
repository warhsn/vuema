import { _Forms } from "./forms";

export interface _TextInput extends _Forms
{
    modelValue?: string | number
    withToggle?: boolean
}