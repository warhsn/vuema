import { _Activity } from './activity'

export interface _Dialog extends _Activity
{
    cancelText?: string
    confirmText?: string
    confirming?: boolean
    confirmButtonClass?: string
    cancelButtonClass?: string
    controlAlignment?: string
    title?: string | null
    titleIcon?: string | null
    titleIconType: string | null
    titleIconClass?: string
    to?: string
    transition?: string
    okButtonClass?: string
}