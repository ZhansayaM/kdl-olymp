<template>
  <div class="back-link">
    <img
      src="~@/assets/icons/arrow-left.svg"
      alt="back-arrow"
      class="back-link__icon"
    />
    <button class="back-link__btn" @click="onBack">Назад</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

/* Кнопка назад */

export default Vue.extend({
  name: 'BackLink',
  methods: {
    onBack() {
      this.$router.go(-1)
    },
  },
})
</script>

<style lang="scss" scoped>
.back-link {
  align-items: center;
  cursor: pointer;
  @include flex-row();
  &__icon {
    margin-right: 7px;
    @include block(4px, 10px);
  }

  &__btn {
    border: none;
    cursor: pointer;
    border-bottom: 1px solid transparent;
    padding: 0;
    background: transparent;
    color: $c-primary;
    outline: none;
    @include font-size(14px, 20px);
    &:hover {
      border-bottom: 1px solid $c-primary;
    }
  }
}
</style>
