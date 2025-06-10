type NumericValue = string | number | { valueOf(): number } | undefined;

export default function asCurrency(amount: NumericValue, symbol: string = '$', locale: string = 'en-US'): string {
    if (amount === undefined || amount === null) {
        return `${symbol}0.00`;
    }

    let numericAmount: number;

    if (typeof amount === 'string') {
        numericAmount = parseFloat(amount);
    } else if (typeof amount === 'number') {
        numericAmount = amount;
    } else if (typeof amount === 'object' && amount.valueOf) {
        numericAmount = amount.valueOf();
    } else {
        return `${symbol}0.00`;
    }

    if (isNaN(numericAmount)) {
        return `${symbol}0.00`;
    }

    const formatted = numericAmount.toLocaleString(locale, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    return `${symbol}${formatted}`;
}