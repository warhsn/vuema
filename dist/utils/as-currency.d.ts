type NumericValue = string | number | {
    valueOf(): number;
} | undefined;
export default function asCurrency(amount: NumericValue, symbol?: string, locale?: string): string;
export {};
