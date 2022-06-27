<template>
  <AnalysisPreparation />
</template>

<script lang="ts">
import Vue from 'vue'
import AnalysisPreparation from 'templates/AnalysisPreparation/index.vue'

export default Vue.extend({
  name: 'AnalysisPrep',
  components: {
    AnalysisPreparation,
  },
  async asyncData(ctx) {
    await Promise.all([
      await ctx.store.dispatch('prepare/fetchAnalysisPrepare'),
      await ctx.store.dispatch('AnalysisPrepInfo/fetchAnalysisPrepInfo'),
    ])
  },
  head() {
    return {
      title: 'Подготовка к анализам',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Подготовка к анализам',
        },
      ],
    }
  },
})
</script>
