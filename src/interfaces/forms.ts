import { _Addons } from './addons'
import { _Errors } from './errors'
import { _Icons } from './icons'
import { _Sizes } from './sizes'

export interface _Forms extends _Icons, _Errors, _Addons, _Sizes
{
    classes?: string
    disabled?: boolean
    forLabel?: string
    modelValue?: boolean | number | string | Array<any> | Date
    placeholder?: string
    required?: boolean
    isLoading?: boolean
    isRounded?: boolean
    isExpanded?: boolean
    autocomplete?: boolean
}