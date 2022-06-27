<template>
  <div class="discount-card">
    <div class="wrap">
      <div class="wrap__left">
        <RFText variant="xs" class="discount-card__title"
          >Ваша дисконтная карта:</RFText
        >
        <RFText variant="medium" class="discount-card__number">{{
          card.number
        }}</RFText>
      </div>
      <div class="discount-card__img">
        <img :src="require('@/assets/images/discount.png')" alt="discount" />
      </div>
    </div>
    <p class="discount-card__current">{{ card.current }}</p>
    <RFText variant="small" class="discount-card__left">
      До {{ card.future }} осталось {{ card.left }} ₸
    </RFText>
  </div>
</template>

<script>
import RFText from 'atoms/RFText/index.vue'

export default {
  name: 'PatientDiscount',
  components: { RFText },
  props: {
    card: {
      type: Object,
      default: () => ({
        number: '2000018200001',
        current: '10%',
        future: '15%',
        left: '330 286',
      }),
    },
  },
}
</script>

<style lang="scss" scoped>
.discount-card {
  max-width: 26rem;
  background: $c-light-blue;
  border-radius: 10px;
  height: fit-content;
  position: relative;
  padding: 24px 30px;
  @include medium-tablet {
    margin: 0 auto;
  }
  @include phone {
    padding: 14px;
    max-width: 100%;
    width: 100%;
  }
  &__title {
    margin-bottom: 7px;
    @include phone {
      margin-bottom: 0;
    }
  }
  .wrap {
    gap: 20px;
    @include flex-row();
    &__left {
      @include phone {
        margin-bottom: 40px;
      }
    }
  }
  &__img {
    border: 1px solid $c-primary-bgcolor;
    box-sizing: border-box;
    border-radius: 5px;
    width: 10rem;
    img {
      width: 100%;
    }
    @include phone {
      position: absolute;
      top: 5rem;
      right: 2rem;
    }
  }
  &__current {
    margin-bottom: 5px;
    @include font-size(60px, 73px, 700);
    @include phone {
      margin-bottom: 12px;
      @include font-size(48px, 48px, 500);
    }
  }
}
</style>
