<template>
  <ModalBase @close="closeModal">
    <section class="modal-promo__top">
      <RFHeading tag="h2">{{ getCardData.title }}</RFHeading>
      <DiscountBadge
        variant="big"
        :value="getCardData.discount.value"
        class="modal-promo__top__badge"
      />
    </section>
    <nuxt-link
      to="/patient/promo/slug"
      class="modal-promo__link"
      @click.native="closeModal"
      >Подробнее об анализе</nuxt-link
    >
    <!-- // TODO: Добавить пропс на дисконтную карту -->
    <div class="modal-promo__price">
      <PromoPriceCard
        :price="getCardData.oldPrice"
        :discounts="getCardData.discount"
        class="modal-promo__price-top"
      />
      <PromoCodeCard />
    </div>
    <div class="modal-promo-bottom">
      <Button class="modal-promo-bottom__btn" variant="primary"
        >Активировать промо-код</Button
      >
      <Button class="modal-promo-bottom__btn" variant="secondary"
        >Отправить на эл. адрес</Button
      >
    </div>
  </ModalBase>
</template>

<script lang="ts">
import Vue from 'vue'
import ModalBase from 'molecules/Modal/Base/index.vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import PromoPriceCard from 'molecules/Cards/Promo/Price/index.vue'
import PromoCodeCard from 'molecules/Cards/Promo/PromoCode/index.vue'
import DiscountBadge from 'atoms/RFBadge/Discount/index.vue'
import Button from 'atoms/Button/index.vue'

/**
 * Модальное окно промо
 * @displayName ModalPromo
 */
export default Vue.extend({
  name: 'ModalPromo',
  components: {
    ModalBase,
    Button,
    RFHeading,
    DiscountBadge,
    PromoPriceCard,
    PromoCodeCard,
  },
  computed: {
    getCardData() {
      return this.$store.state.modals.modal_promo.data
    },
  },
  methods: {
    closeModal(): void {
      this.$store.dispatch('modals/closeModals')
    },
  },
})
</script>

<style lang="scss" scoped>
.modal-promo {
  padding: 50px 42px;
  &__top {
    justify-content: space-between;
    padding-bottom: 34px;

    @include phone {
      padding-bottom: 18px;
    }
    @include flex-row();
    > h2 {
      max-width: 570px;
      font-weight: 400 !important;

      @include phone {
        max-width: 182px;
        @include font-size(22px, 26px);
      }
    }
  }

  &__link {
    align-self: flex-start;
    color: $c-primary;
    padding-bottom: 45px;
    @include font-size(16px, 20px);

    @include phone {
      padding-bottom: 28px;
    }
  }

  &__price {
    padding-bottom: 64px;

    @include phone {
      padding-bottom: 28px;
    }

    &-top {
      padding-bottom: 8px;
    }
  }

  &-bottom {
    padding-bottom: 40px;

    @include phone {
      padding-bottom: 0;
    }
    &__btn {
      max-width: 310px;
      width: 100%;
      height: 55px;
      @include font-size(20px, 24px);

      @include phone {
        @include font-size(16px, 22px);
      }

      &:last-child {
        margin-left: 10px;

        @include tablet {
          margin: 10px 0 0 0;
        }
      }
    }
  }
}

// Стили для badge
::v-deep .discount-badge--big {
  @include phone {
    max-width: 74px;
    max-height: 120px;
  }
  > span {
    @include tablet {
      @include font-size(28px, 32px);
    }
    @include phone {
      @include font-size(18px, 26px);
    }
  }
}
</style>
