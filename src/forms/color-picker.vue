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
                class="control" :class="slotSizes">
                <slot name="left" />
            </div>
            <div class="control" :class="{
                'has-icons-left': leftIcon,
                'has-icons-right': rightIcon,
                'is-loading': isLoading,
                'is-expanded': isExpanded
            }">
                <input
                    class="input color-picker-input"
                    :class="classes"
                    type="color"
                    :disabled="disabled"
                    :value="modelValue || '#000000'"
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
            <div v-if="$slots.right" class="control" :class="slotSizes">
                <slot name="right" />
            </div>
        </div>
        <FieldError :error="error"/>
    </div>
</template>
<script setup lang="ts">
import { _ColorPicker } from '../interfaces/color-picker'
import { _hasErrors } from '../computed/errors'
import FieldError from './field-error.vue'
import { computed } from 'vue'
import useSizes from '../utils/sizes'

const props = withDefaults(defineProps<_ColorPicker>(), {
    modelValue: '#000000',
})

const sizes = useSizes(props)
const inputName = 'update:modelValue'
const focus = 'focus'
const blur = 'blur'

const emit = defineEmits<{
    (e: typeof inputName, value: string): void,
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

const slotSizes = computed(() => {
    const { 'is-expanded': isExpanded, ...sizesWithoutExpanded } = sizes
    return {
        'is-danger': hasErrors.value,
        'is-rounded': props.isRounded,
        ...sizesWithoutExpanded
    }
})

</script>
<style scoped>
.color-picker-input {
    cursor: pointer;
    min-width: 70px;
    height: 2.5em;
    padding: 0.25rem;
}

.color-preview {
    min-width: 120px;
    border: 1px solid #dbdbdb;
    display: flex;
    align-items: center;
    justify-content: center;
}

.color-value {
    font-family: monospace;
    font-size: 0.875rem;
    font-weight: 600;
    text-shadow: 0 0 2px rgba(255, 255, 255, 0.8), 0 0 4px rgba(255, 255, 255, 0.8);
    mix-blend-mode: difference;
    color: white;
}
</style>
