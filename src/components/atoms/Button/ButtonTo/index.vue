<template>
  <div class="to-link">
    <router-link :to="link">
      <button class="to-link__btn">
        <slot></slot>
      </button>
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

/* Кнопка-ссылка */

export default Vue.extend({
  name: 'ButtonTo',
  props: {
    link: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
.to-link {
  cursor: pointer;
  display: inline-block;

  &__btn {
    padding: 0;
    background: transparent;
    color: $c-primary;
    cursor: pointer;
    border: none;
    border-bottom: 1px solid $c-primary;
    outline: none;
    @include font-size(16px, 20px);
  }
}
</style>
