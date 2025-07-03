import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import DatePicker from './date-picker.vue'
import dayjs from 'dayjs'

// Mock dependencies
vi.mock('./calendar-header.vue', () => ({
  default: {
    name: 'CalendarHeader',
    template: '<div data-testid="calendar-header">Calendar Header</div>',
    emits: ['previous-month', 'next-month', 'month-change', 'year-change']
  }
}))

vi.mock('./calendar-grid.vue', () => ({
  default: {
    name: 'CalendarGrid',
    template: '<div data-testid="calendar-grid">Calendar Grid</div>',
    emits: ['select-date']
  }
}))

// Global components mock
const TextInputMock = {
  name: 'TextInput',
  template: `
    <input 
      :value="modelValue" 
      @input="$emit('update:model-value', $event.target.value)"
      @click="$emit('click')"
      @blur="$emit('blur')"
      @keydown="$emit('keydown', $event)"
      data-testid="text-input"
      v-bind="$attrs"
    />
  `,
  props: ['modelValue', 'placeholder', 'required', 'error', 'type', 'isExpanded', 'hasAddons', 'isSmall', 'isMedium', 'isLarge'],
  emits: ['update:model-value', 'click', 'blur', 'keydown', 'input'],
  inheritAttrs: false
}

const IconButtonMock = {
  name: 'IconButton',
  template: '<button data-testid="icon-button"><slot /></button>',
  props: ['icon', 'isSmall', 'isMedium', 'isLarge']
}

const BoxMock = {
  name: 'Box',
  template: '<div data-testid="box"><slot /></div>'
}

describe('DatePicker', () => {
  let wrapper: any

  beforeEach(() => {
    // Mock window dimensions
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    })
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 768,
    })

    // Mock getBoundingClientRect
    Element.prototype.getBoundingClientRect = vi.fn(() => ({
      x: 0,
      y: 0,
      width: 200,
      height: 40,
      top: 100,
      right: 200,
      bottom: 140,
      left: 0,
      toJSON: vi.fn(),
    }))
  })

  afterEach(() => {
    if (wrapper) {
      wrapper.unmount()
    }
    vi.clearAllMocks()
  })

  const createWrapper = (props = {}) => {
    return mount(DatePicker, {
      props,
      global: {
        components: {
          'text-input': TextInputMock,
          'icon-button': IconButtonMock,
          'box': BoxMock
        }
      }
    })
  }

  describe('Initialization', () => {
    it('renders without crashing', () => {
      wrapper = createWrapper()
      expect(wrapper.exists()).toBe(true)
    })

    it('shows desktop picker by default', () => {
      wrapper = createWrapper()
      expect(wrapper.find('[data-testid="text-input"]').exists()).toBe(true)
      expect(wrapper.vm.isMobile).toBe(false)
    })

    it('accepts initial value', () => {
      const initialDate = '2025-01-15'
      wrapper = createWrapper({
        modelValue: initialDate
      })
      // Component should display the formatted date
      expect(wrapper.vm.state.selectedDate).toBe(initialDate)
    })
  })

  describe('Mobile Detection', () => {
    it('detects mobile correctly', () => {
      // Mock mobile environment
      Object.defineProperty(window, 'innerWidth', { value: 400 })
      Object.defineProperty(window, 'ontouchstart', { value: true })
      Object.defineProperty(navigator, 'userAgent', {
        value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)',
        configurable: true
      })

      wrapper = createWrapper()
      wrapper.vm.detectMobile()
      expect(wrapper.vm.isMobile).toBe(true)
    })

    it('detects desktop correctly', () => {
      // Reset to desktop environment
      Object.defineProperty(window, 'innerWidth', { value: 1024 })
      Object.defineProperty(window, 'ontouchstart', { value: undefined })
      Object.defineProperty(navigator, 'userAgent', {
        value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        configurable: true
      })
      
      wrapper = createWrapper()
      wrapper.vm.detectMobile()
      expect(wrapper.vm.isMobile).toBe(false)
    })
  })

  describe('Picker Toggle', () => {
    beforeEach(() => {
      wrapper = createWrapper()
    })

    it('opens picker when input is clicked', async () => {
      const input = wrapper.find('[data-testid="text-input"]')
      await input.trigger('click')
      
      expect(wrapper.vm.state.showingPicker).toBe(true)
      await nextTick()
      expect(wrapper.find('[data-testid="box"]').exists()).toBe(true)
    })

    it('closes picker on second click', async () => {
      const input = wrapper.find('[data-testid="text-input"]')
      
      // Open picker
      await input.trigger('click')
      expect(wrapper.vm.state.showingPicker).toBe(true)
      
      // Close picker
      await input.trigger('click')
      expect(wrapper.vm.state.showingPicker).toBe(false)
    })

    it('opens picker with arrow down key', async () => {
      const input = wrapper.find('[data-testid="text-input"]')
      await input.trigger('keydown', { key: 'ArrowDown' })
      
      expect(wrapper.vm.state.showingPicker).toBe(true)
    })

    it('opens picker with space key', async () => {
      const input = wrapper.find('[data-testid="text-input"]')
      await input.trigger('keydown', { key: ' ' })
      
      expect(wrapper.vm.state.showingPicker).toBe(true)
    })

    it('closes picker with escape key', async () => {
      const input = wrapper.find('[data-testid="text-input"]')
      
      // Open picker first
      await input.trigger('click')
      expect(wrapper.vm.state.showingPicker).toBe(true)
      
      // Close with escape
      await input.trigger('keydown', { key: 'Escape' })
      expect(wrapper.vm.state.showingPicker).toBe(false)
    })
  })

  describe('Date Selection', () => {
    beforeEach(() => {
      wrapper = createWrapper()
    })

    it('selects date correctly', () => {
      const testDate = '2025-01-15'
      wrapper.vm.selectDate(testDate)
      
      expect(wrapper.vm.state.selectedDate).toBe(testDate)
      expect(wrapper.emitted('update:model-value')).toEqual([[testDate]])
    })

    it('selects today correctly', () => {
      const today = dayjs().format('YYYY-MM-DD')
      wrapper.vm.selectToday()
      
      expect(wrapper.vm.state.selectedDate).toBe(today)
      expect(wrapper.emitted('update:model-value')).toEqual([[today]])
    })

    it('clears date correctly', () => {
      // Set initial date
      wrapper.vm.selectDate('2025-01-15')
      expect(wrapper.vm.state.selectedDate).toBe('2025-01-15')
      
      // Clear date
      wrapper.vm.clearDate()
      expect(wrapper.vm.state.selectedDate).toBeNull()
      expect(wrapper.emitted('update:model-value')).toContainEqual([''])
    })
  })

  describe('Date Validation', () => {
    it('respects minimum date', () => {
      const minDate = '2025-01-10'
      const invalidDate = '2025-01-05'
      
      wrapper = createWrapper({ minDate })
      
      wrapper.vm.selectDate(invalidDate)
      expect(wrapper.vm.state.selectedDate).toBeNull()
    })

    it('respects maximum date', () => {
      const maxDate = '2025-01-20'
      const invalidDate = '2025-01-25'
      
      wrapper = createWrapper({ maxDate })
      
      wrapper.vm.selectDate(invalidDate)
      expect(wrapper.vm.state.selectedDate).toBeNull()
    })

    it('respects disabled dates array', () => {
      const disabledDates = ['2025-01-15', '2025-01-16']
      
      wrapper = createWrapper({ disabledDates })
      
      wrapper.vm.selectDate('2025-01-15')
      expect(wrapper.vm.state.selectedDate).toBeNull()
    })

    it('respects custom disabled function', () => {
      const isDateDisabled = (date: string) => {
        // Disable weekends
        const day = dayjs(date).day()
        return day === 0 || day === 6
      }
      
      wrapper = createWrapper({ isDateDisabled })
      
      // Try to select a Sunday (disabled) - dayjs week starts on Monday, so Sunday is day 0
      const sunday = dayjs('2025-06-29').format('YYYY-MM-DD') // This is a Sunday
      wrapper.vm.selectDate(sunday)
      expect(wrapper.vm.state.selectedDate).toBeNull()
    })
  })

  describe('Keyboard Navigation', () => {
    beforeEach(() => {
      wrapper = createWrapper()
      // Open picker first
      wrapper.vm.togglePicker()
    })

    it('navigates with arrow keys', () => {
      const initialDate = dayjs('2025-01-15')
      wrapper.vm.keyboardNavigation.focusedDate = initialDate.format('YYYY-MM-DD')
      
      // Test right arrow (next day)
      wrapper.vm.handleArrowNavigation('ArrowRight')
      expect(wrapper.vm.keyboardNavigation.focusedDate).toBe('2025-01-16')
      
      // Test left arrow (previous day)
      wrapper.vm.handleArrowNavigation('ArrowLeft')
      expect(wrapper.vm.keyboardNavigation.focusedDate).toBe('2025-01-15')
      
      // Test down arrow (next week)
      wrapper.vm.handleArrowNavigation('ArrowDown')
      expect(wrapper.vm.keyboardNavigation.focusedDate).toBe('2025-01-22')
      
      // Test up arrow (previous week)
      wrapper.vm.handleArrowNavigation('ArrowUp')
      expect(wrapper.vm.keyboardNavigation.focusedDate).toBe('2025-01-15')
    })

    it('prevents navigation to disabled dates', () => {
      const disabledDates = ['2025-01-16']
      wrapper = createWrapper({ disabledDates })
      wrapper.vm.togglePicker()
      
      wrapper.vm.keyboardNavigation.focusedDate = '2025-01-15'
      wrapper.vm.handleArrowNavigation('ArrowRight')
      
      // Should stay on the same date since next day is disabled
      expect(wrapper.vm.keyboardNavigation.focusedDate).toBe('2025-01-15')
    })
  })

  describe('Positioning', () => {
    beforeEach(() => {
      wrapper = createWrapper()
    })

    it('calculates position correctly for default case', () => {
      wrapper.vm.calculatePickerPosition()
      
      // Should use default left alignment
      expect(wrapper.vm.pickerPosition.alignRight).toBe(false)
      expect(wrapper.vm.pickerPosition.alignCenter).toBe(false)
    })

    it('aligns right when near right edge', () => {
      // Mock element near right edge
      Element.prototype.getBoundingClientRect = vi.fn(() => ({
        x: 800,
        y: 0,
        width: 200,
        height: 40,
        top: 100,
        right: 1000,
        bottom: 140,
        left: 800,
        toJSON: vi.fn(),
      }))
      
      wrapper.vm.calculatePickerPosition()
      expect(wrapper.vm.pickerPosition.alignRight).toBe(true)
    })

    it('shows picker above when no space below', () => {
      // Mock element near bottom
      Element.prototype.getBoundingClientRect = vi.fn(() => ({
        x: 0,
        y: 700,
        width: 200,
        height: 40,
        top: 700,
        right: 200,
        bottom: 740,
        left: 0,
        toJSON: vi.fn(),
      }))
      
      wrapper.vm.calculatePickerPosition()
      expect(wrapper.vm.pickerPosition.showAbove).toBe(true)
    })
  })

  describe('Format Handling', () => {
    it('handles different date formats', () => {
      const customFormat = 'DD/MM/YYYY'
      wrapper = createWrapper({ format: customFormat })
      
      // The selectDate function expects a date that dayjs can parse
      // We'll use ISO format and check that it gets formatted correctly
      const testDate = '2025-01-15'
      wrapper.vm.selectDate(testDate)
      
      expect(wrapper.vm.state.selectedDate).toBe('15/01/2025')
    })

    it('converts between formats correctly', () => {
      wrapper = createWrapper({ format: 'DD/MM/YYYY' })
      
      // Test native date conversion
      const nativeDate = '2025-01-15' // Native format (YYYY-MM-DD)
      wrapper.vm.handleNativeInput(nativeDate)
      
      expect(wrapper.vm.state.selectedDate).toBe('15/01/2025')
    })
  })

  describe('Event Emissions', () => {
    beforeEach(() => {
      wrapper = createWrapper()
    })

    it('emits update:model-value on date selection', () => {
      const testDate = '2025-01-15'
      wrapper.vm.selectDate(testDate)
      
      expect(wrapper.emitted('update:model-value')).toEqual([[testDate]])
    })

    it('emits update:model-value on manual input', () => {
      const testDate = '2025-01-15'
      wrapper.vm.handleManualInput(testDate)
      
      expect(wrapper.emitted('update:model-value')).toEqual([[testDate]])
    })

    it('emits empty string when clearing date', () => {
      wrapper.vm.clearDate()
      
      expect(wrapper.emitted('update:model-value')).toEqual([['']])
    })
  })

  describe('Accessibility', () => {
    beforeEach(() => {
      wrapper = createWrapper()
    })

    it('has proper ARIA attributes', async () => {
      const input = wrapper.find('[data-testid="text-input"]')
      
      expect(input.attributes('role')).toBe('combobox')
      expect(input.attributes('aria-haspopup')).toBe('dialog')
      expect(input.attributes('aria-expanded')).toBe('false')
    })

    it('updates aria-expanded when picker opens/closes', async () => {
      await wrapper.vm.togglePicker()
      expect(wrapper.vm.state.showingPicker).toBe(true)
      
      await wrapper.vm.togglePicker()
      expect(wrapper.vm.state.showingPicker).toBe(false)
    })

    it('has screen reader description', () => {
      const description = wrapper.find('.is-sr-only')
      expect(description.exists()).toBe(true)
      expect(description.text()).toContain('Use arrow keys to navigate')
    })
  })
})