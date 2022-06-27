<template>
  <div class="popular">
    <section class="popular-top">
      <RFHeading tag="h2" class="popular-top__title">{{ title }}</RFHeading>
      <template v-if="items.length > 1">
        <div class="popular-top__btn">
          <Button
            :class="['popular-top__btn-left', { 'btn-disabled': !isActive }]"
            @click="isActive = true"
            >{{ items[0].title }}</Button
          >
          <Button
            :class="['popular-top__btn-right', { 'btn-disabled': isActive }]"
            @click="isActive = false"
            >{{ items[1].title }}</Button
          >
        </div>
      </template>
    </section>

    <section class="popular-bottom">
      <vueper-slides
        class="no-shadow"
        :autoplay="false"
        :duration="5000"
        :bullets="false"
        :gap="3"
        disable-arrows-on-edges
        :visible-slides="3"
        :breakpoints="{
          1000: { visibleSlides: 2, slideMultiple: 2 },
          559: { visibleSlides: 1, slideMultiple: 1 },
        }"
        :infinite="false"
      >
        <template #arrow-left>
          <ArrowLeft :is-active="true" class="popular-top__arrows" />
        </template>
        <template #arrow-right>
          <ArrowRight :is-active="true" class="popular-top__arrows" />
        </template>
        <template v-if="isActive">
          <vueper-slide v-for="item in items[0].data" :key="item.id">
            <template #content>
              <section class="popular-wrap">
                <PopularCard
                  :title="item.title"
                  :price="item.price"
                  :old-price="item.oldPrice"
                  :tags="item.tags"
                  :is-button="true"
                  :is-added="item.added"
                  class="popular-wrap__card"
                  @clicked="item.added = !item.added"
                />
              </section>
            </template>
          </vueper-slide>
        </template>
        <template v-else>
          <vueper-slide v-for="item in items[1].data" :key="item.id">
            <template #content>
              <section class="popular-wrap">
                <PopularCard
                  :title="item.title"
                  :price="item.price"
                  :old-price="item.oldPrice"
                  :tags="item.tags"
                  :is-button="true"
                  :is-added="item.added"
                  class="popular-wrap__card"
                  @clicked="item.added = !item.added"
                />
              </section>
            </template>
          </vueper-slide>
        </template>
      </vueper-slides>
    </section>
  </div>
</template>

<script>
import PopularCard from 'molecules/Cards/PopularCard/index.vue'
import Button from 'atoms/Button/index.vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import ArrowLeft from 'atoms/ArrowLeft/index.vue'
import ArrowRight from 'atoms/ArrowRight/index.vue'
import { VueperSlides, VueperSlide } from 'vueperslides'

export default {
  name: 'Popular',
  components: {
    PopularCard,
    RFHeading,
    ArrowLeft,
    ArrowRight,
    VueperSlides,
    VueperSlide,
    Button,
  },
  props: {
    items: {
      type: Array,
      default: () => [{}],
    },
    /**
     * Показать тогл кнопки
     */
    isButton: {
      type: Boolean,
      default: true,
    },
    /**
     * Показать тогл кнопки
     */
    title: {
      type: String,
      default: 'Популярные',
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
.popular {
  max-width: 1370px;
  position: relative;

  &-wrap {
    flex-wrap: nowrap;
    @include flex-column();
  }
  &-top {
    max-width: 70vw;
    padding-bottom: 56px;
    align-items: center;
    @include flex-row();
    @include tablet {
      padding-bottom: 30px;
      flex-direction: column;
      align-items: flex-start;
    }
    @include small-phone {
      padding-bottom: 20px;
      max-width: 100%;
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
      @include small-phone {
        width: 100%;
      }
      &-left,
      &-right {
        padding: 5px 40px 7px;
        box-sizing: border-box;
        @include font-size(20px, 36px);
        @include tablet {
          padding: 17px 40px;
          width: 165px;
          @include font-size(17px, 19px);
        }
        @include phone {
          padding: 0 25px;
        }
        @include small-phone {
          width: 50%;
        }
        &:hover {
          background: $c-primary;
        }
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
    h2.rf-heading {
      margin: 0;
      font-weight: 400;
      @include tablet {
        margin-bottom: 20px;
      }
      @include small-phone {
        margin-bottom: 10px;
      }
      @include small-phone {
        @include font-size(22px, 27px);
      }
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

.cards + .cards {
  margin-left: 20px;
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
      display: none;
    }
  }
}
</style>
