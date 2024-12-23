<template>
    <div>
        <field-label
            @click="onInput"
            :for-label="fieldName"
            :required="required">
            <slot />
        </field-label>
        <label 
            @click="onInput" 
            class="checkbox" 
            :for-label="fieldName">
            <input 
                :disabled="disabled"
                class="checkbox mr-1"
                type="checkbox"
                :name="fieldName" 
                :checked="modelValue === true"
            >
            <span @click="onInput">
                <slot name="inner-label"/>
            </span>
        </label>
    </div>
</template>
<script setup lang="ts">
import { _CheckboxInput } from '../interfaces/checkbox-input'
import { _randomString } from '../computed/strings'

const props = defineProps<_CheckboxInput>()

const inputName = 'update:modelValue'

const emit = defineEmits<{
    (e: typeof inputName, value: boolean): void
}>()

function onInput() {
    emit(inputName, !props.modelValue)
}

const fieldName = _randomString()
</script>