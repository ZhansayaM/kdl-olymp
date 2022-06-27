<template>
  <HouseCallTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import HouseCallTemplate from 'templates/HouseCall/index.vue'

/**
 * PAGES/HouseCall
 * @displayName HouseCall
 */
export default Vue.extend({
  name: 'HouseCall',
  components: {
    HouseCallTemplate,
  },
  head: {
    title: 'Выезд на дом',
  },
})
</script>
