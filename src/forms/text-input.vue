<template>
    <div>
        <field-label :required="required">
            <slot />
            <template #description>
                <slot name="description" />
            </template>
        </field-label>
        <div 
            class="field" 
            :class="{
                'has-addons': hasAddons,
            }">
            <div 
                v-if="$slots.left" 
                class="control" :class="sizes">
                <slot name="left" :class="sizes"/>
            </div>
            <div class="control" :class="{
                'has-icons-left': leftIcon,
                'has-icons-right': rightIcon,
                'is-loading': isLoading,
                'is-expanded': isExpanded
            }">
                <input 
                    type="text"
                    class="input" :class="classes"  
                    :placeholder="placeholder"
                    :disabled="disabled"
                    :value="modelValue" 
                    @input="onInput"
                    @focus="onFocus"
                >
                <b-icon 
                    v-if="leftIcon" 
                    class="icon is-small is-left" 
                    :icon="leftIcon" 
                />
                <b-icon 
                    v-if="rightIcon" 
                    class="icon is-small is-right" 
                    :icon="rightIcon"
                />
                <slot name="inner" />
            </div>
            <div v-if="$slots.right" class="control" :class="sizes">
                <slot name="right" :class="sizes"/>
            </div>
        </div>
        <FieldError :error="error"/>
    </div>
</template>
<script setup lang="ts">
import { _TextInput } from '../interfaces/text-input'
import { _hasErrors } from '../computed/errors'
import FieldError from './field-error.vue'
import { computed } from 'vue'

const props = defineProps<_TextInput>()

const inputName = 'update:modelValue'
const focusName = 'focus'

const emit = defineEmits<{
    (e: typeof inputName, value: string | number): void,
    (e: typeof focusName): void,
}>()

function onInput(event: Event): void {
    const target = event.target as HTMLInputElement
    emit(inputName, target.value)
}

const onFocus = () => emit(focusName)

const hasErrors = _hasErrors(props)

const sizes = computed(() => {
    return {
        'is-small': props.isSmall,
        'is-medium': props.isMedium,
        'is-large': props.isLarge,
    }
})

const classes = computed(() => {
    return {
        'is-danger': hasErrors.value,
        'is-rounded': props.isRounded,
        ...sizes.value
    }
})

</script>