<template>
  <LoginTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import LoginTemplate from 'templates/Login/index.vue'

export default Vue.extend({
  name: 'Login',
  components: {
    LoginTemplate,
  },
  async asyncData({ store }) {
    await store.dispatch('terms/fetchTerms')
  },
  head() {
    return {
      title: 'Вход',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Вход/Регистрация',
        },
      ],
    }
  },
})
</script>
