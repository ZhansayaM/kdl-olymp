<template>
  <div class="articles">
    <RFHeading tag="h1"> {{ title }} </RFHeading>
    <AllArticles :articals="articles" />
  </div>
</template>

<script>
import Vue from 'vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import AllArticles from 'organisms/AllArticles/index.vue'

/**
 * 'TEMPLATES/ArticlesInfo'
 * @displayName ArticlesInfo
 */
export default Vue.extend({
  name: 'ArticlesInfo',
  components: {
    RFHeading,
    AllArticles,
  },
  data() {
    return {
      title: 'Статьи',
    }
  },
  computed: {
    articles() {
      return this.$store.getters['pages/getAllPages']
    },
  },
})
</script>

<style lang="scss" scoped>
.articles {
  h1.rf-heading {
    margin: 0 0 46px;
    @include small-laptop {
      margin: 0 0 40px;
      @include font-size(40px, 50px, 500);
    }
  }
}
</style>
