<template>
  <div class="analyzes_slug">
    <BackButton> Назад </BackButton>
    <AnalyzesSlugTemplate />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BackButton from 'atoms/Button/ButtonBack/index.vue'
import AnalyzesSlugTemplate from 'templates/Analyzes/AnalyzesSlug.vue'
export default Vue.extend({
  name: 'AcquireDiscountCard',
  components: {
    BackButton,
    AnalyzesSlugTemplate,
  },
  data() {
    return {}
  },
  head: {
    title: 'Описание анализа',
  },
})
</script>

<style lang="scss" scoped>
.analyzes_slug {
  padding: 40px 50px;
  margin: 0 auto;
  max-width: 1440px;
  @include phone {
    padding: 28px 16px;
  }
}
</style>
