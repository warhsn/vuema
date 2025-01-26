<template>
<div>
    <field-label :required="required">
        <slot />
        <template #description>
            <slot name="description" />
        </template>
    </field-label>
    <div>
        <div class="is-expanded control" :class="{
            'has-icons-left': leftIcon
        }">
            <div class="select is-fullwidth" :class="{
                    'is-multiple': multiple,
                    'is-danger': hasErrors,
                    'is-rounded': isRounded,
                    'is-loading': isLoading,
                    'is-small': isSmall,
                    'is-medium': isMedium,
                    'is-large': isLarge,
                }">
                <select
                    :multiple="multiple"
                    :disabled="disabled"
                    :size="itemCount"
                    @change="onChange"
                    v-model="localValue">
                    <option value="" v-if="!multiple">{{ promptLabel }}</option>
                    <option 
                        v-for="item in items" 
                        :value="item[valueKey]" 
                        :key="item[valueKey]">
                        {{ item[labelKey] }}
                    </option>
                </select>
                <b-icon :icon-classes="leftIconClass" v-if="leftIcon" :icon="leftIcon"/>
            </div>
        </div>
    </div>
    <FieldError :error="error"/>
</div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { _SelectInput } from '../interfaces/select-input'
import { _hasErrors, _error } from '../computed/errors'
import FieldError from './field-error.vue'

const props = withDefaults(
    defineProps<_SelectInput>(), {
        promptLabel: '- Select an Option -',
        multiple: false,
        modelValue: () => []
    }
)

const inputEvent = 'update:modelValue'

const emit = defineEmits<{
    (e: typeof inputEvent, value: string | number | Array<string|number>): void
}>()

// Create a local value to track the select state
const localValue = ref(props.modelValue)

// Watch for external changes to modelValue
watch(() => props.modelValue, (newValue) => {
    localValue.value = newValue
})

function onChange(event: Event) {
    const select = event.target as HTMLSelectElement
    
    if (props.multiple) {
        const selectedValues = Array.from(select.selectedOptions).map(option => option.value)
        localValue.value = selectedValues
        emit(inputEvent, Object.values(selectedValues))
    } else {
        localValue.value = select.value
        emit(inputEvent, select.value)
    }
}

const hasErrors = _hasErrors(props)
</script>