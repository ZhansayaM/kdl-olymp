<template>
  <div>
    <GChart
      :resize-debounce="100"
      class="gchart"
      type="LineChart"
      :options="options"
      :data="collectionData"
    />
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'
export default {
  name: 'App',
  components: {
    GChart,
  },
  props: {
    collectionData: {
      type: Array,
      default: () => [
        ['Date', ' '],
        ['', 0],
        ['28.12.2020', 40],
        ['23.02.2021', 70],
        ['12.05.2020', 90],
      ],
    },
  },
  data() {
    return {
      options: {
        chart: {
          title: 'Динамика анализов',
        },
        height: 400,
        legend: { position: 'top', maxLines: 1 },
        series: {
          0: { color: '#31B0ED' },
        },
      },
    }
  },
}
</script>
