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

<style>
.flyout-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
}

.flyout-container {
  width: 640px;
  height: 100vh;
  background: hsl(0, 0%, 14%);
  color: hsl(0, 0%, 96%);
  display: flex;
  flex-direction: column;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.3);
}

.flyout-header {
  padding: 1.5rem;
  border-bottom: 1px solid hsl(0, 0%, 21%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
}

.flyout-title {
  flex: 1;
}

.flyout-content {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
}

.flyout-footer {
  padding: 1.5rem;
  border-top: 1px solid hsl(0, 0%, 21%);
  flex-shrink: 0;
}

/* Transitions */
.flyout-enter-active,
.flyout-leave-active {
  transition: opacity 0.3s ease;
}

.flyout-enter-active .flyout-container,
.flyout-leave-active .flyout-container {
  transition: transform 0.3s ease;
}

.flyout-enter-from,
.flyout-leave-to {
  opacity: 0;
}

.flyout-enter-from .flyout-container {
  transform: translateX(100%);
}

.flyout-leave-to .flyout-container {
  transform: translateX(100%);
}

/* Responsive */
@media (max-width: 768px) {
  .flyout-container {
    width: 100vw;
  }
}
</style>