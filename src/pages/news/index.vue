<template>
  <div class="main">
    <ButtonBack class="main__back" />
    <NewsInfo />
  </div>
</template>

<script>
import ButtonBack from 'atoms/Button/ButtonBack/index.vue'
import NewsInfo from 'templates/NewsInfo/index.vue'

export default {
  name: 'NewsPage',
  components: {
    ButtonBack,
    NewsInfo,
  },
  async asyncData({ store }) {
    await store.dispatch('news/fetchAllNews')
  },
  head: {
    title: 'Новости',
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
    padding: 16px 16px 40px;
  }
  &__back {
    margin-bottom: 46px;
    @include phone {
      margin-bottom: 28px;
    }
  }
}
</style>
