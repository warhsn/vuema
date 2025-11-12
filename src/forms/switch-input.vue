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
                :class="switchClasses"
                class="switch"
            >
            <field-label v-if="$slots['inner-label']" :for="fieldName" :required="required">
                <slot name="inner-label" />
            </field-label>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
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

const switchClasses = computed(() => {
    return [
        props.classes,
        {
            'is-small': props.isSmall,
            'is-medium': props.isMedium,
            'is-large': props.isLarge,
            'is-primary': props.isPrimary,
            'is-info': props.isInfo,
            'is-success': props.isSuccess,
            'is-warning': props.isWarning,
            'is-danger': props.isDanger,
            'is-link': props.isLink,
            'is-dark': props.isDark,
            'is-light': props.isLight,
            'is-black': props.isBlack,
            'is-white': props.isWhite,
            'is-text': props.isText,
        }
    ]
})
</script>