<template>
  <BasketTemplate class="basket" />
</template>

<script lang="ts">
import Vue from 'vue'
import BasketTemplate from 'templates/Basket/index.vue'

/**
 * PAGES/Basket
 * @displayName Basket
 */
export default Vue.extend({
  name: 'Basket',
  components: {
    BasketTemplate,
  },
  head: {
    title: 'Корзина',
  },
  mounted() {
    this.$store.dispatch('basket/fetchBasket')
    this.$store.dispatch('procedureRoom/fetchProcedureRooms')
  },
})
</script>

<style lang="scss" scoped>
.basket {
  padding: 50px 50px 100px;
  max-width: 1440px;
  margin: 0 auto;
  @include wide-tablet {
    padding: 40px;
  }
  @include phone {
    padding: 30px 20px;
  }
}
</style>
