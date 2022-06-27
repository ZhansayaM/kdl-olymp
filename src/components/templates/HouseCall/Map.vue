<template>
  <div class="house-call-map__template">
    <RFHeading tag="h1">Карта движения выездной бригады</RFHeading>
    <HouseCallYandexMap class="map" />
  </div>
</template>

<script>
import Vue from 'vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import HouseCallYandexMap from 'organisms/Map/HouseCallMap/index.vue'

export default Vue.extend({
  name: 'HouseCallMapTemplate',
  components: {
    RFHeading,
    HouseCallYandexMap,
  },
})
</script>

<style lang="scss" scoped>
.house-call-map {
  &__template {
    width: 100%;
    height: 100%;

    h1.rf-heading {
      margin-bottom: 40px;
      max-width: 880px;
      @include small-laptop {
        max-width: 80%;
      }
      @include phone {
        max-width: 100%;
        margin-bottom: 20px;
      }
    }
    .map.ymap-container {
      width: 100%;
      height: 90vh;
    }
  }
}
</style>
