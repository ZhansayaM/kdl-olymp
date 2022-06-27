<template>
  <div class="basket_checkout">
    <component :is="componentByStage" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BasketTemplate from 'templates/Basket/index.vue'
import CheckoutInProgress from 'templates/Basket/CheckoutInProgress.vue'
import CheckoutDone from 'templates/Basket/CheckoutDone.vue'

import { CheckoutPaymentStage } from '~/src/models/payment'
import { AnalysisDonePlace } from '~/src/models/analysis'

/**
 * PAGES/BasketCheckout
 * @displayName BasketCheckout
 */
export default Vue.extend({
  name: 'BasketCheckout',
  components: {
    BasketTemplate,
    CheckoutInProgress,
    CheckoutDone,
  },
  head: {
    title: 'Оформление заказа',
  },
  computed: {
    stage(): CheckoutPaymentStage {
      return this.$store.state.order.stage
    },
    analysisDone(): AnalysisDonePlace {
      return this.$store.state.order.analysisDone
    },
    componentByStage() {
      const stage = this.$route.query.stage
      switch (stage) {
        case 'in_progress' as CheckoutPaymentStage:
          return CheckoutInProgress
        case 'success' as CheckoutPaymentStage:
          return CheckoutDone
        case 'failed' as CheckoutPaymentStage:
          return CheckoutDone
        default:
          return BasketTemplate
      }
    },
  },
  watch: {
    stage(val) {
      const qStage = this.$route.query.stage
      const analysisDone = this.$route.query.analysisDone
      if (qStage !== val)
        this.$router.push({
          name: 'Basket-checkout',
          query: { analysisDone, stage: val },
        })
    },
    analysisDone(val) {
      const stage = this.$route.query.stage
      const qAnalysisDone = this.$route.query.analysisDone
      if (qAnalysisDone !== val)
        this.$router.push({
          name: 'Basket-checkout',
          query: { analysisDone: val, stage },
        })
    },
  },
  mounted() {
    const query = this.$route.query
    if (query.analysisDone !== this.analysisDone || query.stage !== this.stage)
      this.$router.push({
        name: 'Basket-checkout',
        query: {
          stage: this.stage,
          analysisDone: this.analysisDone,
        },
      })

    this.$store.dispatch('basket/fetchBasket')
    this.$store.dispatch('procedureRoom/fetchProcedureRooms')
  },
})
</script>

<style lang="scss" scoped>
.basket_checkout {
  padding: 50px 50px 100px;
  margin: 0 auto;
  max-width: 1440px;

  @include wide-tablet {
    padding: 40px;
  }

  @include phone {
    padding: 30px 20px;
  }
}
</style>
