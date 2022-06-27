<template>
  <section class="results">
    <ButtonBack class="results__back" />
    <RFHeading tag="h1" class="results__title">{{ title }}</RFHeading>
    <ResultsInfo class="results__block" />
    <BloodAnalysis class="results__block" />
    <ResultsBlanks class="results__block" />
    <AnalysisDynamics class="results__block" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import ButtonBack from 'atoms/Button/ButtonBack/index.vue'
import ResultsInfo from 'molecules/ResultsInfo/index.vue'
import BloodAnalysis from 'molecules/Cards/BloodAnalysis/index.vue'
import ResultsBlanks from 'molecules/Cards/ResultsBlanks/index.vue'
import AnalysisDynamics from 'molecules/Cards/AnalysisDynamics/index.vue'
export default Vue.extend({
  name: 'ResultsNotReadyTemplate',
  components: {
    RFHeading,
    ButtonBack,
    ResultsInfo,
    BloodAnalysis,
    ResultsBlanks,
    AnalysisDynamics,
  },
  data() {
    return {
      title: 'Результаты анализа',
    }
  },
})
</script>

<style lang="scss" scoped>
.results {
  margin: 0 auto;
  max-width: 1440px;
  padding: 50px 50px 100px;
  @include small-laptop {
    padding: 30px 30px 80px;
  }
  @include phone {
    padding: 20px 16px 60px;
  }
  h1.rf-heading {
    margin: 0 0 64px 0;
    @include medium-tablet {
      margin-bottom: 40px;
      @include font-size(40px, 50px, 500);
    }
    @include phone {
      margin-bottom: 30px;
      @include font-size(34px, 40px, 500);
    }
    @include small-phone {
      @include font-size(28px, 32px, 500);
    }
  }
  &__block:not(:last-child) {
    margin-bottom: 52px;
  }
  &__back {
    margin-bottom: 40px;
    @include phone {
      margin-bottom: 20px;
    }
  }
}
</style>
