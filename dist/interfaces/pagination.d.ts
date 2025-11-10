import { _Pager } from './pager';
import { _Sizes } from './sizes';
export interface _Pagination extends _Sizes {
    pager: _Pager;
    firstText?: string;
    nextText?: string;
    previousText?: string;
    lastText?: string;
    showInfo?: boolean;
    infoText?: string;
}
