import { _Transition } from './transition'
import { _Activity } from './activity'

export interface _Modal extends _Transition, _Activity
{
    withCancel?: boolean
    withHeader?: boolean
    withFooter?: boolean
    title?: string
    isDismisable?: boolean
    isCloseable?: boolean
    isCard?: boolean
}