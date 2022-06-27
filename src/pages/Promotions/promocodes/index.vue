<template>
  <PromocodeTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import PromocodeTemplate from 'templates/PromocodeTemplate/index.vue'
export default Vue.extend({
  name: 'Promocodes',
  components: {
    PromocodeTemplate,
  },
  async asyncData({ store }) {
    await store.dispatch('promocode/fetchPromocode')
  },
  head() {
    return {
      title: 'Промо-коды',
    }
  },
})
</script>
