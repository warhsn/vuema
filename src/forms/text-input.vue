<template>
    <div>
        <field-label v-if="$slots.default || $slots.description" :required="required">
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
                    @blur="onBlur"
                >
                <b-icon 
                    v-if="leftIcon" 
                    class="icon is-small is-left" 
                    :icon="leftIcon"
                    :icon-type="leftIconType"
                />
                <b-icon 
                    v-if="rightIcon" 
                    class="icon is-small is-right" 
                    :icon="rightIcon"
                    :icon-type="rightIconType"
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
import useSizes from '../utils/sizes'

const props = defineProps<_TextInput>()
const sizes = useSizes(props)
const inputName = 'update:modelValue'
const focus = 'focus'
const blur = 'blur'

const emit = defineEmits<{
    (e: typeof inputName, value: string | number): void,
    (e: typeof focus): void,
    (e: typeof blur): void,
}>()

function onInput(event: Event): void {
    const target = event.target as HTMLInputElement
    emit(inputName, target.value)
}

const onFocus = () => emit(focus)
const onBlur = () => emit(blur)

const hasErrors = _hasErrors(props)

const classes = computed(() => {
    return {
        'is-danger': hasErrors.value,
        'is-rounded': props.isRounded,
        ...sizes
    }
})

</script>