<template>
  <section class="covid-test-main">
    <BackButton v-if="mq.phone" class="covid-test-main_back">
      Назад
    </BackButton>
    <CovidTestTemplate />
  </section>
</template>

<script>
import BackButton from 'atoms/Button/ButtonBack/index.vue'
import CovidTestTemplate from 'organisms/Covid/index.vue'

export default {
  name: 'CovidTest',
  components: {
    CovidTestTemplate,
    BackButton,
  },
  async asyncData({ store }) {
    await store.dispatch('terms/fetchTerms')
    await store.dispatch('infectiousDisease/fetchInfectiousDisease')
  },
  data() {
    return {
      mq: {
        phone: '(max-width: 560px)',
      },
    }
  },
  head: {
    title: 'Инфекционные болезни',
  },
  mq: {
    phone: '(max-width: 560px)',
  },
  mounted() {
    this.mq = this.$mq
  },
}
</script>

<style lang="scss" scoped>
.covid-test-main {
  padding: 70px 50px 110px;
  margin: 0 auto;
  max-width: 1440px;

  @include tablet {
    padding: 40px 30px 80px;
  }

  @include phone {
    padding: 21px 16px 56px;
  }

  &_back {
    @include phone {
      margin-bottom: 26px;
    }
  }
}
</style>
