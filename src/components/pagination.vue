<template>
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
  </nav>
  </template>
  <script lang="ts" setup>
  import { _Pagination } from '@/interfaces/pagination'
  import useSizes from '../utils/sizes'
  import { getCurrentInstance } from 'vue'
  
  const instance = getCurrentInstance()
  const router = instance?.appContext.app.config.globalProperties.$router || null
  
  const props = withDefaults(
    defineProps<_Pagination>(), {
      nextText: 'Next',
      previousText: 'Previous',
      firstText: 'First',
      lastText: 'Last',
    }
  )
  const sizes = useSizes(props)
  
  const goToPage = (page?: string) => {
    if(page) {
      console.log(page)
      
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