<template>
    <div>
        <number-input
            :required="required"
            :has-addons="hasAddons"
            :left-icon="leftIcon"
            :errors="error"
            :has-errors="hasErrors"
            :disabled="disabled"
            :placeholder="placeholder"
            :decimals="decimals"
            :value="modelValue"
            :is-expanded="isExpanded"
            @update:modelValue="onInput">
            <template #left>
                <action-button class="is-static">
                    {{ currency }}
                </action-button>
            </template>
            <template #description>
                <slot name="description"/>
            </template>
            <slot />
        </number-input>
    </div>
</template>
<script setup lang="ts">
import { _CurrencyInput } from '../interfaces/currency-input'
import { _hasErrors } from '../computed/errors'

const inputName = 'update:modelValue'

const emit = defineEmits<{
    (e: typeof inputName, value: string | number): void
}>()

const props = withDefaults(
    defineProps<_CurrencyInput>(), {
    decimals: 2,
    currency: '$',
    hasAddons: true
})

const hasErrors = _hasErrors(props)

function onInput(value: string | number) {
    emit(inputName, value)
}


</script>