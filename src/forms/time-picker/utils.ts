/**
 * Time utility functions for time picker
 */

export interface ParsedTime {
    hour: number
    minute: number
    period: 'AM' | 'PM'
}

/**
 * Parse a time string in various formats
 * Supports: HH:mm, hh:mm A, hh:mm AM/PM
 * @param timeString - The time string to parse
 * @returns Parsed time object or null if invalid
 */
export function parseTime(timeString: string | null | undefined): ParsedTime | null {
    if (!timeString || typeof timeString !== 'string') return null

    const trimmed = timeString.trim()
    if (!trimmed) return null

    // Match patterns: HH:mm, hh:mm A, hh:mm AM/PM
    const time24Pattern = /^(\d{1,2}):(\d{2})$/
    const time12Pattern = /^(\d{1,2}):(\d{2})\s*(AM|PM|am|pm|A|P)$/i

    let match = trimmed.match(time24Pattern)
    if (match) {
        const hour = parseInt(match[1], 10)
        const minute = parseInt(match[2], 10)

        if (hour < 0 || hour > 23 || minute < 0 || minute > 59) return null

        // Convert to 12-hour format for internal representation
        const period: 'AM' | 'PM' = hour >= 12 ? 'PM' : 'AM'

        return { hour, minute, period }
    }

    match = trimmed.match(time12Pattern)
    if (match) {
        let hour = parseInt(match[1], 10)
        const minute = parseInt(match[2], 10)
        let periodStr = match[3].toUpperCase()

        // Normalize period to full AM/PM
        if (periodStr === 'A') periodStr = 'AM'
        if (periodStr === 'P') periodStr = 'PM'
        const period = periodStr as 'AM' | 'PM'

        if (hour < 1 || hour > 12 || minute < 0 || minute > 59) return null

        // Convert 12-hour to 24-hour for internal storage
        if (period === 'AM') {
            hour = hour === 12 ? 0 : hour
        } else {
            hour = hour === 12 ? 12 : hour + 12
        }

        return { hour, minute, period: period === 'AM' || hour < 12 ? 'AM' : 'PM' }
    }

    return null
}

/**
 * Format time to 24-hour format (HH:mm)
 * @param hour - Hour (0-23)
 * @param minute - Minute (0-59)
 * @returns Formatted time string
 */
export function formatTime24(hour: number, minute: number): string {
    const h = hour.toString().padStart(2, '0')
    const m = minute.toString().padStart(2, '0')
    return `${h}:${m}`
}

/**
 * Format time to 12-hour format (hh:mm AM/PM)
 * @param hour - Hour (0-23)
 * @param minute - Minute (0-59)
 * @returns Formatted time string with AM/PM
 */
export function formatTime12(hour: number, minute: number): string {
    const period = hour >= 12 ? 'PM' : 'AM'
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
    const h = displayHour.toString().padStart(2, '0')
    const m = minute.toString().padStart(2, '0')
    return `${h}:${m} ${period}`
}

/**
 * Format time based on specified format
 * @param hour - Hour (0-23)
 * @param minute - Minute (0-59)
 * @param format - '12' or '24'
 * @returns Formatted time string
 */
export function formatTime(hour: number, minute: number, format: '12' | '24' = '24'): string {
    return format === '12' ? formatTime12(hour, minute) : formatTime24(hour, minute)
}

/**
 * Convert 12-hour format to 24-hour hour value
 * @param hour12 - Hour in 12-hour format (1-12)
 * @param period - AM or PM
 * @returns Hour in 24-hour format (0-23)
 */
export function to24Hour(hour12: number, period: 'AM' | 'PM'): number {
    if (period === 'AM') {
        return hour12 === 12 ? 0 : hour12
    } else {
        return hour12 === 12 ? 12 : hour12 + 12
    }
}

/**
 * Convert 24-hour hour value to 12-hour format
 * @param hour24 - Hour in 24-hour format (0-23)
 * @returns Object with hour in 12-hour format and period
 */
export function to12Hour(hour24: number): { hour: number; period: 'AM' | 'PM' } {
    const period: 'AM' | 'PM' = hour24 >= 12 ? 'PM' : 'AM'
    const hour = hour24 === 0 ? 12 : hour24 > 12 ? hour24 - 12 : hour24
    return { hour, period }
}

/**
 * Check if a time is within a range
 * @param hour - Hour to check (0-23)
 * @param minute - Minute to check (0-59)
 * @param minTime - Minimum time in HH:mm format
 * @param maxTime - Maximum time in HH:mm format
 * @returns True if time is within range
 */
export function isTimeInRange(
    hour: number,
    minute: number,
    minTime?: string | null,
    maxTime?: string | null
): boolean {
    const timeMinutes = hour * 60 + minute

    if (minTime) {
        const parsed = parseTime(minTime)
        if (parsed) {
            const minMinutes = parsed.hour * 60 + parsed.minute
            if (timeMinutes < minMinutes) return false
        }
    }

    if (maxTime) {
        const parsed = parseTime(maxTime)
        if (parsed) {
            const maxMinutes = parsed.hour * 60 + parsed.minute
            if (timeMinutes > maxMinutes) return false
        }
    }

    return true
}

/**
 * Generate an array of minute options based on step
 * @param step - Minute step (default: 1)
 * @returns Array of minute values
 */
export function generateMinuteOptions(step: number = 1): number[] {
    const options: number[] = []
    for (let i = 0; i < 60; i += step) {
        options.push(i)
    }
    return options
}

/**
 * Generate an array of hour options based on format
 * @param format - '12' or '24'
 * @returns Array of hour values
 */
export function generateHourOptions(format: '12' | '24' = '24'): number[] {
    if (format === '12') {
        return [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    } else {
        return Array.from({ length: 24 }, (_, i) => i)
    }
}

/**
 * Round minutes to nearest step
 * @param minute - Minute value (0-59)
 * @param step - Step value
 * @returns Rounded minute value
 */
export function roundToStep(minute: number, step: number): number {
    return Math.round(minute / step) * step
}
