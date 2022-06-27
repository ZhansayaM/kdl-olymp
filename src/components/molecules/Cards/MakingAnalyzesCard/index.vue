<template>
  <div class="cards">
    <div class="cards__top">
      <RFHeading class="cards__title" tag="h3">{{ title }}</RFHeading>
      <DiscountBadge variant="little" :value="discount" />
    </div>
    <p class="cards__price">
      <span class="cards__price-old">{{ oldPrice }}</span>
      {{ price }}
    </p>
    <p class="cards__price-data">Можно активировать до {{ data }}</p>
    <template v-if="!isDisabled">
      <div class="cards__bottom">
        <template v-if="isActive">
          <Button disabled class="cards__bottom-activate-disabled"
            >Активирован</Button
          >
        </template>
        <template v-else>
          <Button class="cards__bottom-activate">Активировать</Button>
        </template>

        <Button
          class="cards__bottom-look"
          variant="secondary"
          @click="openModal"
          >Посмотреть</Button
        >
      </div>
    </template>
  </div>
</template>

<script>
import Button from 'atoms/Button/index.vue'
import DiscountBadge from 'atoms/RFBadge/Discount/index.vue'
import RFHeading from 'atoms/RFHeading/index.vue'

export default {
  name: 'MakingAnalyzesCard',
  components: {
    Button,
    DiscountBadge,
    RFHeading,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    discount: {
      type: Number,
      default: null,
    },
    oldPrice: {
      type: Number,
      default: null,
    },
    price: {
      type: Number,
      default: 0,
    },
    data: {
      type: String,
      default: '',
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    modalData: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    openModal() {
      this.$store.dispatch('modals/showModalPromo', this.modalData)
    },
  },
}
</script>

<style lang="scss" scoped>
.cards {
  width: 290px;
  max-height: 300px;
  height: 100%;
  background: $c-light-blue;
  padding: 18px;
  color: $c-dark;

  &__top {
    > h3 {
      display: inline-block;
      max-width: 192px;
      margin-right: 10px;
      @include font-size(18px, 26px, 400);
    }

    min-height: 130px;
    height: max-content;
    @include flex-row();
  }

  &__price {
    @include flex-row();

    @include font-size(24px, 32px, 600);

    &-old {
      display: block;
      height: 100%;
      padding-right: 10px;
      color: $c-gray;
      text-decoration: line-through;
      @include font-size(20px, 28px, 400);
    }

    &-data {
      padding-top: 16px;
      color: $c-gray;
      @include font-size(14px, 20px);
    }
  }

  &__bottom {
    padding-top: 20px;
    @include flex-row();

    > button {
      max-width: 124px;
      max-height: 40px;
      border-radius: 4px;
      @include font-size(14px, 20px);
    }

    > button + button {
      margin-left: 10px;
    }

    &-activate {
      &-disabled {
        background: $c-white !important;
        color: $c-gray;
      }
    }

    &-look {
      background: $c-white;
    }
  }
}

.flex-row {
  @include flex-row();

  > .cards + .cards {
    margin-left: 30px;
  }
}
</style>
