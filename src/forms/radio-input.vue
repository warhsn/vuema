<template>
<div>
    <field-label :required="required">
        <slot />
    </field-label>
    <div class="radios">
        <label 
            @click="onInput(item.id, item.disabled ?? false)" 
            class="radio" 
            v-for="(item, index) in items" 
            :key="index"
        >
            <input 
                type="radio" 
                :checked="item.id === modelValue" 
                :name="fielName"
                :disabled="item.disabled"
            >
            {{ item.label }}
        </label>
    </div>
</div>
</template>
<script setup lang="ts">
import { _RadioInput } from '../interfaces/radio-input'
import { _randomString } from '../computed/strings'

defineProps<_RadioInput>()

const inputName = 'update:modelValue'

const emit = defineEmits<{
    (e: typeof inputName, value: string | Number): void
}>()

function onInput(event: string | Number, disabled: boolean) {
    if(!disabled) {
        emit(inputName, event)
    }
}

const fielName = _randomString();
</script>