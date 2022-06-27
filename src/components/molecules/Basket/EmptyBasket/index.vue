<template>
  <div class="empty-basket__template">
    <RFText variant="large">Ваша корзина пуста</RFText>
    <RFText class="subtitle">
      Вы еще не добавили ни одной услуги.
      <br /><br />
      Раздел «Анализы и цены» поможет вам найти необходимое исследование.
    </RFText>
    <RFButton @click="redirectToAnalyzes">Выбрать услуги</RFButton>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RFText from 'atoms/RFText/index.vue'
import RFButton from 'atoms/RFButton/index.vue'
/**
 * 'MOLECULES/EmptyBasket'
 * @displayName EmptyBasket
 */
export default Vue.extend({
  name: 'EmptyBasket',
  components: {
    RFText,
    RFButton,
  },
  methods: {
    redirectToAnalyzes() {
      this.$router.push({ name: 'Analyzes' })
    },
  },
})
</script>

<style lang="scss" scoped>
.empty-basket__template {
  padding: 112px 0 101px;
  align-items: center;
  text-align: center;
  @include flex-column();

  .subtitle {
    color: $c-gray;
    margin: 26px auto 56px;
    max-width: 420px;
    @include font-size(18px, 28px);
  }
}
</style>
