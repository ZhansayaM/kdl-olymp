<template>
  <ResultsNotReadyTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import ResultsNotReadyTemplate from 'templates/ResultsNotReadyTemplate/index.vue'
export default Vue.extend({
  name: 'ResultsNotReady',
  components: {
    ResultsNotReadyTemplate,
  },
  head() {
    return {
      title: 'Результаты анализов',
    }
  },
})
</script>
