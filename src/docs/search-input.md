# Search Input Component

The Search Input component is a taggable multi-selection component that allows users to search through a list of items and select multiple options. It combines the functionality of a search box and a tag input.

## Features

- Search through a list of items
- Display selected items as tags
- Remove selected tags with a click
- Keyboard navigation (arrow keys, enter, escape)
- Optional ability to add new items that don't exist in the original list
- Customizable with icons and styling options

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| modelValue | Array | `[]` | The selected items |
| items | Array | required | The list of items to search through |
| valueKey | String | required | The property name to use as the value key in each item |
| labelKey | String | required | The property name to use as the display label in each item |
| searchPlaceholder | String | 'Search...' | Placeholder text for the search input |
| allowNew | Boolean | false | Whether to allow adding new items that don't exist in the list |
| placeholder | String | - | Placeholder text for the input (inherited from _Forms) |
| disabled | Boolean | false | Whether the input is disabled (inherited from _Forms) |
| required | Boolean | false | Whether the input is required (inherited from _Forms) |
| isLoading | Boolean | false | Whether to show a loading indicator (inherited from _Forms) |
| isRounded | Boolean | false | Whether to use rounded styling (inherited from _Forms) |
| leftIcon | String | - | Icon to display on the left side of the input (inherited from _Icons) |
| rightIcon | String | - | Icon to display on the right side of the input (inherited from _Icons) |
| error | String | - | Error message to display (inherited from _Errors) |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| update:modelValue | Array | Emitted when the selected items change |
| focus | - | Emitted when the input is focused |
| blur | - | Emitted when the input loses focus |

## Usage Example

```vue
<template>
  <search-input
    v-model="selectedItems"
    :items="availableItems"
    valueKey="id"
    labelKey="name"
    placeholder="Search for items..."
    leftIcon="search"
    :allowNew="true"
  >
    Select Items
    <template #description>
      Search and select multiple items
    </template>
  </search-input>
</template>

<script setup>
import { ref } from 'vue'

const availableItems = [
  { id: 1, name: 'JavaScript' },
  { id: 2, name: 'TypeScript' },
  { id: 3, name: 'Vue.js' },
  // ...more items
]

const selectedItems = ref([])
</script>
```

## Behavior

1. Type in the search box to filter the available items
2. Click on an item in the dropdown to select it
3. Selected items appear as tags above the search box
4. Click the 'x' on a tag to remove it
5. If `allowNew` is true, you can add items that don't exist in the original list
6. Use keyboard navigation:
   - Up/Down arrows to navigate the dropdown
   - Enter to select the highlighted item
   - Escape to close the dropdown

## Styling

The component uses Bulma CSS classes for styling and is designed to be consistent with other form components in the library. You can customize the appearance using the provided props or by targeting the component's CSS classes.
