import { _Forms } from '../../interfaces/forms';
export interface TimePickerProps extends _Forms {
    /**
     * Time format: '24' for 24-hour format, '12' for 12-hour format with AM/PM
     * Default: '24'
     */
    format?: '12' | '24';
    /**
     * The minimum selectable time (in HH:mm format)
     */
    minTime?: string | null;
    /**
     * The maximum selectable time (in HH:mm format)
     */
    maxTime?: string | null;
    /**
     * Show the clock icon
     */
    withIcon?: boolean;
    /**
     * Step interval for minutes (default: 1)
     * Common values: 1, 5, 15, 30
     */
    minuteStep?: number;
    /**
     * Array of specific times to disable (in HH:mm format)
     */
    disabledTimes?: string[];
    /**
     * Function to determine if a specific time should be disabled
     */
    isTimeDisabled?: (hour: number, minute: number) => boolean;
}
export interface TimePickerState {
    /**
     * Whether the picker popup is showing
     */
    showingPicker: boolean;
    /**
     * The currently selected time (formatted string)
     */
    selectedTime: string | null;
    /**
     * Current hour value (0-23)
     */
    hour: number | null;
    /**
     * Current minute value (0-59)
     */
    minute: number | null;
    /**
     * AM/PM period for 12-hour format
     */
    period: 'AM' | 'PM';
}
export interface TimeSelectorProps {
    /**
     * Current hour (0-23 for 24h, 1-12 for 12h)
     */
    hour: number | null;
    /**
     * Current minute (0-59)
     */
    minute: number | null;
    /**
     * Current period (AM/PM for 12-hour format)
     */
    period: 'AM' | 'PM';
    /**
     * Time format
     */
    format: '12' | '24';
    /**
     * Minute step interval
     */
    minuteStep: number;
    /**
     * Minimum time restriction (HH:mm format)
     */
    minTime?: string | null;
    /**
     * Maximum time restriction (HH:mm format)
     */
    maxTime?: string | null;
    /**
     * Function to check if a time is disabled
     */
    isTimeDisabled?: (hour: number, minute: number) => boolean;
}
export interface TimePickerEmits {
    (e: 'update:model-value', value: string): void;
}
export interface TimeSelectorEmits {
    (e: 'select-time', hour: number, minute: number, period: 'AM' | 'PM'): void;
    (e: 'update:hour', hour: number): void;
    (e: 'update:minute', minute: number): void;
    (e: 'update:period', period: 'AM' | 'PM'): void;
}
