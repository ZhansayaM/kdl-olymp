<template>
  <Card class="bill__card" card-mode="light">
    <div>
      <p class="heading">Ваш заказ:</p>
      <div class="bill__card__row">
        <span>Услуги</span>
        <span>{{ priceNormalized(totalSum) }} ₸</span>
      </div>
      <div v-if="houseCall" class="bill__card__row">
        <span>Выезд на дом</span>
        <span>{{ priceNormalized(houseCallSum) }} ₸</span>
      </div>
      <div v-if="totalDiscount" class="bill__card__row">
        <span>Скидка</span>
        <span>-{{ priceNormalized(totalDiscount) }} ₸</span>
      </div>
      <div v-if="sale" class="bill__card__row discount">
        <span>Акция</span>
        <span>-{{ priceNormalized(sale) }} ₸</span>
      </div>
      <div v-if="discountCard" class="bill__card__row discount">
        <span>- {{ discountCard }}% дисконтная карта</span>
        <span>-{{ priceNormalized(discountCardSum) }} ₸</span>
      </div>
    </div>
    <div class="footer">
      <span>Итого:</span>
      <span>{{ priceNormalized(total) }} ₸</span>
    </div>
  </Card>
</template>

<script>
import Vue from 'vue'
import Card from 'atoms/Card/index.vue'

export default Vue.extend({
  name: 'BasketBillCard',
  components: { Card },
  computed: {
    // * Получаем цену в формате 'х ххх ...' as string
    priceNormalized() {
      return (el) => this.$services.common.price.priceFormat(el)
    },
    basketItems() {
      return this.$store.state.basket.products
    },
    houseCall() {
      return this.$store.state.order.AnalysisDonePlace === 'offsite'
    },
    discountCard() {
      return +this.$store.state.order.discountCard.discount
    },
    totalSum() {
      return this.basketItems.reduce(
        (previousVal, item) =>
          +previousVal + (item.old_price ? item.old_price : item.price),
        0
      )
    },
    houseCallSum() {
      return 2000
    },
    sale() {
      return this.basketItems.reduce(
        (previousVal, item) =>
          +previousVal + (item.old_price ? item.old_price - item.price : 0),
        0
      )
    },
    discountCardSum() {
      return this.totalSum * (this.discountCard / 100)
    },
    totalDiscount() {
      return this.sale + this.discountCardSum
    },
    total() {
      return (
        this.totalSum +
        (this.houseCall ? this.houseCallSum : 0) -
        this.totalDiscount
      )
    },
  },
  watch: {
    total(val) {
      this.$store.commit('order/setPayable', val)
    },
  },
  mounted() {
    this.$store.commit('order/setPayable', this.total)
  },
})
</script>

<style lang="scss" scoped>
.bill__card {
  height: fit-content;
  @include flex-column();
  ::v-deep .content {
    background: $c-disabled-bg;
    width: 100%;
    margin: 0;
    > div:first-child {
      padding: 25px 30px 24px;
    }
    > div:last-child {
      border-top: 1px solid $c-white;
      padding: 21px 30px 25px;
    }
  }

  > * {
    display: block;
  }

  &__row {
    justify-content: space-between;
    margin-bottom: 6px;
    @include font-size(16px, 24px);
    @include flex-row();

    &.discount {
      color: $c-gray;
    }

    span {
      &:first-of-type {
        text-align: left;
      }
      &:last-of-type {
        text-align: right;
      }
    }
  }
  .heading {
    margin-bottom: 6px;
    @include font-size(16px, 24px, 700);
  }
  .footer {
    justify-content: space-between;
    @include flex-row();
    @include font-size(18px, 22px, 600);
    span:last-child {
      @include font-size(20px, 24px, 600);
    }
  }
}
</style>
