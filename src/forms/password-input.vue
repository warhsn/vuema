<template>
    <div>
        <field-label :required="required">
            <slot />
        </field-label>
        <div class="field" :class="{
            'has-addons': hasAddons || withToggle
        }">
            <div v-if="$slots.left" class="control" :class="sizes">
                <slot name="left" :class="sizes"/>
            </div>
            <div class="control" :class="{
                'has-icons-left': leftIcon,
                'has-icons-right': rightIcon,
                'is-expanded': isExpanded
            }">
                <input :type="showingPassword ? 'text' : 'password'" class="input" 
                    :class="classes" 
                    :placeholder="placeholder" 
                    :disabled="disabled" 
                    :value="modelValue" 
                    @input="onInput">
                <b-icon v-if="leftIcon" class="icon is-small is-left" :class="sizes" :icon="leftIcon"/>
                <b-icon v-if="rightIcon" class="icon is-small is-right" :class="sizes" :icon="rightIcon"/>
            </div>
            <div v-if="$slots.right" class="control" :class="sizes">
                <slot name="right" />
            </div>
            <div v-if="withToggle" class="control" :class="sizes">
                <action-button :class="toggleButtonClasses" @click="togglePasswordVisibility">
                    <b-icon :icon="showingPassword ? 'eye' : 'eye-slash'"/>
                </action-button>
            </div>
        </div>
         <div class="control">
            <FieldError :error="error" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { _PasswordInput } from '../interfaces/password-input'
import { _hasErrors } from '../computed/errors'
import FieldError from './field-error.vue'
import { ref, computed } from 'vue'

const props = defineProps<_PasswordInput>()

const inputName = 'update:modelValue'

const emit = defineEmits<{
    (e: typeof inputName, value: string | number): void
}>()

const showingPassword = ref(false)

function onInput(event: Event): void {
    const target = event.target as HTMLInputElement
    emit(inputName, target.value)
}

function togglePasswordVisibility() {
    showingPassword.value = !showingPassword.value
}

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

const toggleButtonClasses = computed(() => {
    let _classes = [props.toggleClasses]

    for(const [key, value] of Object.entries(classes.value)) {
        if(value) {
            _classes.push(key)
        }
    }
    
    for(const [key, value] of Object.entries(sizes.value)) {
        if(value) {
            _classes.push(key)
        }
    }

    return _classes
})

</script>