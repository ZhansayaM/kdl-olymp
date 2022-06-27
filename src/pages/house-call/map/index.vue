<template>
  <div class="house-call-map">
    <HouseCallMapTemplate />
  </div>
</template>

<script>
import Vue from 'vue'
import HouseCallMapTemplate from 'templates/HouseCall/Map.vue'

export default Vue.extend({
  name: 'HouseCallMap',
  components: {
    HouseCallMapTemplate,
  },
  head: {
    title: 'Карта движения выездной бригады',
  },
  mounted() {
    this.$store.dispatch('houseCall/initRoute')
  },
})
</script>

<style lang="scss" scoped>
.house-call-map {
  width: 100%;
  max-width: 1440px;
  padding: 80px 50px;
  margin: 0 auto;
  @include flex-column();
  @include small-laptop {
    padding: 30px 30px 80px;
  }
  @include phone {
    padding: 20px 16px 60px;
  }
}
</style>
