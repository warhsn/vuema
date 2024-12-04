<template>
    <div class="file has-name" :class="{
        'is-boxed': isBoxed
    }">
        <label class="file-label">
            <input 
                @change="fileSelected" 
                class="file-input" 
                type="file"
                :accept="accepts"
            >
            <span class="file-cta">
                <span class="file-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M9 16h6v-6h4l-7-7-7 7h4v6zm-4 2h14v2H5v-2z"/>
                    </svg>
                </span>
                <span class="file-label font-engr">
                    <slot />
                </span>
            </span>
            <span class="file-name font-engr">
                {{ fileName }}
            </span>
        </label>
    </div>
</template>
<script lang="ts" setup>
import { _FileInput } from '../interfaces/file-input'
import { _hasErrors } from '../computed/errors'
import { ref } from 'vue';

defineProps<_FileInput>()

const selected = 'selected'
const uploaded = 'uploaded'
const errorMessage = 'errorMessage'

const emit = defineEmits<{
    (e: typeof selected, value: File | null): void,
    (e: typeof uploaded, value: string | number): void,
    (e: typeof errorMessage, value: string | number): void,
}>()

const filePrompt = 'Choose a file…'

const fileName = ref(filePrompt)

function fileSelected(event: Event) {
    const target = event.target as HTMLInputElement
    if (target.files?.length) {
        let file = target.files[0]
        emit(selected, file)
        fileName.value = file.name
        return
    }
    emit(selected, null)
}
</script>