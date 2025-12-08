import { _Forms } from "./forms";

export interface PresignedUrlResult {
    url: string
    key: string
}

export interface UploadCompleteResult {
    file: File
    key: string
}

export interface _DragDropUploader extends _Forms {
    endpoint?: string
    accepts?: string
    uploadButtonText?: string
    multiple?: boolean
    additionalData?: Record<string, string | number | boolean>
    headers?: Record<string, string>
    clearOnSuccess?: boolean
    presignedUrlCallback?: (file: File) => Promise<PresignedUrlResult>
    onUploadComplete?: (result: UploadCompleteResult) => Promise<any>
}