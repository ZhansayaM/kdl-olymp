<template>
  <AboutTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import AboutTemplate from 'templates/About/index.vue'

export default Vue.extend({
  name: 'AboutLicences',
  components: {
    AboutTemplate,
  },
  async asyncData({ store }) {
    await store.dispatch('licence/fetchLicence')
  },
  head: {
    title: 'Лицензии и сертификаты',
  },
})
</script>
