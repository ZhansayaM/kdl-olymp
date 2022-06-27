<template>
  <section class="results">
    <ButtonBack class="results__back" />
    <RFHeading tag="h2" class="results__title">{{ title }}</RFHeading>
    <div class="results__main">
      <ResultsEntries />
      <GetAnalysisInfo />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import ResultsEntries from 'molecules/ResultsEntries/index.vue'
import GetAnalysisInfo from 'molecules/Cards/AnalyzesCard/GetAnalysisInfo/index.vue'
import ButtonBack from 'atoms/Button/ButtonBack/index.vue'

export default Vue.extend({
  name: 'ResultsTemplate',
  components: {
    RFHeading,
    ResultsEntries,
    GetAnalysisInfo,
    ButtonBack,
  },
  data() {
    return {
      title: 'Результаты анализов',
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
  h2.rf-heading {
    margin: 0 0 34px 0;
    font-weight: 400;
    @include phone {
      margin-bottom: 20px;
      @include font-size(32px, 36px);
    }
    @include small-phone {
      margin-bottom: 0;
      @include font-size(22px, 27px);
    }
  }
  &__back {
    margin-bottom: 40px;
    @include phone {
      margin-bottom: 28px;
    }
  }
  &__main {
    justify-content: space-between;
    gap: 30px;
    @include flex-row();
    @include tablet {
      flex-direction: column;
    }
  }
}
</style>
