import { _TextInput } from "./text-input";

export interface _PasswordInput extends _TextInput {
    modelValue?: string | number
    withToggle?: boolean
    toggleClasses?: string
}