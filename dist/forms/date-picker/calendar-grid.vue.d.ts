import { CalendarDay } from './types';
declare const _default: import('vue').DefineComponent<{
    calendarDays: CalendarDay[];
    today: string;
    selectedDate: string | null;
    dateFormat: string;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "select-date": (date: string) => any;
}, string, import('vue').PublicProps, Readonly<{
    calendarDays: CalendarDay[];
    today: string;
    selectedDate: string | null;
    dateFormat: string;
}> & Readonly<{
    "onSelect-date"?: ((date: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
