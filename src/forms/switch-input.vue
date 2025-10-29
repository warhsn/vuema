<template>
    <div>
        <field-label :for="fieldName" :required="required">
            <slot />
            <template #description>
                <slot name="description" />
            </template>
        </field-label>
        <div class="field">
            <input 
                @click="onInput"
                :id="fieldName" 
                type="checkbox" 
                :name="fieldName" 
                :checked="modelValue === true"
                v-bind="{ disabled }"
                :class="classes" 
                class="switch"
            >
            <field-label v-if="$slots['inner-label']" :for="fieldName" :required="required">
                <slot name="inner-label" />
            </field-label>
        </div>
    </div>
</template>
<script setup lang="ts">
import { _SwitchInput } from '../interfaces/switch-input'
import { _randomString } from '../computed/strings'

const props = defineProps<_SwitchInput>()

const inputName = 'update:modelValue'

const emit = defineEmits<{
    (e: typeof inputName, value: boolean): void
}>()

function onInput() {
    emit(inputName, !props.modelValue)
}

const fieldName = _randomString()
</script>