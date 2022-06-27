<template>
  <div class="covid-card" :style="{ background: bg }">
    <section class="covid-card__flex">
      <RFHeading tag="h5"> ПЦР тест на COVID 19 </RFHeading>
      <div class="covid-card-info">
        <RFText variant="small" class="covid-card-info-time">{{
          dates
        }}</RFText>
      </div>
    </section>
    <img
      :src="require('@/assets/images/helicobacter-2.png')"
      alt="Картина для карты ПЦР теста на COVID-19"
      class="cards__img"
    />
  </div>
</template>

<script>
import RFHeading from 'atoms/RFHeading/index.vue'
import RFText from 'atoms/RFText/index.vue'

export default {
  name: 'CovidCard',
  components: {
    RFHeading,
    RFText,
  },
  props: {
    dates: {
      type: String,
      default: '1.07 - 31.07',
    },
  },
  data() {
    return {
      bg: 'linear-gradient(99.71deg, #c93ca2 7.68%, #ff8686 57.06%)',
    }
  },
}
</script>

<style lang="scss" scoped>
.covid-card {
  width: 25rem;
  height: 217px;
  padding: 15px 25px;
  border-radius: 10px;
  position: relative;
  justify-content: space-between;
  @include flex-column();

  @include phone {
    width: 100%;
    max-height: 180px;
  }
  @include small-phone {
    max-height: 150px;
  }
  h5.rf-heading {
    max-width: 70%;
    margin: 0;
    color: $c-white;
    z-index: 10;
  }
  &-info {
    margin-top: auto;
    z-index: 10;
    &-time {
      color: $c-white;
    }
  }
  img {
    position: absolute;
    width: 100%;
    height: 110%;
    object-fit: contain;
    border-radius: 10px;
    right: 0;
    top: -15px;
  }
  &__flex {
    @include flex-column;
  }
}
</style>
