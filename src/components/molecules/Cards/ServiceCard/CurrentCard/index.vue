<template>
  <div class="cards" :style="{ background: color }" :class="{ sales: sales }">
    <div class="cards__info">
      <RFText variant="mid" class="cards__info__title">{{ title }}</RFText>
      <RFText variant="medium" class="cards__info__old-price"
        >{{ oldPriceNormalized }} ₸</RFText
      >
      <p class="cards__info__price">{{ priceNormalized }} ₸</p>
      <RFText variant="small" class="cards__info__date">{{ date }}</RFText>
    </div>
    <img :src="img" alt="img" class="cards__img" />
  </div>
</template>

<script>
import RFText from 'atoms/RFText/index.vue'

export default {
  name: 'Card',
  components: {
    RFText,
  },
  props: {
    title: {
      type: String,
      default: 'Хеликобактер пилори',
    },
    oldPrice: {
      type: String,
      default: '8000',
    },
    img: {
      type: String,
      default: 'helicobacter.png',
    },
    price: {
      type: String,
      default: '5600',
    },
    date: {
      type: String,
      default: '1.07 - 31.07',
    },
    color: {
      type: String,
      default: '#4990ed',
    },
    sales: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    oldPriceNormalized() {
      return this.$services.common.price.priceFormat(this.oldPrice)
    },
    priceNormalized() {
      return this.$services.common.price.priceFormat(this.price)
    },
  },
}
</script>

<style lang="scss" scoped>
.cards {
  width: 25rem;
  height: 217px;
  background: $c-blue-dark;
  padding: 15px 25px;
  border-radius: 10px;
  position: relative;
  @include phone {
    width: 197px;
    height: 314px;
    padding: 16px;
  }
  &__info {
    z-index: 10;
    position: relative;
    @include phone {
      @include flex-column();
    }
    &__title {
      color: $c-white;
      z-index: 10;
      white-space: break-spaces;
      -webkit-line-clamp: 2;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      font-weight: 400;
      height: 64px;
      margin-bottom: 10px;
      @include phone {
        margin: 14px 0;
        order: 2;
        height: 44px;
      }
    }
    &__old-price {
      color: $c-white;
      text-decoration-line: line-through;
      @include phone {
        order: 3;
      }
    }
    &__date {
      color: $c-white;
      @include phone {
        order: 1;
      }
      @include small-phone {
        @include font-size(14px, 20px);
      }
    }
    &__price {
      margin-bottom: 14px;
      color: $c-white;
      @include font-size(40px, 48px, 700);
      @include medium-tablet {
        @include font-size(34px, 40px, 700);
      }
      @include phone {
        margin: 0;
        order: 4;
        @include font-size(24px, 29px, 700);
      }
    }
  }

  img {
    position: absolute;
    top: 4rem;
    width: 14rem;
    border-radius: 10px;
    right: 1rem;
    @include small-laptop {
      right: 0;
    }
    @include tablet {
      top: 6rem;
      width: 11rem;
    }
    @include phone {
      top: auto;
      width: 23rem;
      bottom: 0;
    }
  }
}

.cards.sales {
  width: 18rem;
  padding: 15px;
  border-radius: 10px 0 0 10px;
  @include small-laptop {
    width: 14em;
  }
  @include medium-tablet {
    width: 50%;
  }
  @include phone {
    border-radius: 10px 10px 0 0;
    width: 100%;
  }
  h4.rf-heading {
    @include font-size(20px, 28px);
    @include phone {
      @include font-size(16px, 22px);
    }
  }
  .cards__info {
    &__title {
      font-weight: 500;
      margin-bottom: 36px;
      height: auto;
    }
    &__old-price {
      @include font-size(16px, 24px);
    }
    &__price {
      margin-bottom: 6px;
      @include font-size(32px, 48px, 700);
      @include phone {
        @include font-size(24px, 28px, 700);
      }
    }
    &__time {
      @include font-size(16px, 24px);
      @include phone {
        @include font-size(14px, 20px);
      }
    }
  }
  .cards__img {
    width: 16em;
    left: 32px;
    top: 38px;
    @include small-laptop {
      left: -2rem;
    }
    @include medium-tablet {
      left: 6rem;
    }
    @include tablet {
      left: -0.2rem;
    }
    @include phone {
      left: 7rem;
      width: 20rem;
    }
    @include small-phone {
      left: 1rem;
    }
  }
}
</style>
