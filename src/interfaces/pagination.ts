import { _Pager } from "@/interfaces/pager"
import { _Sizes } from "./sizes"

export interface _Pagination extends _Sizes {
    pager: _Pager
    firstText?: string
    nextText?: string
    previousText?: string
    lastText?: string
}