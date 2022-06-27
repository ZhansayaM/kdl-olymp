<template>
  <yandex-map :coords="coords" :controls="controls" :options="options">
    <ymap-marker
      marker-id="123"
      :coords="coords"
      :icon="markerIcon"
      :options="optionsToBaloon"
      @balloonopen="bindListener"
      @balloonclose="unbindListener"
    >
      <MapPopup
        id="yandex-map-popup"
        slot="balloon"
        :is-actionable="isActionable"
      />
    </ymap-marker>
  </yandex-map>
</template>

<script lang="ts">
import Vue from 'vue'
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
import MapPopup from 'molecules/MapPopup/index.vue'
/**
 * @displayName Map
 */
export default Vue.extend({
  name: 'Map',
  components: { yandexMap, ymapMarker, MapPopup },
  props: {
    isActionable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      coords: [51.105512, 71.434948],
      markerIcon: {
        layout: 'default#image',
        imageHref: 'https://i.imgur.com/17vpq66.png',
        imageSize: [37, 47],
        imageOffset: [-25, -65],
      },
      controls: [],
      options: {
        suppressMapOpenBlock: true,
        balloonOffset: [-5, -70],
        balloonPanelMaxMapArea: 0,
        balloonCloseButton: false,
        balloonMaxWidth: 316,
        balloonMinHeight: 208,
      },

      optionsToBaloon: {
        hideIconOnBalloonOpen: false,
      },
    }
  },
  methods: {
    onClick($event) {
      this.$emit('click', $event)
    },
    bindListener() {
      // device width. It is needed to determine popup's width
      const main = document.getElementsByClassName('app-main')[0]
      let popupWidth = '280px'
      if (main.clientWidth < 560) popupWidth = '200px'

      // change width of a container with predetermined fixed width
      const popupContainer =
        document?.getElementById('yandex-map-popup')?.parentElement
          ?.parentElement
      if (popupContainer) popupContainer.style.width = popupWidth

      // add event listener to popup component
      document
        ?.getElementById('yandex-map-popup')
        ?.addEventListener('click', this.onClick)
    },
    unbindListener() {
      document
        ?.getElementById('yandex-map-popup')
        ?.removeEventListener('click', this.onClick)
    },
  },
})
</script>
