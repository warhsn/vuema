<template>
    <div>
        <field-label v-if="$slots.default || $slots.description" :required="required">
            <slot />
            <template #description>
                <slot name="description" />
            </template>
        </field-label>
        <div 
            class="field has-addons">
            <div 
                v-if="$slots.left" 
                class="control" :class="slotSizes">
                <slot name="left" />
            </div>
            <div class="control">
                <div class="select" :class="dialingCodeClasses" style="min-width: 60px;">
                    <select 
                        :disabled="disabled"
                        :value="selectedCountryCode"
                        @change="handleDialingCodeChange"
                        @focus="emit('focus')"
                        @blur="emit('blur')"
                    >
                        <option value="">Code</option>
                        <option 
                            v-for="country in countryDialingCodes" 
                            :key="country.code"
                            :value="country.code"
                        >
                            {{ country.code }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="control" :class="{
                'has-icons-left': leftIcon,
                'has-icons-right': rightIcon,
                'is-loading': isLoading,
                'is-expanded': isExpanded
            }">
                <input 
                    class="input"
                    :class="classes" 
                    type="tel" 
                    :placeholder="placeholder"
                    :disabled="disabled"
                    :value="displayValue" 
                    @input="handleInput"
                    @focus="emit('focus')"
                    @blur="emit('blur')"
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
import { _PhoneInput } from '../interfaces/phone-input'
import { _hasErrors } from '../computed/errors'
import FieldError from './field-error.vue'
import { computed } from 'vue'
import useSizes from '../utils/sizes'

const props = withDefaults(defineProps<_PhoneInput>(), {
    placeholder: 'Enter phone number'
})

const emit = defineEmits<{
    'update:modelValue': [value: string],
    'focus': [],
    'blur': [],
}>()

const sizes = useSizes(props)
const hasErrors = _hasErrors(props)

const countryFormats = {
    '1': { pattern: /^(\d{3})(\d{3})(\d{4})$/, format: '($1) $2-$3', maxLength: 10 },
    '44': { pattern: /^(\d{2,4})(\d{6,8})$/, format: '$1 $2', maxLength: 11 },
    '49': { pattern: /^(\d{3,4})(\d{6,8})$/, format: '$1 $2', maxLength: 11 },
    '33': { pattern: /^(\d{1})(\d{2})(\d{2})(\d{2})(\d{2})$/, format: '$1 $2 $3 $4 $5', maxLength: 9 },
    '61': { pattern: /^(\d{1})(\d{4})(\d{4})$/, format: '$1 $2 $3', maxLength: 9 }
}

const countryDialingCodes = [
    { code: '+1', name: 'United States/Canada' },
    { code: '+7', name: 'Russia' },
    { code: '+20', name: 'Egypt' },
    { code: '+27', name: 'South Africa' },
    { code: '+30', name: 'Greece' },
    { code: '+31', name: 'Netherlands' },
    { code: '+32', name: 'Belgium' },
    { code: '+33', name: 'France' },
    { code: '+34', name: 'Spain' },
    { code: '+36', name: 'Hungary' },
    { code: '+39', name: 'Italy' },
    { code: '+40', name: 'Romania' },
    { code: '+41', name: 'Switzerland' },
    { code: '+43', name: 'Austria' },
    { code: '+44', name: 'United Kingdom' },
    { code: '+45', name: 'Denmark' },
    { code: '+46', name: 'Sweden' },
    { code: '+47', name: 'Norway' },
    { code: '+48', name: 'Poland' },
    { code: '+49', name: 'Germany' },
    { code: '+52', name: 'Mexico' },
    { code: '+55', name: 'Brazil' },
    { code: '+60', name: 'Malaysia' },
    { code: '+61', name: 'Australia' },
    { code: '+62', name: 'Indonesia' },
    { code: '+63', name: 'Philippines' },
    { code: '+65', name: 'Singapore' },
    { code: '+66', name: 'Thailand' },
    { code: '+81', name: 'Japan' },
    { code: '+82', name: 'South Korea' },
    { code: '+84', name: 'Vietnam' },
    { code: '+86', name: 'China' },
    { code: '+90', name: 'Turkey' },
    { code: '+91', name: 'India' },
    { code: '+351', name: 'Portugal' },
    { code: '+353', name: 'Ireland' },
    { code: '+354', name: 'Iceland' },
    { code: '+358', name: 'Finland' },
    { code: '+370', name: 'Lithuania' },
    { code: '+371', name: 'Latvia' },
    { code: '+372', name: 'Estonia' },
    { code: '+385', name: 'Croatia' },
    { code: '+386', name: 'Slovenia' },
    { code: '+387', name: 'Bosnia and Herzegovina' },
    { code: '+420', name: 'Czech Republic' },
    { code: '+421', name: 'Slovakia' },
    { code: '+852', name: 'Hong Kong' },
    { code: '+853', name: 'Macau' },
    { code: '+886', name: 'Taiwan' },
    { code: '+966', name: 'Saudi Arabia' },
    { code: '+971', name: 'UAE' },
    { code: '+972', name: 'Israel' }
]

function formatPhoneNumber(digits: string, countryCode: string): string {
    if (!digits) return ''

    const cleanCountryCode = countryCode.replace(/\D/g, '')
    const format = countryFormats[cleanCountryCode as keyof typeof countryFormats]

    if (format) {
        const match = digits.match(format.pattern)
        if (match) {
            return format.format.replace(/\$(\d)/g, (_, index) => match[parseInt(index)])
        }
    }

    // Default formatting for unrecognized formats
    if (digits.length > 6) {
        return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`
    }

    if (digits.length > 3) {
        return `${digits.slice(0, 3)} ${digits.slice(3)}`
    }

    return digits
}

// Parse country code and phone number from the full modelValue
const selectedCountryCode = computed(() => {
    if (!props.modelValue) return ''

    // Find matching country code from the beginning of the value
    const matchingCode = countryDialingCodes
        .filter(country => props.modelValue?.startsWith(country.code))
        .sort((a, b) => b.code.length - a.code.length)[0] // Get longest match

    return matchingCode?.code || ''
})

const phoneDigits = computed(() => {
    if (!props.modelValue) return ''
    
    // Remove the country code from the beginning to get just the phone number
    if (selectedCountryCode.value) {
        const digitsOnly = props.modelValue.replace(selectedCountryCode.value, '').replace(/\D/g, '')
        return digitsOnly
    }
    
    // If no country code, treat the whole value as phone digits
    return props.modelValue.replace(/\D/g, '')
})

function handleInput(event: Event): void {
    const target = event.target as HTMLInputElement
    const digits = target.value.replace(/\D/g, '')
    
    const countryCode = selectedCountryCode.value.replace(/\D/g, '')
    const format = countryFormats[countryCode as keyof typeof countryFormats]
    
    // Limit length based on country code
    if (format && digits.length > format.maxLength) {
        const truncatedDigits = digits.slice(0, format.maxLength)
        const fullNumber = selectedCountryCode.value + truncatedDigits
        emit('update:modelValue', fullNumber)
        return
    }
    
    // Combine country code with phone digits
    const fullNumber = selectedCountryCode.value + digits
    emit('update:modelValue', fullNumber)
}

function handleDialingCodeChange(event: Event): void {
    const target = event.target as HTMLSelectElement
    const newCountryCode = target.value
    
    // Combine new country code with existing phone digits
    const fullNumber = newCountryCode + phoneDigits.value
    emit('update:modelValue', fullNumber)
}

const displayValue = computed(() => {
    return formatPhoneNumber(phoneDigits.value, selectedCountryCode.value)
})

const isValidPhoneNumber = computed(() => {
    const countryCode = selectedCountryCode.value.replace(/\D/g, '')
    const digits = phoneDigits.value
    
    if (!countryCode || !digits) return false
    
    // Check if country code is valid
    const validCodes = countryDialingCodes.map(c => c.code.replace(/\D/g, ''))
    if (!validCodes.includes(countryCode)) return false
    
    // Check format for known country codes
    const format = countryFormats[countryCode as keyof typeof countryFormats]
    if (format) {
        return digits.length === format.maxLength && format.pattern.test(digits)
    }
    
    // For unknown country codes, allow 7-15 digits
    return digits.length >= 7 && digits.length <= 15
})

const classes = computed(() => ({
    'is-danger': hasErrors.value,
    'is-rounded': props.isRounded,
    ...sizes
}))

const dialingCodeClasses = computed(() => ({
    'is-danger': hasErrors.value,
    'is-rounded': props.isRounded,
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