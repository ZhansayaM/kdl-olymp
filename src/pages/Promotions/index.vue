<template>
  <div>
    <PromotionsTemplate />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PromotionsTemplate from 'templates/Promotions/index.vue'

/**
 * PAGES/Promotions
 * @displayName Promotions
 */
export default Vue.extend({
  name: 'Promotions',
  components: {
    PromotionsTemplate,
  },
  async asyncData({ store }) {
    await store.dispatch('promocode/fetchPromocode')
    await store.dispatch('sales/fetchSales')
  },
  head: {
    title: 'Акции',
  },
})
</script>
