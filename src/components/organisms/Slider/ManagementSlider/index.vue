<template>
  <div class="manag">
    <section class="manag-top">
      <RFHeading tag="h2">Руководство</RFHeading>
    </section>

    <div class="manag-bottom">
      <vueper-slides
        class="no-shadow"
        :autoplay="false"
        :duration="5000"
        disable-arrows-on-edges
        :bullets="false"
        :infinite="false"
        :visible-slides="4"
        :breakpoints="{
          1235: { visibleSlides: 3, slideMultiple: 1 },
          1000: { visibleSlides: 2, slideMultiple: 1 },
        }"
      >
        <template #arrow-left>
          <ArrowLeft :is-active="true" class="manag-top__arrows" />
        </template>
        <template #arrow-right>
          <ArrowRight :is-active="true" class="manag-top__arrows" />
        </template>

        <vueper-slide v-for="item in items" :key="item.id">
          <template #content>
            <section class="manag-wrap">
              <ManagementCard
                :id="item.attributes.id"
                :title="item.attributes.name"
                :subtitle="item.attributes.leadership"
                :img="item.attributes.image_path"
                class="manag-wrap__card"
              />
            </section>
          </template>
        </vueper-slide>
      </vueper-slides>
    </div>
    <div class="manag_grid">
      <ManagementCard
        v-for="item in items"
        :id="item.attributes.id"
        :key="item.attributes.id"
        :title="item.attributes.name"
        :subtitle="item.attributes.leadership"
        :img="item.attributes.image_path"
        class="manag-wrap__card"
      />
    </div>
  </div>
</template>

<script>
import ManagementCard from 'molecules/Cards/ManagementCard/index.vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import ArrowLeft from 'atoms/ArrowLeft/index.vue'
import ArrowRight from 'atoms/ArrowRight/index.vue'
import { VueperSlides, VueperSlide } from 'vueperslides'

export default {
  name: 'ManagementSlider',
  components: {
    ManagementCard,
    RFHeading,
    ArrowLeft,
    ArrowRight,
    VueperSlides,
    VueperSlide,
  },
  props: {
    items: {
      type: Array,
      default: () => [{}],
    },
  },
  data() {
    return {
      isActive: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.manag {
  max-width: 1440px;
  position: relative;
  margin: 0 auto;
  &-wrap {
    flex-wrap: nowrap;
    @include flex-column();
  }
  &-top {
    padding-bottom: 40px;
    @include phone {
      padding-bottom: 28px;
    }
    h2.rf-heading {
      margin: 0;
      font-weight: 400;
      @include phone {
        @include font-size(22px, 27px);
      }
    }
    &__arrows {
      justify-content: center;
      align-items: center;
      @include flex-row();
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
  &-bottom {
    @include tablet {
      display: none;
    }
  }
  &_grid {
    display: none;
    @include tablet {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 22px;
      grid-column-gap: 10px;
    }
  }
}

::v-deep .vueperslides {
  &__track {
    overflow: hidden;
    z-index: 1;
    &-inner {
      transition: transform 0.5s ease-in-out;
      height: 100%;
      align-self: center;
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
    top: -2px;
    right: -1px;
  }
}

::v-deep .wrapper span {
  padding: 15px;
  @include small-phone {
    padding: 15px 2px;
  }
}
</style>
