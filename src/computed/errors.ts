import { computed } from 'vue'

interface ErrorProps {
    error?: string | [string | any[]]
    errors?: string[]
}

export const _hasErrors = (props: ErrorProps) => (
    computed(() => props.error !== undefined && props.error !== null)
)
export const _error = (props: ErrorProps) => (
    computed(() => _hasErrors(props) ? props.error : '')
)

export default {
    _hasErrors,
    _error
}