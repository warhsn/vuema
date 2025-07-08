import { _Forms } from './forms';
export interface _DragDropUploader extends _Forms {
    endpoint?: string;
    accepts?: string;
    multiple?: boolean;
    additionalData?: Record<string, string | number | boolean>;
    headers?: Record<string, string>;
}
