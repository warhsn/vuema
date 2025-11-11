import { TimeSelectorProps } from './types';
declare const _default: import('vue').DefineComponent<TimeSelectorProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "select-time": (hour: number, minute: number, period: "AM" | "PM") => any;
    "update:hour": (hour: number) => any;
    "update:minute": (minute: number) => any;
    "update:period": (period: "AM" | "PM") => any;
}, string, import('vue').PublicProps, Readonly<TimeSelectorProps> & Readonly<{
    "onSelect-time"?: ((hour: number, minute: number, period: "AM" | "PM") => any) | undefined;
    "onUpdate:hour"?: ((hour: number) => any) | undefined;
    "onUpdate:minute"?: ((minute: number) => any) | undefined;
    "onUpdate:period"?: ((period: "AM" | "PM") => any) | undefined;
}>, {
    format: "12" | "24";
    minTime: string | null;
    maxTime: string | null;
    minuteStep: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
