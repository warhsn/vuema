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
                    'is-loading': isLoading
                }">
                <select
                    :multiple="multiple"
                    :disabled="disabled"
                    :size="itemCount"
                    @input="onInput">
                    <option value="" v-if="!multiple">{{ promptLabel }}</option>
                    <option 
                        v-for="item in items" 
                        :value="item[valueKey]" 
                        :key="item[valueKey]"
                        :selected="item[valueKey] === modelValue">{{ item[labelKey] }}</option>
                </select>
                <b-icon :icon-classes="leftIconClass" v-if="leftIcon" :icon="leftIcon"/>
            </div>
            
        </div>
    </div>
    <FieldError :error="error"/>
</div>
</template>
<script setup lang="ts">
import { _SelectInput } from '../interfaces/select-input'
import { _hasErrors, _error } from '../computed/errors'
import FieldError from './field-error.vue'

const props = withDefaults(
    defineProps<_SelectInput>(), {
        promptLabel: '- Select an Option -'
    }
)

const inputEvent = 'update:modelValue'

const emit = defineEmits<{
    (e: typeof inputEvent, value: string | number): void
}>()

function onInput(event: Event) {
    const target = event.target as HTMLInputElement
    emit(inputEvent, target.value)
}

const hasErrors = _hasErrors(props)

</script>