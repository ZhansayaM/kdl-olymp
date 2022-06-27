<template>
  <div class="dynamics">
    <RFHeading tag="h4"> {{ title }}</RFHeading>
    <Tabs
      v-model="selectedTab"
      :tabs="tabs"
      class="dynamics__tabs"
      type="wrap"
      type-tab="outline-primary"
      :dynamics="true"
    />
    <GoogleChart class="dynamics__chart" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import Tabs from 'molecules/Tabs/index.vue'
import GoogleChart from 'atoms/GoogleChart/index.vue'

/**
 * MOLECULES/AnalysisDynamics
 * @displayName AnalysisDynamics
 */
export default Vue.extend({
  name: 'AnalysisDynamics',
  components: { RFHeading, Tabs, GoogleChart },
  props: {},
  data() {
    return {
      title: 'Динамика анализов',
      selectedTab: 0,
      tabs: [
        {
          id: 0,
          title: 'Гемоглобин',
        },
        {
          id: 1,
          title: 'Эритроциты',
        },
        {
          id: 2,
          title: 'Тромбоциты',
        },
        {
          id: 3,
          title: 'Лейкоциты',
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.dynamics {
  h4.rf-heading {
    margin: 0 0 34px 0;
    @include font-size(28px, 34px, 400);
    @include tablet {
      margin-bottom: 20px;
      @include font-size(24px, 30px, 400);
    }
  }
  &__tabs {
    margin-bottom: 30px;
  }
  &__chart {
    margin-left: -5rem;
    @include phone {
      margin-left: -3rem;
    }
    @include small-phone {
      margin-left: -2rem;
    }
  }
}
</style>
