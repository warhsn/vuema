import { Ref } from 'vue';
import { RouteLocationNormalizedLoaded, Router } from 'vue-router';
export interface FilterWatcherOptions {
    routeName: string;
    onFiltersChange?: (query: Record<string, any>) => void;
}
export default function useFilterWatcher(filters: Ref<Record<string, any>>, route: RouteLocationNormalizedLoaded, router: Router, options: FilterWatcherOptions): void;
