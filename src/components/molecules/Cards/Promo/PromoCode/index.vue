<template>
  <div class="promo-code">
    <div class="promo-code-wrapper">
      <section class="promo-code-top">
        <RFText variant="xs" class="promo-code-top__title">
          {{ title }}
        </RFText>
        <p class="promo-code-top__code">{{ code }}</p>
      </section>
      <section class="promo-code-bottom">
        <RFHeading tag="h6"> {{ discount }}% </RFHeading>
        <RFText class="promo-code-bottom__date" variant="xs"
          >Действителен до {{ date }}</RFText
        >
      </section>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import RFText from 'atoms/RFText/index.vue'

export default Vue.extend({
  name: 'PromoCodeCard',
  components: {
    RFHeading,
    RFText,
  },
  props: {
    title: {
      type: String,
      default: 'Ваш промо-код:',
    },
    code: {
      type: String,
      default: '2000018200001',
    },
    discount: {
      type: Number,
      default: 10,
    },
    date: {
      type: String,
      default: '02.04.2022',
    },
  },
})
</script>

<style lang="scss" scoped>
.promo-code {
  width: 100%;
  height: 100%;

  &-wrapper {
    max-width: 420px;
    width: 100%;
    height: max-content;
    border-radius: 10px;
    background: $c-light-green;
    padding: 24px;
    justify-content: space-between;
    @include flex-column();

    @include phone {
      padding: 20px 16px;
    }
  }

  &-top {
    &__code {
      @include font-size(18px, 22px, 600);

      @include phone {
        @include font-size(22px, 27px);
      }
    }
    &__title {
      @include phone {
        @include font-size(14px, 20px);
      }
    }
  }

  &-bottom {
    justify-content: space-between;
    align-items: flex-end;
    padding-top: 42px;
    @include flex-row();

    @include phone {
      padding-top: 13px;
      flex-direction: column;
      align-items: flex-start;
    }

    > h6 {
      margin-bottom: -5px;
      @include font-size(60px, 60px, 700);

      @include phone {
        margin: 0;
        padding-bottom: 18px;
        @include font-size(48px, 58px, 500);
      }
    }
    &__date {
      @include phone {
        @include font-size(14px, 20px);
      }
    }
  }
}
</style>
