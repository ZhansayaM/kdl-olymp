<template>
  <div class="contact_items">
    <ContactItem
      v-for="(contact, index) in contacts"
      :key="index"
      :title="contact.title"
      :icon="contact.icon"
      :contacts="contact.contacts"
      class="contact_item"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import ContactItem from 'atoms/ContactItem/index.vue'

export default Vue.extend({
  name: 'ContactsWrap',
  components: { ContactItem },
  props: {
    contacts: {
      type: Array,
      default: () => [],
    },
  },
})
</script>

<style lang="scss" scoped>
.contact_items {
  display: flex;
  gap: 60px;

  @include phone {
    flex-direction: column;
  }
}
</style>
