import { customRef } from 'vue'

export default function useDebouncedRef(value: any, delay = 50) {
    let timeout: NodeJS.Timeout
    return customRef((track, trigger) => {
        return {
            get() {
                track()
                return value
            },
            set(newValue) {
                clearTimeout(timeout)
                timeout = setTimeout(() => {
                    value = newValue
                    trigger()
                }, delay)
            }
        }
    })
}