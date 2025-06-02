import { _Pager } from "@/interfaces/pager"
import { _Sizes } from "./sizes"

export interface _Pagination extends _Sizes {
    pager: _Pager
    nextText?: string
    previousText?: string
}