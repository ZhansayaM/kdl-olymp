<template>
  <div class="acquire_discount_card">
    <ButtonBack class="acquire_discount_card__back" />
    <AcquireDiscountCardTemplate />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AcquireDiscountCardTemplate from 'templates/Discount/AcquireDiscountCard.vue'
import ButtonBack from 'atoms/Button/ButtonBack/index.vue'

export default Vue.extend({
  name: 'AcquireDiscountCardPage',
  components: {
    AcquireDiscountCardTemplate,
    ButtonBack,
  },
  data() {
    return {}
  },
  head: {
    title: 'Получить дисконтную карту',
  },
})
</script>

<style lang="scss" scoped>
.acquire_discount_card {
  margin: 0 auto;
  max-width: 1440px;
  padding: 50px 50px 100px;
  @include small-laptop {
    padding: 30px 30px 80px;
  }
  @include phone {
    padding: 20px 16px 60px;
  }
  &__back {
    margin-bottom: 40px;
    @include phone {
      margin-bottom: 26px;
    }
  }
}
</style>
