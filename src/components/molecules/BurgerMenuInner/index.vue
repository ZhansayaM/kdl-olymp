<template>
  <div class="main">
    <div class="main-contact">
      <div class="main-contact__left">
        <a :href="`tel:${phoneNormalized(contactData[0].attributes.phone)}`">{{
          phoneFormat(phoneNormalized(contactData[0].attributes.phone))
        }}</a>
        <span>Для звонков</span>
      </div>
      <div class="main-contact__right">
        <a href="https://t.me/kdlolymp_chat">{{
          contactData[0].attributes.phone_telegram
        }}</a>
        <span>Telegram</span>
      </div>
    </div>
    <BurgerMenuInnerLang />
    <div class="main-personalAcc">
      <span>Личный кабинет</span>
      <div class="main-personalAcc__btn">
        <button>Владелец дисконтной карты</button>
        <div class="main-personalAcc__btn-inner">
          <button>Врач</button>
          <button>Партнер</button>
          <button>Cотрудник</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BurgerMenuInnerLang from '../BurgerMenuLang/index.vue'
export default Vue.extend({
  name: 'BurgerMenuInner',
  components: { BurgerMenuInnerLang },
  data() {
    return {
      language: 'RU',
    }
  },
  computed: {
    contactData() {
      return this.$store.getters['contact/getContact']
    },
  },
  methods: {
    phoneNormalized(el) {
      return this.$services.common.phone.phoneNumber(el)
    },
    phoneFormat(el) {
      return this.$services.common.phone.phoneNumberFormat(el)
    },
  },
})
</script>

<style lang="scss" scoped>
.main {
  display: none;
  @include phone {
    display: inline-block;
  }
  &-contact {
    justify-content: space-between;
    border-bottom: 1px solid $c-additional-gray;
    @include flex-row();

    a {
      text-decoration: none;
      color: $c-dark;
      @include font-size(16px, 19px, 600);
    }
    span {
      color: $c-disabled-input-text;
      margin-top: 5px;
      padding-bottom: 20px;
      @include font-size(12px, 15px);
    }
    > div {
      @include flex-column();
    }
    &__right {
      float: right;
      text-align: right;
    }
  }
  &-lang {
    margin-top: 20px;
    border-bottom: 1px solid $c-additional-gray;
    padding-bottom: 20px;
    span {
      color: $c-disabled-input-text;
      margin-right: 2px;
      @include font-size(14px, 17px, 700);
    }
    &__btn {
      width: 52px;
      height: 37px;
      color: $c-primary;
      background: $c-white;
      border: 1px solid $c-primary;
      box-sizing: border-box;
      border-radius: 5px;
      margin-left: 13px;
      @include font-size(14px, 17px);
      &:hover {
        background: $c-primary;
        color: $c-white;
      }
      &.active {
        color: $c-white;
        background: $c-primary;
      }
    }
  }
  &-personalAcc {
    margin-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid $c-additional-gray;
    span {
      color: $c-disabled-input-text;
      @include font-size(14px, 17px, 700);
    }
    &__btn {
      margin-top: 10px;
      &-inner {
        margin-top: 10px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 10px;
      }
      > button {
        width: 100%;
      }
      button {
        color: $c-primary;
        background: $c-white;
        border: 1px solid $c-primary;
        box-sizing: border-box;
        border-radius: 5px;
        height: 38px;
        @include font-size(14px, 17px);
        &:hover {
          background: $c-primary;
          color: $c-white;
        }
        &.active {
          color: $c-white;
          background: $c-primary;
        }
      }
    }
  }
}
</style>
