import { useToaster } from './components/toast/user-toaster';
import { Plugin } from 'vue';
import { default as useDebouncedRef } from './utils/debounced-ref';
declare const Vuema: Plugin;
export { Vuema as default, useToaster, useDebouncedRef };
