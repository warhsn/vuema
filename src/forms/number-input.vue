<template>
    <div>
        <field-label v-if="$slots.default" :required="required">
            <slot />
            <template #description>
                <slot name="description" />
            </template>
        </field-label>
        <div class="field" :class="{ 'has-addons': hasAddons }">
            <div v-if="$slots.left" class="control" :class="slotSizes">
                <slot name="left" />
            </div>
            <div class="control" :class="classes">
                <input :id="inputId" type="text" class="input" :class="classes" :placeholder="placeholder"
                    :autocomplete="autocomplete ? 'on' : 'off'" :disabled="disabled" :value="modelValue"
                    @input="onInput" />
                <b-icon v-if="leftIcon" class="icon is-small is-left" :icon="leftIcon" />
                <b-icon v-if="rightIcon" class="icon is-small is-right" :icon="rightIcon" />
            </div>
            <div v-if="$slots.right" class="control" :class="slotSizes">
                <slot name="right" />
            </div>
            <FieldError :error="error" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { _NumberInput } from '../interfaces/number-input'
import { _hasErrors } from '../computed/errors'
import FieldError from './field-error.vue'
import randmonId from '../utils/randmon-id'
import useSizes from '../utils/sizes'
import { computed } from 'vue'

const props = defineProps<_NumberInput>()
const sizes = useSizes(props)
const inputId = randmonId()
const inputName = 'update:modelValue'

const emit = defineEmits<{
    (e: typeof inputName, value: string): void
}>()

const updateInput = (value: string) => new Promise((resolve) => {
    const input = document.getElementById(inputId) as HTMLInputElement;
    if (input) {
        input.value = value;
    }
    setTimeout(() => {
        resolve(true)
    }, 100)
})

function onInput(event: Event): void {
    const target = event.target as HTMLInputElement
    const inputValue = target.value;
    
    let sanitizedValue = inputValue.replace(/[^0-9.-]/g, '');
    if(props.min !== undefined && Number(props.min) >= 0) {
        sanitizedValue = inputValue.replace(/[^0-9.]/g, '');
    }
    if(!props.decimals) {
        sanitizedValue = sanitizedValue.replaceAll('.', '');
    }

    const decimalCount = sanitizedValue.split('.').length - 1;
    if (decimalCount > 1) {
        const parts = sanitizedValue.split('.');
        sanitizedValue = parts[0] + '.' + parts.slice(1).join('');
    }

    if(decimalCount) {
        const parts = sanitizedValue.split('.');
        let decimalPart = parts[1] || ''
        sanitizedValue = parts[0] + '.' + decimalPart.slice(0, props.decimals);
    }

    const numericValue = Number(sanitizedValue);
    if(props.min !== undefined && !isNaN(numericValue) && numericValue < props.min) {
        sanitizedValue = props.min.toString();
    }

    if(props.max !== undefined && !isNaN(numericValue) && numericValue > props.max) {
        sanitizedValue = props.max.toString();
    }

    updateInput(sanitizedValue).then(() => {
        emit(inputName, sanitizedValue);
    })
}

const hasErrors = _hasErrors(props)

const classes = computed(() => ({ 
    'is-danger': hasErrors.value,
    'has-icons-left': props.leftIcon, 
    'has-icons-right': props.rightIcon,
    ...sizes
}))

const slotSizes = computed(() => {
    const { 'is-expanded': isExpanded, ...sizesWithoutExpanded } = sizes
    return {
        'is-danger': hasErrors.value,
        'is-rounded': props.isRounded,
        ...sizesWithoutExpanded
    }
})
</script>