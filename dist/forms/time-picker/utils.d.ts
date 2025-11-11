/**
 * Time utility functions for time picker
 */
export interface ParsedTime {
    hour: number;
    minute: number;
    period: 'AM' | 'PM';
}
/**
 * Parse a time string in various formats
 * Supports: HH:mm, hh:mm A, hh:mm AM/PM
 * @param timeString - The time string to parse
 * @returns Parsed time object or null if invalid
 */
export declare function parseTime(timeString: string | null | undefined): ParsedTime | null;
/**
 * Format time to 24-hour format (HH:mm)
 * @param hour - Hour (0-23)
 * @param minute - Minute (0-59)
 * @returns Formatted time string
 */
export declare function formatTime24(hour: number, minute: number): string;
/**
 * Format time to 12-hour format (hh:mm AM/PM)
 * @param hour - Hour (0-23)
 * @param minute - Minute (0-59)
 * @returns Formatted time string with AM/PM
 */
export declare function formatTime12(hour: number, minute: number): string;
/**
 * Format time based on specified format
 * @param hour - Hour (0-23)
 * @param minute - Minute (0-59)
 * @param format - '12' or '24'
 * @returns Formatted time string
 */
export declare function formatTime(hour: number, minute: number, format?: '12' | '24'): string;
/**
 * Convert 12-hour format to 24-hour hour value
 * @param hour12 - Hour in 12-hour format (1-12)
 * @param period - AM or PM
 * @returns Hour in 24-hour format (0-23)
 */
export declare function to24Hour(hour12: number, period: 'AM' | 'PM'): number;
/**
 * Convert 24-hour hour value to 12-hour format
 * @param hour24 - Hour in 24-hour format (0-23)
 * @returns Object with hour in 12-hour format and period
 */
export declare function to12Hour(hour24: number): {
    hour: number;
    period: 'AM' | 'PM';
};
/**
 * Check if a time is within a range
 * @param hour - Hour to check (0-23)
 * @param minute - Minute to check (0-59)
 * @param minTime - Minimum time in HH:mm format
 * @param maxTime - Maximum time in HH:mm format
 * @returns True if time is within range
 */
export declare function isTimeInRange(hour: number, minute: number, minTime?: string | null, maxTime?: string | null): boolean;
/**
 * Generate an array of minute options based on step
 * @param step - Minute step (default: 1)
 * @returns Array of minute values
 */
export declare function generateMinuteOptions(step?: number): number[];
/**
 * Generate an array of hour options based on format
 * @param format - '12' or '24'
 * @returns Array of hour values
 */
export declare function generateHourOptions(format?: '12' | '24'): number[];
/**
 * Round minutes to nearest step
 * @param minute - Minute value (0-59)
 * @param step - Step value
 * @returns Rounded minute value
 */
export declare function roundToStep(minute: number, step: number): number;
