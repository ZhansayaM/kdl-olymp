<template>
  <div class="services-redirect__card">
    <RFText class="services-redirect__card__title">
      {{ title }}
    </RFText>
    <RFButton
      size="medium"
      @click="
        $router.push({
          name: 'Analyzes',
        })
      "
    >
      {{ btntitle }}
    </RFButton>
    <img
      :src="require('@/assets/images/' + img)"
      alt="Рисунок карты для перенаправления на страницу списков услуг"
    />
  </div>
</template>

<script>
import RFText from 'atoms/RFText/index.vue'
import RFButton from 'atoms/RFButton/index.vue'

export default {
  name: 'ServicesRedirectCard',
  components: {
    RFText,
    RFButton,
  },
  data() {
    return {
      title:
        'Широкий спектр медицинских анализов, достоверный и своевременный результат',
      btntitle: 'К списку услуг',
      img: 'helicobacter-2.png',
    }
  },
}
</script>

<style lang="scss" scoped>
.services-redirect__card {
  padding: 28px 30px 34px;
  width: 26.25rem;
  height: fit-content;
  min-width: 17.5rem;
  position: relative;
  background: radial-gradient(
    125.12% 191.76% at 91.55% 116.59%,
    #92ca5b 0%,
    #c9fd96 33.65%,
    #92ca5b 100%
  );
  border-radius: 8px;
  @include phone {
    width: 100%;
    min-width: none;
  }
  &__title {
    position: relative;
    margin-bottom: 72px;
    z-index: 3;
    color: $c-white;
    width: 83%;
    @include font-size(24px, 32px);
    @include phone {
      position: relative;
      z-index: 2;
    }
  }
  .rf-btn-size--medium {
    width: 186px;
    height: 46px;
    padding: 0;
  }
  img {
    z-index: 1;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    max-width: 70%;
  }
}
</style>
