<template>
  <SearchTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import SearchTemplate from 'templates/SearchTemplate/index.vue'
export default Vue.extend({
  name: 'SearchPage',
  components: {
    SearchTemplate,
  },
  head() {
    return {
      title: 'Поиск',
    }
  },
})
</script>
