<template>
  <section class="articals">
    <div class="articals-top">
      <RFHeading tag="h2" class="articals-top__title">Статьи</RFHeading>
      <ButtonTo :link="link" class="articals-top__link">Все статьи</ButtonTo>
    </div>
    <div class="articals-list">
      <ArticalCard
        v-for="(item, index) in articals"
        :id="item.id"
        :key="index"
        :is-big="index === 0 ? true : false"
        :title="item.attributes.title"
        :slug="item.attributes.slug"
        :text="item.attributes.text"
        class="articals-list__item"
      />
    </div>
    <div class="articals__slider">
      <Slider
        :items="articals"
        :variant="'articles'"
        :breakpoints="breakpoints"
      />
    </div>
  </section>
</template>

<script>
import RFHeading from 'atoms/RFHeading/index.vue'
import ButtonTo from 'atoms/Button/ButtonTo/index.vue'
import ArticalCard from 'molecules/Cards/ArticalCard/index.vue'
import Slider from 'molecules/Slider/index.vue'

/**
 * Секция "Статьи"
 */
export default {
  name: 'Articals',
  components: {
    RFHeading,
    ArticalCard,
    ButtonTo,
    Slider,
  },
  props: {
    /**
     * Пропс статей
     */
    articals: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      link: '/articles',
      breakpoints: {
        779: { visibleSlides: 2, slideMultiple: 2 },
        559: { visibleSlides: 1, slideMultiple: 1 },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.articals {
  width: 100%;

  &-top {
    padding-bottom: 40px;
    justify-content: space-between;
    align-items: center;
    @include flex-row();
    @include tablet {
      padding-bottom: 20px;
    }
    h2.rf-heading {
      margin: 0;
      font-weight: 400;
      @include phone {
        @include font-size(22px, 27px);
      }
    }
    &__link {
      @include phone {
        display: none;
      }
    }
  }

  &-list {
    display: grid;
    grid-template-columns: 420px 420px 420px;
    grid-template-rows: 200px 200px;
    column-gap: 50px;
    justify-content: space-between;
    @include wide-laptop {
      grid-template-columns: 390px 390px 390px;
    }
    @include laptop {
      grid-template-columns: 360px 360px 360px;
    }
    @include small-laptop {
      grid-template-columns: 280px 280px 280px;
    }
    @include wide-tablet {
      grid-template-columns: 265px 265px 265px;
    }
    @include medium-tablet {
      display: none;
    }
    &__item {
      &:nth-child(1) {
        grid-column-start: 2;
        grid-row-start: 1;
        grid-row-end: 3;
      }
      @include medium-tablet {
        display: block;
      }
    }
  }
  &__slider {
    display: none;
    @include medium-tablet {
      display: block;
      margin-top: 3.5rem;
    }
    @include phone {
      margin-top: 0;
    }
  }
}

::v-deep {
  .popular-top {
    display: none !important;
  }
  .vueperslides {
    &__inner {
      position: relative;
    }
    &__arrow--next {
      .wrapper span {
        padding: 0;
      }
    }
    &__arrows {
      @include medium-tablet {
        top: -4rem !important;
        right: 15px !important;
      }
      @include tablet {
        top: -3.5rem !important;
      }
      @include phone {
        display: none !important;
      }
    }
  }
}
</style>
