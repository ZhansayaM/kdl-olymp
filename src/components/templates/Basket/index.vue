<template>
  <div class="basket_template">
    <component :is="basketComponent" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import EmptyBasket from 'molecules/Basket/EmptyBasket/index.vue'
import FullBasket from 'templates/Basket/FullBasket.vue'

import { IBasketItem } from '~/src/models/basket'
/**
 * 'TEMPLATES/BasketTemplate'
 * @displayName BasketTemplate
 */
export default Vue.extend({
  name: 'BasketTemplate',
  components: {
    EmptyBasket,
    FullBasket,
  },
  computed: {
    analyzesData(): Array<IBasketItem> {
      return this.$store.state.basket.products
    },
    basketComponent() {
      if (this.analyzesData.length === 0) return EmptyBasket
      else return FullBasket
    },
  },
})
</script>
