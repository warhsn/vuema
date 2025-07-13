<template>
    <div>
        <field-label v-if="$slots.default || $slots.description" :required="required">
            <slot />
            <template #description>
                <slot name="description" />
            </template>
        </field-label>
        <div class="search-input">
            <!-- Display selected tags -->
            <div class="tags is-marginless" v-if="modelValue && modelValue.length > 0 && withTags">
                <span class="tag" v-for="(item, index) in modelValue" :key="getItemKey(item, index)">
                    {{ getDisplayLabel(item) }}
                    <button class="delete is-small" @click="removeItem(item)" :disabled="disabled">
                    </button>
                </span>
            </div>
            <!-- Search input -->
            <div class="control" :class="{
                'has-icons-left': leftIcon,
                'has-icons-right': rightIcon,
                'is-loading': isLoading,
                'is-expanded': isExpanded
            }">
                <input 
                    type="text"
                    class="input" 
                    :class="classes"  
                    :placeholder="searchPlaceholder || placeholder"
                    :disabled="disabled"
                    v-model="searchText"
                    @input="onInput"
                    @focus="onFocus"
                    @blur="onBlur"
                    @click="onInputClick"
                    @keydown.enter.prevent="addSelectedOrNew"
                    @keydown.down.prevent="navigateDropdown(1)"
                    @keydown.up.prevent="navigateDropdown(-1)"
                    @keydown.esc="closeDropdown"
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
            </div>
            <!-- Dropdown for search results -->
            <div class="dropdown-menu" v-if="isDropdownOpen && (filteredItems.length > 0 || showAddNew)">
                <div class="dropdown-content">
                    <a 
                        v-for="(item, index) in filteredItems" 
                        :key="getItemKey(item, index)"
                        class="dropdown-item"
                        :class="{ 'is-active': index === activeIndex }"
                        @mousedown.prevent="selectItem(item)"
                        @mouseenter="activeIndex = index"
                    >
                        {{ getItemLabel(item) }}
                    </a>
                    <!-- Add new item option if allowNew is true and searchText is not empty -->
                    <a 
                        v-if="showAddNew"
                        class="dropdown-item"
                        :class="{ 'is-active': filteredItems.length === activeIndex }"
                        @mousedown.prevent="addNewItem(searchText)"
                        @mouseenter="activeIndex = filteredItems.length"
                    >
                        Add "{{ searchText }}"
                    </a>
                </div>
            </div>
        </div>
        <FieldError :error="error"/>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { _SearchInput } from '../interfaces/search-input'
import { _hasErrors, _error } from '../computed/errors'
import FieldError from './field-error.vue'
import useSizes from '../utils/sizes'

const props = withDefaults(
    defineProps<_SearchInput>(), {
        modelValue: () => [],
        searchPlaceholder: 'Search...',
        allowNew: false,
        labelKey: 'label',
        valueKey: 'value',
        emitFullObjects: false,
        withTags: true
    }
)

const sizes = useSizes(props)
const inputEvent = 'update:modelValue'
const focus = 'focus'
const blur = 'blur'

const emit = defineEmits<{
    (e: typeof inputEvent, value: Array<any>): void,
    (e: typeof focus): void,
    (e: typeof blur): void,
}>()

const searchText = ref('')
const isDropdownOpen = ref(false)
const activeIndex = ref(0)
const blurTimeout = ref<NodeJS.Timeout | null>(null)

function shouldEmitFullObjects(): boolean {
    if (props.emitFullObjects !== undefined) {
        return props.emitFullObjects
    }
    
    if (!props.modelValue || props.modelValue.length === 0) {
        return false
    }
    
    const firstItem = props.modelValue[0]

    return typeof firstItem === 'object' && 
           firstItem !== null && 
           firstItem.hasOwnProperty(props.labelKey)
}

function getDisplayLabel(selectedItem: any): string {
    if (selectedItem && selectedItem[props.labelKey]) {
        return selectedItem[props.labelKey]
    }

    if (props.items && props.items.length > 0) {
        const fullItem = props.items.find(item => {
            const itemValue = getItemValue(item)
            const selectedValue = getItemValue(selectedItem)
            return itemValue === selectedValue
        })
        
        if (fullItem) {
            return getItemLabel(fullItem)
        }
    }
    
    return selectedItem[props.labelKey] || selectedItem.label || selectedItem.name || String(selectedItem)
}

function getItemLabel(item: any): string {
    if (!item) return ''
    return item[props.labelKey] || item.label || item.name || String(item)
}

function getItemValue(item: any): any {
    if (!item) return null
    return item[props.valueKey] || item.value || item.id || item
}

function getItemKey(item: any, index: number): string {
    const value = getItemValue(item)
    return value ? String(value) : `item-${index}`
}

const showAddNew = computed(() => {
    return props.allowNew && 
           searchText.value && 
           searchText.value.trim() !== '' &&
           !isItemInList(searchText.value)
})

const filteredItems = computed(() => {
    if (!props.items || props.items.length === 0) return []

    if (!searchText.value) {
        return props.items.filter(item => !isItemSelected(item))
    }
    
    const searchLower = searchText.value.toLowerCase()
    return props.items.filter(item => {
        const label = getItemLabel(item).toLowerCase()
        return label.includes(searchLower) && !isItemSelected(item)
    })
})

function isItemSelected(item: any): boolean {
    if (!props.modelValue || props.modelValue.length === 0) return false
    
    const itemValue = getItemValue(item)
    return props.modelValue.some(selected => {
        const selectedValue = getItemValue(selected)
        return selectedValue === itemValue
    })
}

function isItemInList(text: string): boolean {
    if (!props.items || props.items.length === 0) return false
    
    return props.items.some(item => 
        getItemLabel(item).toLowerCase() === text.toLowerCase()
    )
}

function onInput(): void {
    isDropdownOpen.value = true
    activeIndex.value = 0
}

function onInputClick(): void {
    if (!isDropdownOpen.value) {
        isDropdownOpen.value = true
        activeIndex.value = 0
    }
}

const onFocus = () => {
    if (blurTimeout.value) {
        clearTimeout(blurTimeout.value)
        blurTimeout.value = null
    }
    
    isDropdownOpen.value = true
    emit(focus)
}

const onBlur = () => {
    blurTimeout.value = setTimeout(() => {
        isDropdownOpen.value = false
        emit(blur)
        blurTimeout.value = null
    }, 150)
}

function selectItem(item: any): void {
    if (blurTimeout.value) {
        clearTimeout(blurTimeout.value)
        blurTimeout.value = null
    }
    
    if (!isItemSelected(item)) {
        const itemToAdd = shouldEmitFullObjects() ? item : getItemValue(item)
        const newValue = [...(props.modelValue || []), itemToAdd]
        emit(inputEvent, newValue)
    }
    searchText.value = ''
    activeIndex.value = 0
}

function addNewItem(text: string): void {
    if (blurTimeout.value) {
        clearTimeout(blurTimeout.value)
        blurTimeout.value = null
    }
    
    if (props.allowNew && text && text.trim() !== '') {
        const newItem = {
            [props.valueKey]: `new-${Date.now()}`,
            [props.labelKey]: text.trim()
        }

        const itemToAdd = shouldEmitFullObjects() ? newItem : getItemValue(newItem)
        const newValue = [...(props.modelValue || []), itemToAdd]
        emit(inputEvent, newValue)
        
        searchText.value = ''
        activeIndex.value = 0
    }
}

function removeItem(item: any): void {
    if (!props.modelValue) return
    
    const itemValue = getItemValue(item)
    const newValue = props.modelValue.filter(selected => {
        const selectedValue = getItemValue(selected)
        return selectedValue !== itemValue
    })
    emit(inputEvent, newValue)
}

function addSelectedOrNew(): void {    
    if (activeIndex.value >= 0 && activeIndex.value < filteredItems.value.length) {
        selectItem(filteredItems.value[activeIndex.value])
    } else if (showAddNew.value && activeIndex.value === filteredItems.value.length) {
        addNewItem(searchText.value)
    }
}

function navigateDropdown(direction: number): void {
    if (!isDropdownOpen.value) {
        isDropdownOpen.value = true
        return
    }
    
    const totalItems = filteredItems.value.length + (showAddNew.value ? 1 : 0)
    if (totalItems === 0) return

    let newIndex = activeIndex.value + direction
    if (newIndex < 0) newIndex = totalItems - 1
    if (newIndex >= totalItems) newIndex = 0
    
    activeIndex.value = newIndex
}

function closeDropdown(): void {
    isDropdownOpen.value = false
    searchText.value = ''
    activeIndex.value = 0
}

const hasErrors = _hasErrors(props)

const classes = computed(() => {
    return {
        'is-danger': hasErrors.value,
        'is-rounded': props.isRounded,
        ...sizes
    }
})

watch(() => props.modelValue, (newValue) => {
}, { deep: true })
</script>

<style scoped>
.search-input {
    position: relative;
    width: 100%;
}

.search-input .tags {
    margin-bottom: 0.5rem;
}

.dropdown-menu {
    position: absolute;
    width: 100%;
    z-index: 20;
    display: block;
    top: 100%;
    left: 0;
    background: white;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
}

.dropdown-content {
    max-height: 200px;
    overflow-y: auto;
    padding: 0;
}

.dropdown-item {
    display: block;
    padding: 0.375rem 1rem;
    color: #4a4a4a;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    border: none;
    background: none;
    width: 100%;
    text-align: left;
}

.dropdown-item:hover,
.dropdown-item.is-active {
    background-color: #f5f5f5;
    color: #363636;
}

.dropdown-item.is-active {
    background-color: #3273dc;
    color: white;
}
</style>