<template>
  <div class="contact_item">
    <span :class="[icon, 'title']">{{ title }}</span>
    <a
      :href="
        icon === 'phone'
          ? `tel:${phoneNormalized(contact.number)}`
          : 'https://t.me/kdlolymp_chat'
      "
      v-for="(contact, idx) in contacts"
      :key="`${icon}-${idx}`"
      class="number"
    >
      <span>{{ contact.number }}</span>
      <span>{{ contact.comment }}</span>
    </a>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'ContactItem',
  props: {
    title: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    contacts: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    phoneNormalized(el) {
      return this.$services.common.phone.phoneNumber(el)
    },
  },
})
</script>

<style lang="scss" scoped>
.contact_item {
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  outline: none;
  text-decoration: none;
  opacity: 1;
  @include flex-column();
  .title {
    color: $c-gray;
    margin-bottom: 5px;
    @include font-size(18px, 28px);
  }
  .telegram {
    &::before {
      content: '';
      display: inline-block;
      background: no-repeat url('@/assets/icons/telegram.svg');
      width: 20px;
      height: 16px;
      margin-bottom: -1px;
      margin-right: 5px;
    }
  }
  .phone {
    &::before {
      content: '';
      display: inline-block;
      background: no-repeat url('@/assets/icons/phone-blue.svg');
      width: 20px;
      height: 20px;
      margin-bottom: -4px;
      margin-right: 5px;
    }
  }
  .number {
    margin-bottom: 30px;
    color: $c-dark-blue;
    text-decoration: none;
    span {
      display: block;
      margin-bottom: 7px;

      &:first-of-type {
        @include font-size(24px, 32px);
      }
      &:last-of-type {
        @include font-size(14px, 20px);
      }
    }
  }
}
</style>
