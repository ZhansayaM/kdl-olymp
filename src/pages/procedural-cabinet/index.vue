<template>
  <div>
    <Main />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Main from 'templates/ProceduralRoom/index.vue'

/**
 * PAGES/ProceduralCabinet
 * @displayName ProceduralCabinet
 */
export default Vue.extend({
  name: 'ProceduralCabinet',
  components: {
    Main,
  },
  head: {
    title: 'Процедурный кабинет',
  },
})
</script>
