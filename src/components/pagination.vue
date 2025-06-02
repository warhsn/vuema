<template>
<nav class="pagination" :class="sizes" role="navigation" aria-label="pagination">
  <router-link v-if="pager.prev_page_url" :to="pager.prev_page_url" class="pagination-previous">{{ previousText }}</router-link>
  <router-link v-if="pager.next_page_url"  :to="pager.next_page_url" class="pagination-next">{{ nextText }}</router-link>
</nav>
</template>
<script lang="ts" setup>
import { _Pagination } from '@/interfaces/pagination'
import useSizes from '../utils/sizes'

const props = withDefaults(
  defineProps<_Pagination>(), {
    nextText: 'Next',
    previousText: 'Previous'
  }
)
const sizes = useSizes(props)
</script>