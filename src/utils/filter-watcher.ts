import { watch } from "vue"
import type { Ref } from 'vue'
import type { RouteLocationNormalizedLoaded, Router } from 'vue-router'

export interface FilterWatcherOptions {
    routeName: string
    onFiltersChange?: (query: Record<string, any>) => void
    debounce?: number
}

export default function useFilterWatcher(
    filters: Ref<Record<string, any>>,
    route: RouteLocationNormalizedLoaded,
    router: Router,
    options: FilterWatcherOptions
) {
    let debounceTimeout: NodeJS.Timeout | null = null

    const handleFiltersChange = (newFilters: Record<string, any>) => {
        const query = Object.entries(newFilters).reduce((acc, [key, value]) => {
            if (value !== '' && value !== null && value !== undefined) {
                acc[key] = value
            }
            return acc
        }, {} as Record<string, any>)

        if (JSON.stringify(query) !== JSON.stringify(route.query)) {
            router.push({
                name: options.routeName,
                query
            })
            if (options.onFiltersChange) {
                options.onFiltersChange(query)
            }
        }
    }

    watch(
        filters,
        (newFilters) => {
            if (options.debounce) {
                if (debounceTimeout) {
                    clearTimeout(debounceTimeout)
                }
                debounceTimeout = setTimeout(() => {
                    handleFiltersChange(newFilters)
                }, options.debounce)
            } else {
                handleFiltersChange(newFilters)
            }
        },
        { deep: true }
    )

    watch(
        () => route.query,
        () => {
            Object.entries(route.query).forEach(([key, value]) => {
                if (key in filters.value) {
                    filters.value[key] = value
                }
            })
        },
        { immediate: true }
    )
}