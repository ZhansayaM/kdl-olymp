<template>
  <SaleItemTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import SaleItemTemplate from 'organisms/SaleItemTemplate/index.vue'
export default Vue.extend({
  name: 'Sale',
  components: {
    SaleItemTemplate,
  },
  head() {
    return {
      title: 'Акция',
    }
  },
})
</script>
