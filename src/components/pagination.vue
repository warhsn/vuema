<template>
<nav class="pagination" :class="sizes" role="navigation" aria-label="pagination">
  <router-link v-if="pager.prev_page_url" :to="pager.prev_page_url" class="pagination-previous">Previous</router-link>
  <router-link v-if="pager.next_page_url"  :to="pager.next_page_url" class="pagination-next">Next page</router-link>
</nav>
</template>
<script lang="ts" setup>
import { _Pagination } from '@/interfaces/pagination'
import useSizes from '../utils/sizes'

const props = defineProps<_Pagination>()
const sizes = useSizes(props)
</script>