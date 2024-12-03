<template>
<div>
    <field-label :required="required">
        <slot />
        <slot name="description" />
    </field-label>
    <div class="tag-input">
        <div class="tags is-marginless">
            <span class="tag" v-for="(tag, index) in modelValue" :key="index">
                {{ tag }}
                <button class="delete is-small" @click="removeTag(tag)">
                </button>
            </span>
        </div>
        <div class="tag-input-control">
            <input v-model="tagText" type="text" @keyup.enter="addTag" />
        </div>
    </div>
</div>
</template>
<script lang="ts" setup>
import { _TagInput } from '../interfaces/tag-input'
import { ref } from 'vue'

const props = defineProps<_TagInput>()

const inputName = 'update:modelValue'

const tagText = ref('')

const emit = defineEmits<{
    (e: typeof inputName, value: Array<String>): void
}>()

function onInput(tags: String[]): void {
    emit(inputName, tags)
}

function addTag(event: Event): void {
    const target = event.target as HTMLInputElement
    const tag = target.value
    let tags = props.modelValue as Array<String>
    if (!tags?.includes(tag)) {
        tags?.push(tag)
    }
    onInput(tags)
    tagText.value = ''
}

function removeTag(tag: String): void {

    let tags = props.modelValue as Array<String>
    const index = tags?.indexOf(tag)

    tags?.splice(index!, 1)

    onInput(tags)
}

</script>