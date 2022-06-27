<template>
  <div class="promo-price">
    <div class="promo-price-wrapper">
      <section class="promo-price-top">
        <RFText variant="small" class="promo-price-top__title" v-bind="$attrs">
          {{ title }}
          <span>{{ publishPrice(price) }}т</span>
        </RFText>
      </section>
      <div class="promo-price-list">
        <ul v-if="fullDiscount">
          <li
            v-for="item in fullDiscount"
            :key="item.id"
            class="promo-price-list__item"
          >
            - {{ item.value }}% {{ item.text }}
          </li>
          <li class="promo-price-list__item">
            (* максимальная скидка
            {{
              discounts.length > 2
                ? ` -${item.discount}%`
                : `-${takeMaxDiscount}%`
            }})
          </li>
        </ul>
      </div>
      <section class="promo-price-results">
        <RFHeading tag="h6">Итого: </RFHeading>
        <RFText tag="default" class="promo-price-results__right">
          {{ endPrice(price, takeMaxDiscount) }} т
        </RFText>
      </section>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import RFText from 'atoms/RFText/index.vue'

export default Vue.extend({
  name: 'PromoPriceCard',
  components: {
    RFHeading,
    RFText,
  },
  props: {
    title: {
      type: String,
      default: 'Изначальная цена:',
    },
    price: {
      type: Number,
      default: 0,
    },
    discounts: {
      type: Object,
      default: () => ({
        id: 1,
        value: 10,
        text: 'промо-код',
      }),
    },
    // ! Заменяет дисконтную карту на 10%
    isDiscount: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      fullDiscount: [],
    }
  },
  computed: {
    // * Получаем общую скидку
    takeMaxDiscount() {
      return this.fullDiscount.reduce(
        (accumulator, currentValue) => accumulator + currentValue.value,
        0
      )
    },
    // * Получаем цену в формате 'х ххх ...' as string
    publishPrice() {
      return (el) => this.$services.common.price.priceFormat(el)
    },
    // * Получаем итоговую цену за минусом скидки с форматированием 'х ххх ...' as number
    endPrice() {
      return (price, discount) =>
        this.$services.common.discountPrice.priceWithDiscount(price, discount)
    },
  },
  mounted() {
    // ! Добавляем дисконтную карту в промокоды
    this.addDiscount()
    // ! Сохраняем значение цены в стор
    this.$store.commit('patient/endPrice', {
      endPrice: this.endPrice(this.price, this.takeMaxDiscount),
    })
  },
  methods: {
    addDiscount() {
      if (this.isDiscount) {
        this.fullDiscount.push(this.discounts, {
          text: 'дисконтная карта',
          value: 10,
        })
      } else {
        this.fullDiscount.push(this.discounts)
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.promo-price {
  width: 100%;
  height: 100%;

  &-wrapper {
    max-width: 420px;
    width: 100%;
    height: max-content;
    border-radius: 10px;
    background: $c-light-gray;
    padding: 25px 30px;

    @include phone {
      padding: 25px 16px 25px 10px;
    }
  }

  &-top {
    &__title {
      justify-content: space-between;
      align-items: center;
      font-weight: 700;
      @include flex-row();

      > span {
        display: block;
      }

      @include phone {
        padding-bottom: 8px;
        @include font-size(16px, 22px);
      }
    }
  }

  &-list {
    padding-top: 10px;
    &__item {
      list-style-type: none;
      @include font-size(16px, 27px);

      @include phone {
        @include font-size(14px, 20px);
      }
    }

    &__item + &__item {
      padding-top: 4px;
    }
  }
  &-results {
    justify-content: space-between;
    align-items: center;
    padding-top: 38px;
    @include flex-row();

    @include phone {
      padding: 50px 2px 0 6px;
    }

    > h6 {
      font-weight: 600;

      @include phone {
        @include font-size(18px, 22px, 600);
      }
    }
    &__right {
      font-weight: 600;

      @include phone {
        @include font-size(20px, 26px, 600);
      }
    }
  }
}
</style>
