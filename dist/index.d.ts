import { useToaster } from './components/toast/user-toaster';
import { Plugin } from 'vue';
import { default as useDebouncedRef } from './utils/debounced-ref';
import { default as formatDate } from './utils/format-date';
import { default as filterWatcher } from './utils/filter-watcher';
declare const Vuema: Plugin;
export { Vuema as default, useToaster, useDebouncedRef, formatDate, filterWatcher };
