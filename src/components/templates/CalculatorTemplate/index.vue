<template>
  <div class="calculator">
    <div class="content">
      <ButtonBack class="content__back" />
      <RFHeading tag="h2"> Калькулятор </RFHeading>
      <component :is="componentByPage" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import CalculatorForm from 'molecules/Calculator/Form/index.vue'
import TableForm from 'molecules/Calculator/TableForm/index.vue'
import ButtonBack from 'atoms/Button/ButtonBack/index.vue'

export default Vue.extend({
  name: 'CalculatorTemplate',
  components: {
    RFHeading,
    CalculatorForm,
    TableForm,
    ButtonBack,
  },
  computed: {
    componentByPage() {
      const page = +this.$route.query.page
      switch (page) {
        case 1:
          return CalculatorForm
        case 2:
          return TableForm
        default:
          return CalculatorForm
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.calculator {
  padding: 50px 50px 100px;
  margin: 0 auto;
  max-width: 1440px;
  @include small-laptop {
    padding: 30px 30px 80px;
  }
  @include phone {
    padding: 20px 16px 60px;
  }
  .content {
    &__back {
      margin-bottom: 40px;
      @include phone {
        margin-bottom: 26px;
      }
    }
  }
}
</style>
