interface DateFormatOptions {
    format?: string;
    locale?: string;
}

export default function(isoString: string, options: DateFormatOptions = {}): string {
    const date = new Date(isoString);
    const locale = options.locale || 'en-US';

    const defaultFormat = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    } as const;

    if (options.format) {
        const tokens: Record<string, string> = {
            'YYYY': date.getFullYear().toString(),
            'MM': (date.getMonth() + 1).toString().padStart(2, '0'),
            'MMM': date.toLocaleString(locale, { month: 'short' }),
            'MMMM': date.toLocaleString(locale, { month: 'long' }),
            'DD': date.getDate().toString().padStart(2, '0'),
            'HH': date.getHours().toString().padStart(2, '0'),
            'hh': (date.getHours() % 12 || 12).toString().padStart(2, '0'),
            'mm': date.getMinutes().toString().padStart(2, '0'),
            'ss': date.getSeconds().toString().padStart(2, '0'),
            'A': date.getHours() >= 12 ? 'PM' : 'AM'
        };

        return options.format.replace(/YYYY|MM(MM)?|DD|HH|hh|mm|ss|A/g, match => tokens[match]);
    }

    return new Intl.DateTimeFormat(locale, defaultFormat).format(date);
};