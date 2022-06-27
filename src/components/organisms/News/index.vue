<template>
  <section class="news">
    <RFHeading tag="h2" class="news__title">Новости</RFHeading>
    <div class="news-top">
      <CardNews :news="getNewsBig()" />
    </div>
    <div class="news-bottom">
      <CardNews
        v-for="(item, index) in getNewsLittle()"
        :key="index"
        :isBig="index === 0 ? true : false"
        :news="item"
        class="news-bottom__card"
      />
    </div>
    <ButtonTo :link="link" class="news__btn">Все новости</ButtonTo>
  </section>
</template>

<script>
import RFHeading from 'atoms/RFHeading/index.vue'
import ButtonTo from 'atoms/Button/ButtonTo/index.vue'
import CardNews from 'molecules/Cards/NewsCard/index.vue'

/**
 * Секция новостей на главной странице
 */
export default {
  name: 'News',
  components: {
    RFHeading,
    CardNews,
    ButtonTo,
  },
  props: {
    /**
     * Пропс новостей
     */
    news: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      link: '/news',
    }
  },
  computed: {
    newsData() {
      this.getNewsBig()
      getNewsLittle()
      return ''
    },
  },
  methods: {
    getNewsBig() {
      const bigNews = []
      bigNews.push(this.news[0])
      return bigNews[0]
    },
    getNewsLittle() {
      const littleNews = []
      littleNews.push(this.news[1], this.news[2])
      return littleNews
    },
  },
}
</script>

<style lang="scss" scoped>
.news {
  max-width: 810px;
  width: 100%;
  padding-right: 15px;
  @include small-laptop {
    padding-right: 0;
    max-width: 100%;
  }
  h2.rf-heading {
    margin: 0;
    font-weight: 400;
    @include small-laptop {
      margin-top: 50px;
    }
    @include phone {
      @include font-size(22px, 27px);
    }
  }

  &__title {
    padding-bottom: 45px;
    @include small-laptop {
      padding-bottom: 30px;
    }
    @include tablet {
      padding-bottom: 20px;
    }
  }

  &-top {
    padding-bottom: 50px;
    @include phone {
      padding-bottom: 0;
    }
  }

  &-bottom {
    padding-bottom: 20px;
    justify-content: space-between;
    @include flex-row();
    @include phone {
      flex-direction: column;
      padding-bottom: 0;
    }
    &__card:nth-child(2) {
      padding-left: 40px;
      border-left: 1px solid $c-basic-blue;
      @include phone {
        padding-left: 0;
        border: none;
      }
    }
    .cards {
      @include phone {
        padding-top: 20px;
      }
    }
  }
  &__btn {
    margin-top: 20px;
    @include phone {
      display: none;
    }
  }
}
</style>
