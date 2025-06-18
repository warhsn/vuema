import { _Icons } from './icons';
export interface _Tab extends _Icons {
    routeName?: string;
    routeParams?: Record<string, any>;
    activeValue?: string;
}
