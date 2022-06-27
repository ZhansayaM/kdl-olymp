<template>
  <ResultsReadyTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import ResultsReadyTemplate from 'templates/ResultsReadyTemplate/index.vue'
export default Vue.extend({
  name: 'ResultsReady',
  components: {
    ResultsReadyTemplate,
  },
  head() {
    return {
      title: 'Результаты анализов',
    }
  },
})
</script>
