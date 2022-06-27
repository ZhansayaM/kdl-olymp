<template>
  <Card class="discount-used__card" card-mode="light">
    <RFText variant="xs">Ваша дисконтная карта:</RFText>
    <RFText variant="medium">{{ discountCard.number }}</RFText>
    <div class="discount-used__card__row">
      <p>{{ discountCard.discount }}%</p>
      <img
        :src="require('@/assets/images/discount.png')"
        alt="discount card front image"
        class="card_front"
      />
    </div>
  </Card>
</template>

<script>
import Vue from 'vue'
import RFText from 'atoms/RFText/index.vue'
import Card from 'atoms/Card/index.vue'

/**
 * 'MOLECULES/UsedDiscountCard'
 * @displayName UsedDiscountCard
 */
export default Vue.extend({
  name: 'UsedDiscountCard',
  components: {
    Card,
    RFText,
  },
  props: {
    discountCard: {
      type: Object,
      default: () => {},
    },
  },
})
</script>

<style lang="scss" scoped>
.discount-used__card {
  ::v-deep .content {
    width: 100%;
    margin: 0;
    padding: 24px 30px;
    p:nth-child(2) {
      font-weight: 600;
    }
  }

  &__row {
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 50px;
    @include flex-row();
    p {
      @include font-size(50px, 61px, 700);
    }
    img {
      position: absolute;
      width: 169px;
      height: fit-content;
      object-fit: contain;
      bottom: 14px;
      right: 16px;
      top: auto;
      padding: 0;
      border: 1px solid $c-primary-bgcolor;
    }
  }
}
</style>
