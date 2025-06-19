<template>
  <Teleport to="body">
    <Transition name="flyout">
      <div 
        v-if="modelValue"
        class="flyout-overlay"
        :style="`z-index: ${zIndex};`"
        @click="handleOverlayClick"
      >
        <div 
          class="flyout-container"
          @click.stop
        >
          <!-- Header -->
          <header v-if="showHeader" class="flyout-header">
            <div class="flyout-title">
              <slot name="header">
                <h3 v-if="title" class="title is-4">{{ title }}</h3>
              </slot>
            </div>
            <button 
              v-if="closable"
              class="delete is-large"
              @click="close"
            />
          </header>

          <!-- Content -->
          <main class="flyout-content">
            <slot :close="close">
              <component 
                v-if="component"
                :is="component"
                v-bind="componentProps"
                @close="close"
                v-on="componentListeners"
              />
            </slot>
          </main>

          <!-- Footer -->
          <footer v-if="$slots.footer" class="flyout-footer">
            <slot name="footer" :close="close" />
          </footer>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { watch, onUnmounted, type Component } from 'vue'

interface Props {
  modelValue: boolean
  title?: string
  position?: 'left' | 'right' | 'top' | 'bottom'
  size?: 'small' | 'medium' | 'large' | 'full'
  closable?: boolean
  closeOnOverlay?: boolean
  showHeader?: boolean
  component?: Component | string
  componentProps?: Record<string, any>
  componentListeners?: Record<string, (...args: any[]) => void>
  zIndex?: number
}

const props = withDefaults(defineProps<Props>(), {
  position: 'right',
  size: 'medium',
  closable: true,
  closeOnOverlay: true,
  showHeader: true,
  zIndex: 100
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'close': []
}>()

const close = () => {
  emit('update:modelValue', false)
  emit('close')
}

const handleOverlayClick = () => {
  if (props.closeOnOverlay) {
    close()
  }
}

// Handle escape key
const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.closable && props.modelValue) {
    close()
  }
}

// Watch for changes
watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  },
  { immediate: true }
)

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
  document.body.style.overflow = ''
})
</script>