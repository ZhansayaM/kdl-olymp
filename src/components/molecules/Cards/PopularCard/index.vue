<template>
  <div class="cards">
    <p v-if="title" class="cards__title">{{ title }}</p>
    <div v-if="tags.length" class="cards__tags">
      <Tag v-for="tag in tags" :key="tag.id">{{ tag.name }}</Tag>
    </div>
    <div class="cards__bottom">
      <div>
        <p v-if="oldPrice" class="cards__bottom_price-old">
          {{ publishPrice(oldPrice) }} ₸
        </p>
        <p v-if="price" class="cards__bottom_price">
          {{ publishPrice(price) }} ₸
        </p>
      </div>
      <RFButton
        v-if="isButton"
        size="medium"
        :class="{ added: isAdded }"
        class="cards__bottom_btn"
        @click="$emit('clicked')"
        >{{ btnName }}</RFButton
      >
    </div>
  </div>
</template>

<script>
import Tag from 'atoms/Tag/index.vue'
import RFButton from 'atoms/RFButton/index.vue'

export default {
  name: 'PopularCard',
  components: {
    Tag,
    RFButton,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    oldPrice: {
      type: Number,
      default: 0,
    },
    price: {
      type: String,
      default: '',
    },
    // btnName: {
    //   type: String,
    //   default: 'В корзину',
    // },
    tags: {
      type: Array,
      default: () => [],
    },
    /**
     * Отображение кнопки
     */
    isButton: {
      type: Boolean,
      default: false,
    },
    isAdded: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    // * Получаем цену в формате 'х ххх ...' as string
    publishPrice() {
      return (el) => this.$services.common.price.priceFormat(el)
    },
    priceNormalized() {
      return this.$services.common.price.priceFormat(this.price)
    },
    btnName() {
      return this.isAdded === false ? 'В корзину' : 'Добавлено'
    },
  },
}
</script>

<style lang="scss" scoped>
.cards {
  position: relative;
  width: 420px;
  height: 340px;
  background: $c-additional-gray;
  border-radius: 10px;
  padding: 20px 20px 30px;
  cursor: pointer;
  @include laptop {
    width: 23rem;
  }
  @include small-laptop {
    width: 17.5rem;
  }
  @include tablet {
    width: 16rem;
  }
  @include phone {
    width: 248px;
    height: 371px;
    padding: 14px 16px;
  }
  &:hover {
    background: $c-light-blue;
  }
  &__title {
    color: $c-dark-blue;
    word-break: break-all;
    white-space: normal;
    margin-bottom: 16px;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    @include font-size(24px, 32px);
    @include small-laptop {
      @include font-size(22px, 24px);
    }
    @include phone {
      -webkit-line-clamp: 5;
      margin-bottom: 20px;
      height: 129px;
      @include font-size(18px, 26px);
    }
  }
  &__tags {
    flex-wrap: wrap;
    gap: 10px;
    @include flex-row();
  }
  &__bottom {
    position: absolute;
    bottom: 30px;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    @include flex-row();
    @include small-laptop {
      width: 84%;
    }
    @include phone {
      position: static;
      margin-top: 20px;
      gap: 20px;
      width: 100%;
    }
    @include small-phone {
      align-items: flex-start;
      flex-direction: column;
    }
    > div {
      gap: 10px;
      @include flex-row();
    }
    &_price {
      color: $c-dark-blue;
      padding-right: 30px;
      @include font-size(24px, 32px, 600);
      @include small-laptop {
        padding-right: 20px;
      }
      @include tablet {
        padding-right: 0;
        margin-right: 20px;
      }
    }
    &_price-old {
      display: none;
      @include phone {
        display: block;
        text-decoration-line: line-through;
        color: $c-dark;
        opacity: 0.5;
        @include font-size(20px, 32px);
      }
    }
    &_btn {
      color: $c-white;
      padding: 9px 30px;
      border-radius: 4px;
      @include small-laptop {
        padding: 10px 20px;
      }
      @include tablet {
        padding: 10px 11px;
      }
      @include phone {
        width: 100%;
        padding: 10px 20px;
        @include font-size(14px, 20px);
      }
    }
    &_btn.added {
      background: $c-white;
      color: $c-light-gray-text;
    }
  }
}
</style>
