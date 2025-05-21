import { _Sizes } from '@/interfaces/sizes'

export default (props: _Sizes) => ({
    'is-normal': props.isNormal,
    'is-small': props.isSmall,
    'is-medium': props.isMedium,
    'is-large': props.isLarge,
    'is-responsive': props.isResponsive,
    'is-expanded': props.isExpanded,
    'is-fullwidth': props.isFullwidth,
})