<template>
  <AboutTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import AboutTemplate from 'templates/About/index.vue'

export default Vue.extend({
  name: 'AboutSocialResponsibility',
  components: {
    AboutTemplate,
  },
  async asyncData({ store }) {
    await store.dispatch('responsibility/fetchResponsibility')
  },
  head: {
    title: 'Социальная ответственность',
  },
})
</script>
