<template>
  <client-only>
    <yandex-map ref="map" class="ymap" :coords="centerCoords" :zoom="14">
      <!-- Линейный маршрут с координатами -->
      <ymap-marker
        v-for="(c, i) in routeCoords"
        :key="i"
        :marker-id="i"
        :marker-type="options.marker_type"
        :coords="c"
        hint-content="Маршрут движения"
        :marker-stroke="options.stroke"
        :options="options.options"
      ></ymap-marker>

      <!-- Точечные места с остановками бригады -->
      <ymap-marker
        v-for="(m, ind) in routeMarkers"
        :key="`marker-${ind}`"
        :marker-id="`marker-${ind}`"
        :coords="m"
        :icon="markerIcon(ind + 1)"
      >
        <div
          v-if="ind + 1 === userOrder"
          slot="balloon"
          content="user-order-popup"
        >
          <RFText style-type="accent-blue" variant="medium">
            Вы {{ userOrder }}-ый(ая) в очереди
          </RFText>
          <RFText variant="small">16:00 — 17:00</RFText>
        </div>
      </ymap-marker>
    </yandex-map>
  </client-only>
</template>

<script lang="ts">
import Vue from 'vue'
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
import RFText from 'atoms/RFText/index.vue'

/**
 * @displayName HouseCallYandexMap
 */
export default Vue.extend({
  name: 'HouseCallYandexMap',
  components: { yandexMap, ymapMarker, RFText },
  data() {
    return {
      userOrder: 2,
      options: {
        marker_type: 'Polyline',
        stroke: { color: '#0088CE', width: 5 },
        options: { geodesic: true },
      },
    }
  },
  computed: {
    centerCoords(): number[] {
      return [51.13368864778749, 71.41452430957376]
    },
    routeCoords(): any[] {
      return this.$store.state.houseCall.routeCoords
    },
    routeMarkers(): any[] {
      return this.$store.state.houseCall.routeMarkers
    },
  },
  methods: {
    markerIcon(content) {
      return {
        layout: 'default#imageWithContent',
        imageHref:
          'https://www.flaticon.com/free-icon/circle_594846?term=circle&page=1&position=8&page=1&position=8&related_id=594846&origin=search',
        imageSize: [24, 24],
        imageOffset: [-12, -12],
        content,
        contentOffset: [0, 0],
        contentLayout: `<div style="background: ${
          this.userOrder === +content ? '#FDC504' : '#0088CE'
        }; width: 24px; height: 24px; border-radius: 50%; color: #fff; font-weight: bold; padding: 4px;">
            $[properties.iconContent]
          </div>`,
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.user-order-popup {
  padding: 12px 20px;
  border-radius: 5px;
}
</style>
