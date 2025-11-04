export declare function debounce<A = unknown, R = void>(fn: (args: A) => R, ms: number): [(args: A) => Promise<R>, () => void];
