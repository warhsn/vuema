<template>
  <div class="is-flex is-flex-wrap-nowrap is-justify-content-flex-start is-align-items-center" v-if="pager.total > 0">
    <nav class="pagination" :class="sizes" role="navigation" aria-label="pagination">
    <a @click="goToFirst" class="pagination-previous" :class="{
      'is-disabled': !pager.first_page_url || pager.current_page === 1
    }">{{ firstText }}</a>
    <a :class="{
        'is-disabled': !pager.prev_page_url
      }" @click="goToPage(pager.prev_page_url)" class="pagination-previous">{{ previousText }}</a>
    <a :class="{
        'is-disabled': !pager.next_page_url
      }" @click="goToPage(pager.next_page_url)" class="pagination-next">{{ nextText }}</a>
    <a @click="goToLast" class="pagination-next" :class="{
      'is-disabled': !pager.last_page_url || pager.current_page === pager.last_page
    }">{{ lastText }}</a>
    <span v-if="showInfo" class="pagination-info ml-2" :class="sizes">{{ formattedInfoText }}</span>
    </nav>
  </div>
</template>
  <script lang="ts" setup>
  import { _Pagination } from '@/interfaces/pagination'
  import useSizes from '../utils/sizes'
  import { getCurrentInstance, computed } from 'vue'

  const instance = getCurrentInstance()
  const router = instance?.appContext.app.config.globalProperties.$router || null

  const props = withDefaults(
    defineProps<_Pagination>(), {
      nextText: 'Next',
      previousText: 'Previous',
      firstText: 'First',
      lastText: 'Last',
      showInfo: true,
      infoText: 'Total: {total}'
    }
  )
  const sizes = useSizes(props)

  const formattedInfoText = computed(() => {
    return props.infoText
      .replace('{from}', String(props.pager.from))
      .replace('{to}', String(props.pager.to))
      .replace('{total}', String(props.pager.total))
      .replace('{current_page}', String(props.pager.current_page))
      .replace('{last_page}', String(props.pager.last_page))
      .replace('{per_page}', String(props.pager.per_page))
  })
  
  const goToPage = (page?: string) => {
    if(page) {      
      if (router) {
        const url = new URL(page, window.location.origin)
        router.push({
          path: url.pathname,
          query: Object.fromEntries(url.searchParams)
        })
      } else {
        window.location.href = page
      }
    }
  }
  
  const goToFirst = () => {
    if (props.pager.current_page !== 1) {
      goToPage(props.pager.first_page_url)
    }
  }
  
  const goToLast = () => {
    if (props.pager.current_page !== props.pager.last_page) {
      goToPage(props.pager.last_page_url)
    }
  }
  </script>

  <style scoped>
  .pagination-info {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 2.5em;
    padding-left: 0.5em;
    padding-right: 0.5em;
    height: 2.5em;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    background-color: transparent;
    font-size: 1rem;
    white-space: nowrap;
  }

  .pagination-info.is-small {
    font-size: 0.75rem;
  }

  .pagination-info.is-medium {
    font-size: 1.25rem;
  }

  .pagination-info.is-large {
    font-size: 1.5rem;
  }
  </style>