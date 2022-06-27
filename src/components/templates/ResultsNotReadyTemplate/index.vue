<template>
  <section class="results">
    <ButtonBack class="results__back" />
    <RFHeading tag="h4" class="results__title">{{ title }}</RFHeading>
    <RFText variant="medium" style-type="hint" class="results__dateTitle">{{
      dateTitle
    }}</RFText>
    <RFText variant="medium" class="results__date">{{ date }}</RFText>
    <Button class="results__btn" @click="$router.push('/')">
      {{ btnTitle }}
    </Button>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import ButtonBack from 'atoms/Button/ButtonBack/index.vue'
import RFText from 'atoms/RFText/index.vue'
export default Vue.extend({
  name: 'ResultsNotReadyTemplate',
  components: {
    RFHeading,
    ButtonBack,
    RFText,
  },
  data() {
    return {
      title: 'Результаты ваших анализов еще не готовы',
      dateTitle: 'Ожидаемая дата готовности:',
      date: '2021.05.08',
      btnTitle: 'Вернуться на главную',
    }
  },
})
</script>

<style lang="scss" scoped>
.results {
  margin: 0 auto;
  max-width: 1440px;
  padding: 50px 50px 100px;
  text-align: center;
  @include small-laptop {
    padding: 30px 30px 80px;
  }
  @include phone {
    padding: 20px 16px 60px;
  }
  h4.rf-heading {
    margin: 0 0 30px 0;
    font-weight: 400;
    @include phone {
      margin-bottom: 20px;
      @include font-size(24px, 30px);
    }
    @include small-phone {
      margin-bottom: 36px;
      @include font-size(22px, 27px);
    }
  }
  &__back {
    margin-bottom: 90px;
    @include phone {
      margin-bottom: 28px;
    }
  }
  &__dateTitle {
    @include phone {
      margin-bottom: 6px;
    }
  }
  &__date {
    @include phone {
      @include font-size(16px, 22px);
    }
    @include small-phone {
      @include font-size(16px, 22px, 400);
    }
  }
  &__btn {
    margin-top: 46px;
    background: $c-primary;
    border-radius: 4px;
    color: $c-white;
    padding: 9px 25px;
    border: none;
    cursor: pointer;
    @include font-size(18px, 30px);
    @include phone {
      margin-top: 36px;
    }
  }
}
</style>
