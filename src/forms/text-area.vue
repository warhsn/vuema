<template>
    <div>
        <field-label :required="required">
            <slot />
            <slot name="description" />
        </field-label>
        <div class="field">
            <div class="control" :class="{
                'has-icons-left': leftIcon,
                'has-icons-right': rightIcon
            }">
                <textarea 
                    class="textarea"
                    :class="{
                        'is-danger': hasErrors
                    }"  
                    type="text" 
                    :placeholder="placeholder"
                    :disabled="disabled"
                    :value="modelValue" 
                    @input="onInput">
                </textarea>
            </div>
            <FieldError :error="error"/>
        </div>
    </div>
</template>
<script setup lang="ts">
import { _TextInput } from '../interfaces/text-input'
import { _hasErrors } from '../computed/errors'
import FieldError from './field-error.vue'

const inputName = 'update:modelValue'
const props = defineProps<_TextInput>()
const hasErrors = _hasErrors(props)

const emit = defineEmits<{
    (e: typeof inputName, value: string | number): void
}>()

function onInput(event: Event) {
    const target = event.target as HTMLInputElement
    emit(inputName, target.value)
}

</script>