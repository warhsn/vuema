<template>
    <number-input
        :required="required"
        :has-addons="hasAddons"
        :left-icon="leftIcon"
        :errors="error"
        :has-errors="hasErrors"
        :disabled="disabled"
        :placeholder="placeholder"
        :decimals="decimals"
        :modelValue="modelValue"
        :is-expanded="isExpanded"
        v-bind="sizes"
        @update:modelValue="onInput">
        <template #left>
            <action-button class="is-static" :class="sizes">
                {{ currency }}
            </action-button>
        </template>
        <template #description v-if="$slots.description">
            <slot name="description"/>
        </template>
        <slot v-if="$slots.default"/>
    </number-input>
</template>
<script setup lang="ts">
import { _CurrencyInput } from '../interfaces/currency-input'
import { _hasErrors } from '../computed/errors'
import useSizes from '../utils/sizes'

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

const sizes = useSizes(props)

const hasErrors = _hasErrors(props)

function onInput(value: string | number) {
    emit(inputName, value)
}


</script>