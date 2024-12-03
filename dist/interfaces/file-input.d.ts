import { _Forms } from './forms';
export interface _FileInput extends _Forms {
    endpoint?: string;
    accepts?: string;
    selfContained?: Boolean;
    isBoxed?: boolean;
}
