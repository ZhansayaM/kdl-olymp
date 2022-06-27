<template>
  <div class="main">
    <ButtonBack class="main__back" />
    <ArticleItemInfo />
  </div>
</template>

<script>
import ButtonBack from 'atoms/Button/ButtonBack/index.vue'
import ArticleItemInfo from 'molecules/ArticleItemInfo/index.vue'

export default {
  name: 'ArticleItem',
  components: {
    ButtonBack,
    ArticleItemInfo,
  },
  async asyncData({ store, route }) {
    await store.dispatch('pages/fetchPages', route.params.slug)
  },
  head: {
    title: 'Статья',
  },
}
</script>

<style lang="scss" scoped>
.main {
  padding: 50px 50px 120px;
  max-width: 1440px;
  margin: 0 auto;
  @include small-laptop {
    padding: 50px 30px 100px;
  }
  @include medium-tablet {
    padding: 20px 20px 80px;
  }
  @include tablet {
    padding: 20px 20px 50px;
  }
  &__back {
    margin-bottom: 46px;
    @include phone {
      margin-bottom: 28px;
    }
  }
}
</style>
