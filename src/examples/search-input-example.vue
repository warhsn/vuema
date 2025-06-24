<template>
  <div class="container">
    <h1 class="title">Search Input Examples</h1>
    
    <div class="box">
      <h2 class="subtitle">Basic Search Input</h2>
      <search-input
        v-model="selectedItems1"
        :items="sampleItems"
        valueKey="id"
        labelKey="name"
        placeholder="Search for an item..."
      >
        Select Items
      </search-input>
      <div class="mt-4">
        <p>Selected items:</p>
        <pre>{{ selectedItems1 }}</pre>
      </div>
    </div>
    
    <div class="box">
      <h2 class="subtitle">Search Input with Custom Icons</h2>
      <search-input
        v-model="selectedItems2"
        :items="sampleItems"
        valueKey="id"
        labelKey="name"
        leftIcon="search"
        placeholder="Search with icons..."
      >
        Search with Icons
      </search-input>
      <div class="mt-4">
        <p>Selected items:</p>
        <pre>{{ selectedItems2 }}</pre>
      </div>
    </div>
    
    <div class="box">
      <h2 class="subtitle">Search Input with Add New Option</h2>
      <search-input
        v-model="selectedItems3"
        :items="sampleItems"
        valueKey="id"
        labelKey="name"
        :allowNew="true"
        placeholder="Type to search or add new..."
      >
        Search with Add New
        <template #description>
          You can add new items that don't exist in the list
        </template>
      </search-input>
      <div class="mt-4">
        <p>Selected items:</p>
        <pre>{{ selectedItems3 }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Sample data
const sampleItems = [
  { id: 1, name: 'JavaScript' },
  { id: 2, name: 'TypeScript' },
  { id: 3, name: 'Vue.js' },
  { id: 4, name: 'React' },
  { id: 5, name: 'Angular' },
  { id: 6, name: 'Node.js' },
  { id: 7, name: 'Express' },
  { id: 8, name: 'MongoDB' },
  { id: 9, name: 'PostgreSQL' },
  { id: 10, name: 'GraphQL' },
  { id: 11, name: 'REST API' },
  { id: 12, name: 'Docker' },
  { id: 13, name: 'Kubernetes' },
  { id: 14, name: 'AWS' },
  { id: 15, name: 'Azure' }
]

// Selected items for each example
const selectedItems1 = ref([])
const selectedItems2 = ref([])
const selectedItems3 = ref([])
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.box {
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: 6px;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1);
  background-color: white;
}

.mt-4 {
  margin-top: 1.5rem;
}

pre {
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 4px;
  white-space: pre-wrap;
}
</style>
