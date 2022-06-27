<template>
  <div class="discount_system">
    <ButtonBack class="discount_system__back" />
    <DiscountSystemTemplate />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DiscountSystemTemplate from 'templates/Discount/DiscountSystem.vue'
import ButtonBack from 'atoms/Button/ButtonBack/index.vue'

export default Vue.extend({
  name: 'DiscountSystem',
  components: {
    DiscountSystemTemplate,
    ButtonBack,
  },
  async asyncData({ store }) {
    await store.dispatch('discount/fetchDiscountSystem')
  },
  head: {
    title: 'Дисконтная система',
  },
})
</script>

<style lang="scss" scoped>
.discount_system {
  margin: 0 auto;
  max-width: 1440px;
  padding: 50px 50px 153px;
  @include small-laptop {
    padding: 30px 30px 80px;
  }
  @include phone {
    padding: 20px 16px 56px;
  }
  &__back {
    margin-bottom: 46px;
    @include phone {
      margin-bottom: 22px;
    }
  }
}
</style>
