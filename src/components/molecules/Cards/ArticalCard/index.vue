<template>
  <div :class="['cards', { 'cards-big': isBig }]">
    <nuxt-link :to="`/articles/${slug}`" class="cards-link">
      <RFHeading
        tag="h4"
        :class="[isBig ? 'cards-title__big' : 'cards-title__little']"
      >
        {{ title }}</RFHeading
      >
      <div class="cards__text" v-html="text"></div>
    </nuxt-link>
  </div>
</template>

<script>
import RFHeading from 'atoms/RFHeading/index.vue'

export default {
  name: 'ArticalCard',
  components: {
    RFHeading,
  },
  props: {
    isBig: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    slug: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.cards {
  max-width: 420px;
  width: 100%;
  padding-top: 20px;
  border-top: 1px solid $c-basic-blue;
  @include wide-laptop {
    max-width: 21rem;
  }
  @include small-laptop {
    max-width: 17rem;
  }
  @include medium-tablet {
    max-width: 100%;
    min-width: 248px;
    padding: 14px 0;
    box-sizing: border-box;
  }
  > a {
    text-decoration: none;
    cursor: pointer;
    h4.rf-heading {
      margin: 0 0 16px 0;
      -webkit-line-clamp: 2;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      @include phone {
        -webkit-line-clamp: 3;
        margin-bottom: 10px;
      }
    }
    &:active,
    &:hover {
      h4.rf-heading {
        color: $c-primary;
      }
    }
  }
  &-big {
    padding: 20px 20px 56px 20px;
    border: none;
    max-width: 420px;
    max-height: 376px;
    height: 100%;
    background: $c-basic-blue;
    border-radius: 8px;
    @include wide-laptop {
      max-width: 21rem;
    }
    @include small-laptop {
      max-width: 17rem;
    }
    @include medium-tablet {
      max-width: 100%;
      padding: 15px 10px;
    }
    > a {
      h4.rf-heading {
        -webkit-line-clamp: 6;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        @include medium-tablet {
          -webkit-line-clamp: 2;
        }
        @include phone {
          -webkit-line-clamp: 3;
        }
      }
    }
  }
  h4.rf-heading.cards-title__big {
    max-width: 350px;
    font-weight: 400;
    margin-bottom: 13px;
    @include small-laptop {
      margin-bottom: 10px;
      @include font-size(22px, 27px);
    }
    @include medium-tablet {
      max-width: 100%;
    }
  }
  h4.rf-heading.cards-title__little {
    max-width: 420px;
    @include font-size(24px, 32px);
    @include small-laptop {
      @include font-size(22px, 27px);
    }
    @include medium-tablet {
      max-width: 100%;
    }
  }
  &-tag {
    width: 64px;
    height: 9px;
    background-color: $c-basic-blue;
    margin-bottom: 20px;
  }

  &-title {
    &:active {
      color: $c-primary;
    }
  }

  &__text ::v-deep {
    p:not(:first-child) {
      display: none;
    }
    p {
      max-width: 380px;
      color: $c-news-text;
      margin: 0;
      -webkit-line-clamp: 3;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      @include font-size(16px, 24px);
      @include medium-tablet {
        -webkit-line-clamp: 5;
        max-width: 100%;
        @include font-size(16px, 19px);
      }
    }
  }
}
</style>
