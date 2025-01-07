import { Dayjs } from 'dayjs';
export interface DatePickerProps {
    /**
     * The current value of the date picker (v-model)
     */
    modelValue?: string | null;
    /**
     * The format to display and parse dates (default: 'YYYY-MM-DD')
     */
    format?: string;
    /**
     * The minimum selectable date
     */
    minDate?: string | null;
    /**
     * The maximum selectable date
     */
    maxDate?: string | null;
    /**
     * Whether the date picker is required
     */
    required?: boolean;
    /**
     * Error message or validation state
     */
    error?: string[] | null;
    /**
     * Show the calendar icon
     */
    withIcon?: boolean;
    /**
     * The description of the field
     */
    description?: string;
}
export interface CalendarDay {
    /**
     * CSS class for styling the day
     */
    class: string;
    /**
     * The date object for this calendar day
     */
    date: Dayjs;
    /**
     * The day number (1-31)
     */
    day: number;
    /**
     * Whether the date is disabled (outside min/max range or not in current month)
     */
    disabled: boolean;
}
export interface DatePickerState {
    /**
     * Whether the picker popup is showing
     */
    showingPicker: boolean;
    /**
     * The currently focused/displayed date
     */
    currentDate: Dayjs;
    /**
     * The currently selected date (formatted string)
     */
    selectedDate: string | null;
    /**
     * The minimum allowed date
     */
    minDate: Dayjs | null;
    /**
     * The maximum allowed date
     */
    maxDate: Dayjs | null;
}
export interface CalendarHeaderProps {
    /**
     * The current month (0-11)
     */
    month: number;
    /**
     * The current year
     */
    year: string | number;
}
export interface CalendarGridProps {
    /**
     * Array of calendar days to display
     */
    calendarDays: CalendarDay[];
    /**
     * Today's date in the specified format
     */
    today: string;
    /**
     * The currently selected date
     */
    selectedDate: string | null;
    /**
     * The date format being used
     */
    dateFormat: string;
}
export interface DatePickerEmits {
    (e: 'update:model-value', value: string): void;
}
export interface CalendarHeaderEmits {
    (e: 'previous-month'): void;
    (e: 'next-month'): void;
    (e: 'month-change', month: number): void;
    (e: 'year-change', year: number): void;
}
export interface CalendarGridEmits {
    (e: 'select-date', date: string): void;
}
