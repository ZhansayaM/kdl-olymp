<template>
  <!-- // TODO: Перенести слайдер в организмы как основной -->
  <div class="popular">
    <section class="popular-top">
      <RFHeading tag="h3" class="popular-top__title">{{ title }}</RFHeading>
    </section>

    <section class="popular-bottom">
      <!-- // TODO: Переписать слайдер с нормальными брейкпоинтами -->
      <vueper-slides
        class="no-shadow"
        :autoplay="false"
        :duration="5000"
        :bullets="false"
        :gap="3"
        :slide-multiple="mq.phone ? 1 : mq.wideTablet ? 2 : 3"
        :mobile-first="true"
        :slide-ratio="1 / 4"
        :visible-slides="
          variant === 'partners' ? 4 : mq.phone ? 1 : mq.wideTablet ? 2 : 3
        "
        :infinite="false"
        :breakpoints="breakpoints"
        disable-arrows-on-edges
        :class="[
          { press: variant === 'press' },
          { partners: variant === 'partners' },
        ]"
        @slide="checkSlide"
      >
        <template #arrow-left>
          <ArrowLeft class="popular-top__arrows" :is-active="leftValue" />
        </template>
        <template #arrow-right>
          <ArrowRight class="popular-top__arrows" :is-active="rightValue" />
        </template>

        <vueper-slide v-for="(item, index) in items" :key="index">
          <template #content>
            <!-- // ! Расширяем добавляя новый тип и карточку сюда (новая секция -> v-if тип -> нужная карточка с пропсами) -->
            <section v-if="variant === 'result'" class="popular-wrap">
              <ResultsCard
                :date="item.date"
                :name="item.name"
                :number="item.number"
                :results="item.results"
                :link="item.link"
              />
            </section>
            <section v-if="variant === 'articles'">
              <ArticalCard
                :id="item.id"
                :key="item.id"
                :is-big="index === 0 ? true : false"
                :title="item.attributes.title"
                :text="item.attributes.text"
                :slug="item.attributes.slug"
              />
            </section>
            <section v-if="variant === 'press'">
              <PressCard
                :id="item.id"
                :date="item.date"
                :description="item.description"
                disable-arrows-on-edges
                :img="item.img"
                :title="item.title"
              />
            </section>
            <section v-if="variant === 'partners'">
              <img :src="item.partner" :alt="item.partner" />
            </section>
          </template>
        </vueper-slide>
      </vueper-slides>
    </section>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Vue, { PropType } from 'vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import ArrowLeft from 'atoms/ArrowLeft/index.vue'
import ArrowRight from 'atoms/ArrowRight/index.vue'
import { VueperSlides, VueperSlide } from 'vueperslides'
import PropsValidator from 'services/common/PropsValidator'
import ResultsCard from 'molecules/Cards/ResultsCard/index.vue'
import ArticalCard from 'molecules/Cards/ArticalCard/index.vue'
import PressCard from 'molecules/Cards/PressCard/index.vue'

type VariantType = 'result' | 'popular' | 'articles' | 'press' | 'partners'

declare module 'vue/types/vue' {
  interface Vue {
    checkSlide: () => void
    leftValue: boolean
    rightValue: boolean
    slidesValue: number
  }
}

export default Vue.extend({
  name: 'Slider',
  components: {
    RFHeading,
    ArrowLeft,
    ArrowRight,
    VueperSlides,
    VueperSlide,
    ResultsCard,
    ArticalCard,
    PressCard,
  },
  props: {
    /**
     * Тип слайдера (под каждую отдельную карточку)
     */
    variant: {
      type: String as PropType<VariantType>,
      default: 'default',
      validator(v: VariantType) {
        return PropsValidator.includes<VariantType>(
          ['result', 'popular', 'articles', 'press', 'partners'],
          v,
          'molecules/Slider/index'
        )
      },
    },
    /**
     * Адаптив слайдера
     */
    breakpoints: {
      type: Object,
      default: () => {},
    },
    /**
     * Отступ между слайдами
     */
    gap: {
      type: Number,
      default: 0,
    },
    /**
     * Слайды
     */
    items: {
      type: Array,
      default: () => [{}],
    },
    /**
     * Кол-во видимых слайдов
     */
    visible: {
      type: Number,
      default: 1,
    },
    /**
     * Показать тогл кнопки
     */
    isButton: {
      type: Boolean,
      default: true,
    },
    /**
     * Заголовок слайдера
     */
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      slidesValue: (this.items.length - 1) as number,
      mq: {
        wideTablet: '(max-width: 1025px)',
        tablet: '(max-width: 780px)',
        phone: '(max-width: 560px)',
      },
      leftValue: false as boolean,
      rightValue: true as boolean,
    }
  },
  // @ts-ignore
  mq: {
    wideTablet: '(max-width: 1025px)',
    tablet: '(max-width: 780px)',
    phone: '(max-width: 560px)',
  },
  mounted() {
    // @ts-ignore
    this.mq = this.$mq
  },
  methods: {
    checkSlide(e: any): void {
      if (e.currentSlide.index !== 0) {
        this.leftValue = true
        if (e.currentSlide.index === this.slidesValue) {
          this.rightValue = false
        }
      } else {
        this.rightValue = true
        this.leftValue = false
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.popular {
  max-width: 1370px;
  width: 100%;
  position: relative;

  &-top {
    max-width: 70vw;
    padding-bottom: 20px;
    align-items: center;
    @include flex-row();
    @include tablet {
      display: block;
    }

    &__btn {
      margin-left: 20px;
      background-color: $c-disabled-button-bg;
      border-radius: 8px;
      width: 344px;
      height: 56px;
      align-items: center;
      justify-content: center;
      @include flex-row();
      @include tablet {
        margin: 0;
      }
      @include phone {
        margin-top: 10px;
      }
      @include small-phone {
        flex-direction: column;
        background-color: transparent;
        margin: 30px auto 15px auto;
        width: auto;
        align-items: flex-start;
      }
      &-left,
      &-right {
        padding: 5px 40px 7px 40px;
        box-sizing: border-box;
        @include font-size(20px, 36px);
        @include tablet {
          font-size: 17px;
          line-height: 19px;
          padding: 17px 40px;
          width: 165px;
        }
        &:hover {
          background: $c-primary;
        }
      }
    }

    &__arrows {
      display: flex;
      justify-content: center;
      align-items: center;
      > svg {
        width: 15px;
        height: 30px;
        cursor: pointer;
      }
      svg + svg {
        margin-left: 50px;
      }
    }
    &__title {
      display: inline-flex;
    }
  }
}

.btn-disabled {
  background-color: $c-disabled-button-bg;
  color: $c-dark;
  border: 1px solid transparent;

  &:hover {
    background-color: $c-disabled-button-bg;
  }
}

::v-deep .vueperslides {
  &__track {
    overflow: hidden;
    z-index: 1;
    &-inner {
      transition: transform 0.5s ease-in-out;
      height: 100%;
      align-items: flex-start;
      @include flex-row();
    }
  }
  &__parallax-wrapper {
    padding: 0 !important;
  }
  &__arrow--prev {
    position: relative;
    left: 0;
    background-color: $c-white;
    border: none !important;
    padding: 0;
    margin: 0;
  }
  &__arrow--next {
    position: relative;
    left: 13px;
    background-color: $c-white;
    border: none !important;
    padding: 0;
    margin: 0;
  }
  &__arrows {
    position: absolute;
    top: 12px;
    right: 20px;
    @include medium-tablet {
      top: 0;
    }
    @include tablet {
      top: 10px;
      right: 0;
    }
    @include phone {
      top: 0;
    }
  }
}

::v-deep .vueperslides.press,
::v-deep .vueperslides.partners {
  .vueperslides__arrows {
    top: -84px;
    right: 2px;
    @include small-laptop {
      top: -78px;
    }
    @include phone {
      top: -58px;
    }
    @include small-phone {
      top: -53px;
    }
    svg {
      @include small-laptop {
        width: 13px;
        height: fit-content;
      }
      @include small-phone {
        width: 11px;
      }
    }
  }
}
::v-deep .vueperslides.partners {
  .vueperslide {
    margin-right: 10.9% !important;
    @include phone {
      margin-right: 12% !important;
    }
  }
  img {
    @include phone {
      max-width: 140px;
    }
  }
}
</style>
