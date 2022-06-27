<template>
  <AboutTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import AboutTemplate from 'templates/About/index.vue'

export default Vue.extend({
  name: 'AboutCompany',
  components: {
    AboutTemplate,
  },
  async asyncData({ store }) {
    await store.dispatch('about/fetchAbout')
    await store.dispatch('pages/fetchAllPages')
  },
  head: {
    title: 'О компании',
  },
})
</script>
