<template>
  <nav 
    class="steps" 
    :class="stepClasses"
    role="navigation" 
    aria-label="steps"
  >
    <ul :class="{ 'is-vertical': isVertical }">
      <li 
        v-for="(step, index) in steps" 
        :key="index"
        class="step-item"
        :class="getStepItemClasses(index)"
      >
        <a 
          v-if="isClickable && !step.isDisabled"
          @click="handleStepClick(index)"
          class="step-link"
          :aria-current="index === currentStep ? 'step' : undefined"
        >
          <span class="step-marker">
            <b-icon 
              v-if="step.icon" 
              :icon="step.icon" 
              :icon-type="step.iconType"
            />
            <span v-else-if="isStepCompleted(index)" class="step-check">✓</span>
            <span v-else class="step-number">{{ index + 1 }}</span>
          </span>
          <span class="step-details">
            <span class="step-title">{{ step.label }}</span>
          </span>
        </a>
        <div 
          v-else
          class="step-content"
          :aria-current="index === currentStep ? 'step' : undefined"
        >
          <span class="step-marker">
            <b-icon 
              v-if="step.icon" 
              :icon="step.icon" 
              :icon-type="step.iconType"
            />
            <span v-else-if="isStepCompleted(index)" class="step-check">✓</span>
            <span v-else class="step-number">{{ index + 1 }}</span>
          </span>
          <span class="step-details">
            <span class="step-title">{{ step.label }}</span>
          </span>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { _Steps } from '@/interfaces/steps'
import useSizes from '../utils/sizes'

const props = withDefaults(
  defineProps<_Steps>(), {
    currentStep: 0,
    isClickable: false,
    isVertical: false,
    hasArrowSeparator: false,
    hasBulletSeparator: false,
    hasDotSeparator: false,
    hasSucceedsSeparator: false,
  }
)

const emit = defineEmits<{
  stepClick: [stepIndex: number]
}>()

const sizes = useSizes(props)

const stepClasses = computed(() => ({
  ...sizes,
  'is-vertical': props.isVertical,
  'has-arrow-separator': props.hasArrowSeparator,
  'has-bullet-separator': props.hasBulletSeparator,
  'has-dot-separator': props.hasDotSeparator,
  'has-succeeds-separator': props.hasSucceedsSeparator,
}))

const isStepCompleted = (index: number): boolean => {
  return props.steps[index]?.isCompleted || index < props.currentStep
}

const isStepActive = (index: number): boolean => {
  return index === props.currentStep
}

const isStepDisabled = (index: number): boolean => {
  return props.steps[index]?.isDisabled || false
}

const getStepItemClasses = (index: number) => ({
  'is-completed': isStepCompleted(index),
  'is-active': isStepActive(index),
  'is-disabled': isStepDisabled(index),
})

const handleStepClick = (stepIndex: number) => {
  if (!isStepDisabled(stepIndex)) {
    emit('stepClick', stepIndex)
  }
}
</script>

<style scoped>
.steps {
  display: flex;
  flex-wrap: wrap;
  font-size: 1rem;
  min-height: 2rem;
}

.steps ul {
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: flex-start;
  list-style: none;
  margin: 0;
  padding: 0;
}

.steps ul.is-vertical {
  flex-direction: column;
}

.step-item {
  align-items: center;
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: center;
  position: relative;
}

.step-item:not(:first-child)::before {
  background-color: hsl(0, 0%, 86%);
  content: "";
  display: block;
  height: 2px;
  left: -50%;
  position: absolute;
  top: 1rem;
  width: 100%;
  z-index: 1;
}

.steps.is-vertical .step-item:not(:first-child)::before {
  height: 100%;
  left: 1rem;
  top: -50%;
  width: 2px;
}

.step-item.is-completed:not(:first-child)::before {
  background-color: hsl(141, 53%, 53%);
}

.step-item.is-active:not(:first-child)::before {
  background-color: hsl(204, 86%, 53%);
}

.step-link,
.step-content {
  align-items: center;
  color: hsl(0, 0%, 48%);
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  z-index: 2;
}

.step-link {
  cursor: pointer;
  text-decoration: none;
}

.step-link:hover {
  color: hsl(0, 0%, 21%);
}

.step-item.is-disabled .step-link,
.step-item.is-disabled .step-content {
  color: hsl(0, 0%, 71%);
  cursor: not-allowed;
}

.step-marker {
  align-items: center;
  background-color: hsl(0, 0%, 96%);
  border: 2px solid hsl(0, 0%, 86%);
  border-radius: 50%;
  color: hsl(0, 0%, 48%);
  display: flex;
  font-size: 1rem;
  font-weight: 700;
  height: 2rem;
  justify-content: center;
  margin-right: 0.5rem;
  width: 2rem;
}

.step-item.is-completed .step-marker {
  background-color: hsl(141, 53%, 53%);
  border-color: hsl(141, 53%, 53%);
  color: hsl(0, 0%, 100%);
}

.step-item.is-active .step-marker {
  background-color: hsl(204, 86%, 53%);
  border-color: hsl(204, 86%, 53%);
  color: hsl(0, 0%, 100%);
}

.step-item.is-disabled .step-marker {
  background-color: hsl(0, 0%, 96%);
  border-color: hsl(0, 0%, 86%);
  color: hsl(0, 0%, 71%);
}

.step-details {
  text-align: left;
}

.step-title {
  font-size: 1rem;
  font-weight: 600;
}

.step-item.is-active .step-title {
  color: hsl(204, 86%, 53%);
}

.step-item.is-completed .step-title {
  color: hsl(141, 53%, 53%);
}

/* Vertical layout adjustments */
.steps.is-vertical {
  min-height: auto;
}

.steps.is-vertical .step-item {
  flex-basis: auto;
  flex-grow: 0;
  justify-content: flex-start;
  padding: 0.75rem 0;
}

.steps.is-vertical .step-link,
.steps.is-vertical .step-content {
  justify-content: flex-start;
}

/* Separator styles */
.steps.has-arrow-separator .step-item:not(:first-child)::before {
  background: linear-gradient(-45deg, transparent 40%, hsl(0, 0%, 86%) 40%, hsl(0, 0%, 86%) 60%, transparent 60%);
}

.steps.has-bullet-separator .step-item:not(:first-child)::before {
  background: radial-gradient(circle, hsl(0, 0%, 86%) 30%, transparent 30%);
  background-size: 0.5rem 0.5rem;
  background-position: center;
  background-repeat: no-repeat;
}

.steps.has-dot-separator .step-item:not(:first-child)::before {
  background: repeating-linear-gradient(90deg, hsl(0, 0%, 86%) 0, hsl(0, 0%, 86%) 0.25rem, transparent 0.25rem, transparent 0.5rem);
}

.steps.has-succeeds-separator .step-item:not(:first-child)::before {
  background: linear-gradient(45deg, transparent 40%, hsl(0, 0%, 86%) 40%, hsl(0, 0%, 86%) 60%, transparent 60%);
}

/* Size modifiers */
.steps.is-small {
  font-size: 0.75rem;
}

.steps.is-small .step-marker {
  height: 1.5rem;
  width: 1.5rem;
  font-size: 0.75rem;
}

.steps.is-medium {
  font-size: 1.25rem;
}

.steps.is-medium .step-marker {
  height: 2.5rem;
  width: 2.5rem;
  font-size: 1.25rem;
}

.steps.is-large {
  font-size: 1.5rem;
}

.steps.is-large .step-marker {
  height: 3rem;
  width: 3rem;
  font-size: 1.5rem;
}
</style>
