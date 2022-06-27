<template>
  <ManagementTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import ManagementTemplate from 'templates/Management/index.vue'
export default Vue.extend({
  name: 'Management',
  components: {
    ManagementTemplate,
  },
  head() {
    return {
      title: 'Руководство',
    }
  },
})
</script>
