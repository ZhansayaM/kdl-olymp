<template>
  <div class="slider">
    <section class="slider-top">
      <RFHeading tag="h2" class="slider-top__title">
        {{ title }}
      </RFHeading>
    </section>

    <section class="slider-bottom">
      <vueper-slides
        class="no-shadow"
        :autoplay="false"
        :duration="5000"
        :bullets="false"
        disable-arrows-on-edges
        :gap="3"
        :always-refresh-clones="true"
        :visible-slides="3"
        :breakpoints="{
          1000: { visibleSlides: 2, slideMultiple: 2 },
          559: { visibleSlides: 1, slideMultiple: 1 },
        }"
        :infinite="false"
      >
        <template #arrow-left>
          <ArrowLeft :is-active="true" class="slider-top__arrows" />
        </template>
        <template #arrow-right>
          <ArrowRight :is-active="true" class="slider-top__arrows" />
        </template>
        <vueper-slide v-for="item in items" :key="item.id">
          <template #content>
            <section class="slider-wrap">
              <Button
                class="slider-wrap__btn"
                @click="$router.push('/promotions')"
              >
                <Card
                  :title="item.attributes.title"
                  :old-price="item.attributes.price"
                  :price="item.attributes.price_discount"
                  :date="
                    dateNormalize(
                      item.attributes.date_before,
                      item.attributes.date_from
                    )
                  "
                  :color="item.color"
                  :img="item.attributes.image_path"
                  class="slider-wrap__card"
                />
              </Button>
            </section>
          </template>
        </vueper-slide>
      </vueper-slides>
    </section>
  </div>
</template>

<script>
import Card from 'molecules/Cards/ServiceCard/CurrentCard/index.vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import ArrowLeft from 'atoms/ArrowLeft/index.vue'
import ArrowRight from 'atoms/ArrowRight/index.vue'
import { VueperSlides, VueperSlide } from 'vueperslides'

export default {
  name: 'Slider',
  components: {
    Card,
    RFHeading,
    ArrowLeft,
    ArrowRight,
    VueperSlides,
    VueperSlide,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [{}],
    },
  },
  methods: {
    dateNormalize(before, from) {
      return `${before} - ${from}`
    },
  },
}
</script>

<style lang="scss" scoped>
.slider {
  margin-top: 40px;
  &-wrap {
    flex-wrap: nowrap;
    @include flex-row();
    &__btn {
      border: none;
      background: none;
      cursor: pointer;
      text-align: left;
    }
    &__card {
      cursor: pointer;
    }
  }
  &-top {
    max-width: 70vw;
    padding-bottom: 30px;
    justify-content: space-between;
    @include flex-row();
    @include phone {
      max-width: 100%;
      padding-bottom: 20px;
    }
    h2.rf-heading {
      margin: 0;
      font-weight: 400;
      @include small-phone {
        @include font-size(22px, 27px);
      }
    }
    &__arrows {
      background-color: $c-white;
    }
    &__title {
      display: inline-flex;
    }
  }
  &-bottom {
    position: relative;
  }
}
.vueperslide + .vueperslide {
  margin-left: 20px;
  @include medium-tablet {
    margin: 0 6px;
  }
}
.vueperslide {
  margin-right: 0 !important;
}
::v-deep .vueperslides {
  &__track {
    overflow: hidden;
    z-index: 1;
    &-inner {
      white-space: nowrap;
      transition: transform 0.5s ease-in-out;
      height: 100%;
      @include flex-row();
    }
  }
  &__parallax-wrapper {
    padding: 0 !important;
  }
  &__arrow--prev {
    position: relative;
    left: 0;
    border: none !important;
    padding: 0;
    margin: 0;
  }
  &__arrow--next {
    position: relative;
    left: 13px;
    border: none !important;
    padding: 0;
    margin: 0;
  }
  &__arrows {
    position: absolute;
    top: -65px;
    right: 0;
    @include medium-tablet {
      top: -62px;
    }
    @include tablet {
      top: -60px;
    }
    @include phone {
      display: none;
    }
    .wrapper {
      background: $c-white !important;
    }
  }
}
</style>
