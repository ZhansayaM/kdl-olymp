<template>
  <div :class="['cards', { 'cards-big': isBig }]">
    <nuxt-link :to="`/news/${news.attributes.slug}`" class="cards-link">
      <div class="cards-tag"></div>
      <RFHeading
        tag="h4"
        :class="[isBig ? 'cards-title-big' : 'cards-title-little']"
        >{{ news.attributes.title }}</RFHeading
      >
      <div
        v-if="isBig"
        class="cards__top"
        v-html="news.attributes.short_text"
      ></div>
      <section class="cards__bottom">
        <RFText class="cards__bottom-date">{{
          newDate(news.attributes.publish_at)
        }}</RFText>
      </section>
    </nuxt-link>
  </div>
</template>

<script>
import RFHeading from 'atoms/RFHeading/index.vue'
import RFText from 'atoms/RFText/index.vue'

/**
 * Карточка новостей
 */
export default {
  name: 'NewsCard',
  components: {
    RFHeading,
    RFText,
  },
  props: {
    /**
     * Пропс новостей
     */
    news: {
      type: Object,
      default: () => {},
    },
    isBig: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    newDate(str) {
      const date = new Date(str)
      return (
        date.getDate() +
        ' ' +
        this.$services.common.month.monthFormat(date.getMonth())
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.cards {
  width: 23rem;
  position: relative;
  height: 200px;
  @include small-laptop {
    height: 150px;
    width: 33.333333%;
  }
  @include medium-tablet {
    width: 50%;
  }
  @include phone {
    width: 100%;
  }
  &-big {
    width: 48rem;
    @include small-laptop {
      width: 100%;
    }
  }

  > a {
    text-decoration: none;
    cursor: pointer;
  }

  &-tag {
    width: 64px;
    height: 9px;
    background-color: $c-basic-blue;
    margin-bottom: 20px;
    @include phone {
      margin-bottom: 10px;
      width: 67px;
      height: 5px;
    }
  }
  h4.rf-heading.cards-title-big {
    margin: 0;
    font-weight: 400;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    @include small-laptop {
      @include font-size(22px, 30px);
    }
    @include tablet {
      @include font-size(20px, 28px);
    }
    @include phone {
      @include font-size(18px, 22px);
    }
    &:hover {
      color: $c-primary;
    }
  }
  h4.rf-heading.cards-title-little {
    margin: 0;
    -webkit-line-clamp: 4;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    @include font-size(24px, 32px);
    @include small-laptop {
      -webkit-line-clamp: 3;
      @include font-size(22px, 30px);
    }
    @include tablet {
      @include font-size(20px, 28px);
    }
    @include phone {
      @include font-size(18px, 24px);
    }
    &:hover {
      color: $c-primary;
    }
  }

  &-discount {
    color: $c-primary;
  }

  &__top {
    padding-top: 21px;
    @include medium-tablet {
      padding-top: 10px;
    }
    ::v-deep p {
      color: $c-news-text;
      margin: 0;
      -webkit-line-clamp: 3;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      @include font-size(18px, 28px);
      @include phone {
        @include font-size(16px, 22px);
      }
    }
  }
  &__bottom {
    position: absolute;
    bottom: 0;
    @include phone {
      bottom: 20px;
    }
    &-date {
      opacity: 0.5;
      color: $c-dark;
      @include phone {
        @include font-size(16px, 19px);
      }
    }
  }
}
.cards.cards-big {
  height: 240px;
  @include tablet {
    height: 210px;
  }
}
</style>
