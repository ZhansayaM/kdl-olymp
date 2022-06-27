<template>
  <CalculatorTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import CalculatorTemplate from 'templates/CalculatorTemplate/index.vue'

export default Vue.extend({
  name: 'CalculatorPage',
  components: {
    CalculatorTemplate,
  },
  head() {
    return {
      title: 'Калькулятор',
    }
  },
})
</script>
