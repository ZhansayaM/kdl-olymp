<template>
  <div class="news">
    <div class="news-block">
      <NewsCard
        v-for="(item, index) in newsData"
        :key="index"
        :isBig="index === 0 ? true : false"
        :news="item"
        class="news-block__item"
      />
    </div>
    <Button class="news__btn"> {{ btnShow }} </Button>
  </div>
</template>

<script>
import NewsCard from 'molecules/Cards/NewsCard/index.vue'

/**
 * Секция "Статьи"
 */
export default {
  name: 'AllNews',
  components: {
    NewsCard,
  },
  data() {
    return {
      link: '/news',
      btnShow: 'Показать еще',
    }
  },
  computed: {
    newsData() {
      return this.$store.getters['news/getAllNews']
    },
  },
}
</script>

<style lang="scss" scoped>
.news {
  width: 100%;
  &-block {
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 40px;
    @include flex-row();
    @include small-laptop {
      row-gap: 40px;
      column-gap: 0;
    }
    @include phone {
      row-gap: 20px;
    }
    &__item:not(:nth-child(3n)) {
      border-left: 1px solid $c-basic-blue;
      padding: 0 40px;
      @include small-laptop {
        border: none;
        padding: 0;
      }
    }
    &__item:nth-child(3n) {
      @include small-laptop {
        padding: 0 40px;
        border-left: 1px solid $c-basic-blue;
        border-right: 1px solid $c-basic-blue;
      }
      @include medium-tablet {
        border: none;
        padding: 0;
      }
    }
    &__item:nth-child(3n-1) {
      @include small-laptop {
        padding-right: 40px;
      }
      @include medium-tablet {
        padding: 0;
      }
    }
    &__item:nth-child(3n + 1) {
      @include small-laptop {
        padding-left: 40px;
      }
      @include medium-tablet {
        padding: 0;
      }
    }
    &__item:nth-child(2n) {
      @include medium-tablet {
        padding-right: 40px;
        border-right: 1px solid $c-basic-blue;
      }
      @include phone {
        border: none;
        padding: 0;
      }
    }
    &__item:nth-child(2n + 1) {
      @include medium-tablet {
        padding-left: 40px;
      }
      @include phone {
        padding: 0;
      }
    }
    &__item:first-child {
      border: none;
      padding: 0;
    }
    &__item {
      @include phone {
        border-bottom: 1px solid $c-basic-blue !important;
        padding-bottom: 20px !important;
      }
    }
  }
  &__btn {
    padding: 9px 21px;
    color: $c-primary;
    margin-top: 64px;
    border: 1px solid $c-primary;
    box-sizing: border-box;
    border-radius: 4px;
    background: $c-white;
    cursor: pointer;
    @include font-size(18px, 28px);
    @include small-laptop {
      margin-top: 50px;
    }
  }
}
</style>
