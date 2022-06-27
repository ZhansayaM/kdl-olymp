<template>
  <div class="main-lang">
    <span>Язык</span>
    <button
      class="main-lang__btn"
      :class="{ active: language == 'QQ' }"
      @click="language = 'QQ'"
    >
      QQ
    </button>
    <button
      class="main-lang__btn"
      :class="{ active: language == 'RU' }"
      @click="language = 'RU'"
    >
      RU
    </button>
    <button
      class="main-lang__btn"
      :class="{ active: language == 'EN' }"
      @click="language = 'EN'"
    >
      EN
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'BurgerMenuInnerLang',
  data() {
    return {
      language: 'RU',
    }
  },
})
</script>

<style lang="scss" scoped>
.main {
  &-lang {
    margin-top: 20px;
    border-bottom: 1px solid #f6f8fc;
    padding-bottom: 20px;
    span {
      color: #7b8f99;
      margin-right: 2px;
      @include font-size(14px, 17px, 700);
    }
    &__btn {
      width: 52px;
      height: 37px;
      color: #31b0ed;
      background: #fff;
      border: 1px solid #31b0ed;
      box-sizing: border-box;
      border-radius: 5px;
      margin-left: 13px;
      @include font-size(14px, 17px);
      &:hover {
        background: #31b0ed;
        color: #fff;
      }
      &.active {
        color: #fff;
        background: #31b0ed;
      }
    }
  }
}
</style>
