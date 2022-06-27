<template>
  <div>
    <Main />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Main from 'templates/Analyzes/index.vue'

/**
 * PAGES/Main
 * @displayName Analyzes
 */
export default Vue.extend({
  name: 'AnalyzesPage',
  components: {
    Main,
  },
  head: {
    title: 'Анализы и цены',
  },
})
</script>
