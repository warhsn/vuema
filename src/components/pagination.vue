<template>
<nav class="pagination" role="navigation" aria-label="pagination">
  <router-link v-if="pager.prev_page_url" :to="pager.prev_page_url" class="pagination-previous">Previous</router-link>
  <router-link v-if="pager.next_page_url"  :to="pager.next_page_url" class="pagination-next">Next page</router-link>
  <!-- <ul class="pagination-list">
    <li>
      <a href="#" class="pagination-link" aria-label="Goto page 1">1</a>
    </li>
    <li>
      <span class="pagination-ellipsis">&hellip;</span>
    </li>
    <li>
      <a href="#" class="pagination-link" aria-label="Goto page 45">45</a>
    </li>
    <li>
      <a
        class="pagination-link is-current"
        aria-label="Page 46"
        aria-current="page"
        >46</a
      >
    </li>
    <li>
      <a href="#" class="pagination-link" aria-label="Goto page 47">47</a>
    </li>
    <li>
      <span class="pagination-ellipsis">&hellip;</span>
    </li>
    <li>
      <a href="#" class="pagination-link" aria-label="Goto page 86">86</a>
    </li>
  </ul> -->
</nav>
</template>
<script lang="ts" setup>
import { _Pagination } from '@/interfaces/pagination';

defineProps<_Pagination>()

</script>