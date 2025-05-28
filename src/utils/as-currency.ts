export default function asCurrency(amount: string|number, symbol: string = '$', locale: string = 'en-US'): string {
    const numericAmount = typeof amount === 'string' ? parseFloat(amount) : amount;

    if (isNaN(numericAmount)) {
        return `${symbol}0.00`;
    }

    const formatted = numericAmount.toLocaleString(locale, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    return `${symbol}${formatted}`;
}