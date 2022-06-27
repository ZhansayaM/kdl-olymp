<template>
  <SalesTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import SalesTemplate from 'templates/SalesTemplate/index.vue'
export default Vue.extend({
  name: 'Sales',
  components: {
    SalesTemplate,
  },
  async asyncData({ store }) {
    await store.dispatch('sales/fetchSales')
  },
  head() {
    return {
      title: 'Список акций',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Список акций',
        },
      ],
    }
  },
})
</script>
