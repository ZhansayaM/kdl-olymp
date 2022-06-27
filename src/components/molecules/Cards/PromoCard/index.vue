<template>
  <div class="card">
    <section v-for="item in items" :key="item.id" class="card-promo">
      <div class="card-promo__top">
        <p class="card-promo__top-data">{{ item.data }}</p>
        <template v-if="item.isPromo">
          <div class="card-promo__top-promo">Акция</div>
        </template>
        <template v-else>
          <div class="card-promo__top-promocod">Промокод</div>
        </template>
      </div>
      <div class="card-promo__bottom">
        <RFHeading tag="h4" class="card-promo__bottom-title">{{
          item.title
        }}</RFHeading>
      </div>
    </section>
  </div>
</template>

<script>
import RFHeading from 'atoms/RFHeading/index.vue'

/* Карточка акции и промо компании */

export default {
  name: 'PromoCard',
  components: {
    RFHeading,
  },
  props: {
    items: {
      type: Array,
      default: () => [{}],
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  &-promo {
    max-width: 300px;
    max-height: 150px;
    height: 100%;
    border-radius: 8px;
    border: 1px solid $c-basic-blue;
    padding: 20px 16px 16px 16px;
    &__top {
      justify-content: space-between;
      @include flex-row();

      &-data {
        color: $c-gray;
        @include font-size(14px, 20px);
      }

      &-promo,
      &-promocod {
        padding: 5px 14px;
        border-radius: 25px;
      }

      &-promo {
        background: $c-card-promo;
      }

      &-promocod {
        background: $c-card-promocod;
      }
    }
    &__bottom {
      padding-top: 20px;
      > h4 {
        color: $c-dark;
        @include font-size(16px, 20px);
      }
    }

    &:hover {
      cursor: pointer;
      h4 {
        color: $c-primary;
      }
    }
  }
}
</style>
