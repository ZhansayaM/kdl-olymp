<template>
  <div class="covid_test_questionnaire-main">
    <ButtonBack />
    <CovidTestQuestionnaire />
  </div>
</template>

<script>
import Vue from 'vue'
import ButtonBack from 'atoms/Button/ButtonBack/index.vue'
import CovidTestQuestionnaire from 'templates/Covid/Questionnaire/index.vue'

export default Vue.extend({
  name: 'CovidQuestionnaire',
  components: {
    CovidTestQuestionnaire,
    ButtonBack,
  },
  head: {
    title: 'Анкета для ПЦР',
  },
  mounted() {
    if (!this.$store.getters['covid/getAllAccepted'])
      this.$router.push('/covid-19')
  },
})
</script>

<style lang="scss" scoped>
.covid_test_questionnaire-main {
  padding: 70px 50px;
  margin: 0 auto;
  max-width: 1440px;

  @include tablet {
    padding: 40px 30px;
  }
}
</style>
