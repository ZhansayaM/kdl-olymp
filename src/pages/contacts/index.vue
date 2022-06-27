<template>
  <ContactsTemplate />
</template>

<script>
import ContactsTemplate from 'templates/Contacts/index.vue'

export default {
  name: 'Contacts',
  components: {
    ContactsTemplate,
  },
  async asyncData({ store }) {
    await store.dispatch('contact/fetchContact')
  },
  head: {
    title: 'Контакты',
  },
}
</script>
