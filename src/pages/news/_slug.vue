<template>
  <div class="main">
    <ButtonBack class="main__back" />
    <NewsItemInfo />
  </div>
</template>

<script>
import ButtonBack from 'atoms/Button/ButtonBack/index.vue'
import NewsItemInfo from 'molecules/NewsItemInfo/index.vue'

export default {
  name: 'NewsItem',
  components: {
    ButtonBack,
    NewsItemInfo,
  },
  async asyncData({ store, route }) {
    await store.dispatch('news/fetchNews', route.params.slug)
    await store.dispatch('contact/fetchContact')
  },
  head: {
    title: 'Новость',
  },
}
</script>

<style lang="scss" scoped>
.main {
  margin: 0 auto;
  max-width: 1440px;
  padding: 50px 50px 100px;
  @include small-laptop {
    padding: 30px 30px 80px;
  }
  @include phone {
    padding: 20px 16px 40px;
  }
  &__back {
    margin-bottom: 46px;
    @include tablet {
      margin-bottom: 28px;
    }
  }
}
</style>
