<template>
  <ResultsTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import ResultsTemplate from 'templates/ResultsTemplate/index.vue'
export default Vue.extend({
  name: 'Results',
  components: {
    ResultsTemplate,
  },
  head() {
    return {
      title: 'Результаты анализов',
    }
  },
})
</script>
