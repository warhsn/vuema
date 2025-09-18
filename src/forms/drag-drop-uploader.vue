<template>
    <div>
        <field-label v-if="$slots.default || $slots.description" :required="required">
            <slot />
            <template #description>
                <slot name="description" />
            </template>
        </field-label>
        <div 
            class="drag-drop-uploader"
            :class="{
                'is-dragover': isDragOver,
                'is-uploading': isUploading,
                'has-files': files.length > 0
            }"
            @dragover.prevent="onDragOver"
            @dragleave.prevent="onDragLeave"
            @drop.prevent="onDrop"
            @click="openFileDialog"
        >
            <input 
                ref="fileInput"
                type="file"
                :multiple="multiple"
                :accept="accepts"
                @change="onFileSelect"
                style="display: none"
            >
            
            <div class="drag-drop-content">
                <div v-if="files.length === 0" class="drag-drop-prompt">
                    <svg class="drag-drop-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                    </svg>
                    <p class="drag-drop-text">
                        <strong>Click to upload</strong> or drag and drop files here
                    </p>
                    <p class="drag-drop-help" v-if="accepts">
                        Accepted formats: {{ accepts }}
                    </p>
                </div>
                
                <div v-else class="file-list">
                    <div 
                        v-for="(file, index) in files" 
                        :key="index"
                        class="file-item"
                        :class="{
                            'is-uploading': file.isUploading,
                            'is-success': file.isComplete,
                            'is-error': file.hasError
                        }"
                    >
                        <div class="file-info">
                            <span class="file-name">{{ file.name }}</span>
                            <span class="file-size">{{ formatFileSize(file.size) }}</span>
                        </div>
                        
                        <div class="file-progress" v-if="file.isUploading">
                            <progress class="progress is-small is-primary" :value="file.progress" max="100">
                                {{ file.progress }}%
                            </progress>
                        </div>
                        
                        <div class="file-status">
                            <span v-if="file.isComplete" class="tag is-success is-small">
                                Complete
                            </span>
                            <span v-else-if="file.hasError" class="tag is-danger is-small">
                                Error
                            </span>
                            <span v-else-if="file.isUploading" class="tag is-info is-small">
                                {{ file.progress }}%
                            </span>
                        </div>
                        
                        <button 
                            class="delete is-small"
                            @click.stop="removeFile(index)"
                            v-if="!file.isUploading"
                        ></button>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="field is-grouped mt-3" v-if="files.length > 0">
            <div class="control">
                <button 
                    class="button is-primary"
                    @click="uploadFiles"
                    :disabled="isUploading || !endpoint"
                    :class="{ 'is-loading': isUploading }"
                >
                    {{ uploadButtonText }}
                </button>
            </div>
            <div class="control">
                <button 
                    class="button"
                    @click="clearFiles"
                    :disabled="isUploading"
                >
                    Clear
                </button>
            </div>
        </div>
        
        <FieldError :error="error"/>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { _DragDropUploader } from '../interfaces/drag-drop-uploader'
import FieldError from './field-error.vue'

const props = withDefaults(defineProps<_DragDropUploader>(), {
    multiple: true,
    accepts: '*/*',
    uploadButtonText: 'Upload'
})

interface FileWithProgress {
    file: File
    name: string
    size: number
    progress: number
    isUploading: boolean
    isComplete: boolean
    hasError: boolean
    errorMessage?: string
}

const files = ref<FileWithProgress[]>([])
const isDragOver = ref(false)
const isUploading = ref(false)
const fileInput = ref<HTMLInputElement>()

const emit = defineEmits<{
    (e: 'filesSelected', files: File[]): void,
    (e: 'uploadProgress', progress: { file: File, progress: number }): void,
    (e: 'file-uploaded', result: { file: File, response: any }): void,
    (e: 'upload-error', error: { file: File, error: string }): void,
    (e: 'upload-completed', results: any[]): void,
    (e: 'upload-failed', errors: { file: File, error: string }[]): void,
}>()

function onDragOver(event: DragEvent) {
    if (event.dataTransfer) {
        event.dataTransfer.dropEffect = 'copy'
    }
    isDragOver.value = true
}

function onDragLeave() {
    isDragOver.value = false
}

function onDrop(event: DragEvent) {
    isDragOver.value = false
    
    if (event.dataTransfer?.files) {
        const droppedFiles = Array.from(event.dataTransfer.files)
        addFiles(droppedFiles)
    }
}

function openFileDialog() {
    fileInput.value?.click()
}

function onFileSelect(event: Event) {
    const target = event.target as HTMLInputElement
    if (target.files) {
        const selectedFiles = Array.from(target.files)
        addFiles(selectedFiles)
    }
}

function addFiles(newFiles: File[]) {
    const filesToAdd = newFiles.filter(file => {
        // Check if file already exists
        return !files.value.some(existingFile => 
            existingFile.name === file.name && existingFile.size === file.size
        )
    })
    
    const fileObjects: FileWithProgress[] = filesToAdd.map(file => ({
        file,
        name: file.name,
        size: file.size,
        progress: 0,
        isUploading: false,
        isComplete: false,
        hasError: false
    }))
    
    if (props.multiple) {
        files.value.push(...fileObjects)
    } else {
        files.value = fileObjects.slice(0, 1)
    }
    
    emit('filesSelected', filesToAdd)
}

function removeFile(index: number) {
    files.value.splice(index, 1)
}

function clearFiles() {
    files.value = []
}

async function uploadFiles() {
    if (!props.endpoint) return
    
    isUploading.value = true
    const results: any[] = []
    const errors: any[] = []
    
    try {
        for (const fileObj of files.value) {
            if (fileObj.isComplete) continue
            
            fileObj.isUploading = true
            fileObj.hasError = false
            
            try {
                const result = await uploadFile(fileObj)
                fileObj.isComplete = true
                fileObj.isUploading = false
                results.push(result)
                emit('file-uploaded', { file: fileObj.file, response: result })
            } catch (error) {
                fileObj.hasError = true
                fileObj.isUploading = false
                fileObj.errorMessage = error instanceof Error ? error.message : 'Upload failed'
                errors.push({ file: fileObj.file, error: fileObj.errorMessage })
                emit('upload-error', { file: fileObj.file, error: fileObj.errorMessage })
            }
        }
        
        // Only emit upload-completed if all uploads succeeded
        if (errors.length === 0 && results.length > 0) {
            emit('upload-completed', results)
        } else if (errors.length > 0) {
            // Emit a new event for when uploads fail
            emit('upload-failed', errors)
        }
    } finally {
        isUploading.value = false
    }
}

async function uploadFile(fileObj: FileWithProgress): Promise<any> {
    return new Promise((resolve, reject) => {
        const formData = new FormData()
        formData.append('file', fileObj.file)
        
        // Add additional data if provided
        if (props.additionalData) {
            Object.entries(props.additionalData).forEach(([key, value]) => {
                formData.append(key, String(value))
            })
        }
        
        const xhr = new XMLHttpRequest()
        
        xhr.upload.addEventListener('progress', (event) => {
            if (event.lengthComputable) {
                fileObj.progress = Math.round((event.loaded / event.total) * 100)
                emit('uploadProgress', { file: fileObj.file, progress: fileObj.progress })
            }
        })
        
        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                try {
                    const response = JSON.parse(xhr.responseText)
                    if (response.errors || response.error || response.validationErrors) {
                        const errorMessage = response.message || 
                                           response.error || 
                                           (response.errors ? JSON.stringify(response.errors) : 'Validation failed')
                        reject(new Error(errorMessage))
                    } else {
                        resolve(response)
                    }
                } catch {
                    resolve(xhr.responseText)
                }
            } else if (xhr.status >= 400 && xhr.status < 500) {
                try {
                    const errorResponse = JSON.parse(xhr.responseText)
                    const errorMessage = errorResponse.message || 
                                       errorResponse.error || 
                                       (errorResponse.errors ? JSON.stringify(errorResponse.errors) : `HTTP ${xhr.status}: ${xhr.statusText}`)
                    reject(new Error(errorMessage))
                } catch {
                    reject(new Error(`HTTP ${xhr.status}: ${xhr.statusText}`))
                }
            } else {
                reject(new Error(`HTTP ${xhr.status}: ${xhr.statusText}`))
            }
        })
        
        xhr.addEventListener('error', () => {
            reject(new Error('Network error occurred'))
        })
        
        xhr.open('POST', props.endpoint!)

        if (props.headers) {
            Object.entries(props.headers).forEach(([key, value]) => {
                xhr.setRequestHeader(key, value)
            })
        }
        
        xhr.send(formData)
    })
}

function formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes'
    
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}
</script>

<style scoped>
.drag-drop-uploader {
    border: 2px dashed #dbdbdb;
    border-radius: 6px;
    padding: 2rem;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: var(--bulma-box-background-color, hsl(0, 0%, 100%));
}

.drag-drop-uploader:hover {
    border-color: #3273dc;
    background-color: #f0f8ff;
}

.drag-drop-uploader.is-dragover {
    border-color: #3273dc;
    background-color: #f0f8ff;
    transform: scale(1.02);
}

.drag-drop-uploader.is-uploading {
    opacity: 0.7;
    cursor: not-allowed;
}

.drag-drop-uploader.has-files {
    padding: 1rem;
    text-align: left;
}

.drag-drop-content {
    pointer-events: none;
}

.drag-drop-icon {
    width: 48px;
    height: 48px;
    margin: 0 auto 1rem;
    fill: #b5b5b5;
}

.drag-drop-text {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
}

.drag-drop-help {
    font-size: 0.9rem;
    color: #7a7a7a;
}

.file-list {
    max-height: 300px;
    overflow-y: auto;
}

.file-item {
    display: flex;
    align-items: center;
    padding: 0.75rem;
    margin-bottom: 0.5rem;
    background-color: white;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    position: relative;
}

.file-item.is-uploading {
    background-color: #f0f8ff;
    border-color: #3273dc;
}

.file-item.is-success {
    background-color: #f0fff4;
    border-color: #48c774;
}

.file-item.is-error {
    background-color: #fff5f5;
    border-color: #ff3860;
}

.file-info {
    flex: 1;
    min-width: 0;
}

.file-name {
    display: block;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.file-size {
    display: block;
    font-size: 0.85rem;
    color: #7a7a7a;
}

.file-progress {
    margin: 0.5rem 0 0;
}

.file-status {
    margin-left: 1rem;
    flex-shrink: 0;
}

.delete {
    margin-left: 0.5rem;
    flex-shrink: 0;
}

.progress {
    margin: 0;
}
</style>