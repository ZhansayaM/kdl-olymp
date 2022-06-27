<template>
  <div>
    <Main />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Main from 'templates/Main/index.vue'

/**
 * PAGES/Main
 * @displayName MainPage
 */
export default Vue.extend({
  name: 'MainPages',
  components: {
    Main,
  },
  async asyncData({ store }) {
    await store.dispatch('sales/fetchSales')
    await store.dispatch('news/fetchAllNews')
    await store.dispatch('document/fetchDocument')
    await store.dispatch('pages/fetchAllPages')
  },
  head: {
    title: 'Main Page',
  },
})
</script>
