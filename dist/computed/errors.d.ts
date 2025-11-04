interface ErrorProps {
    error?: string | [string | any[]];
    errors?: string[];
}
export declare const _hasErrors: (props: ErrorProps) => import('vue').ComputedRef<boolean>;
export declare const _error: (props: ErrorProps) => import('vue').ComputedRef<string | [string | any[]] | undefined>;
declare const _default: {
    _hasErrors: (props: ErrorProps) => import('vue').ComputedRef<boolean>;
    _error: (props: ErrorProps) => import('vue').ComputedRef<string | [string | any[]] | undefined>;
};
export default _default;
