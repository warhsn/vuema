import { _Icons } from "@/interfaces/icons";

export interface _Tab extends _Icons
{
    routeName?: string
    routeParams?: Object
    activeValue?: string
}