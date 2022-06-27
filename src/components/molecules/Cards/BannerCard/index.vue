<template>
  <Button class="cards" @click="$router.push(link)">
    <section v-if="isBig" class="cards-big">
      <RFHeading tag="h4">{{ title }}</RFHeading>
      <RFHeading tag="h5">{{ subtitle }}</RFHeading>
      <img :src="require('@/assets/images/' + img)" alt="img" />
    </section>
    <section v-else class="cards-little">
      <img
        :src="require('@/assets/images/' + img)"
        alt="img"
        class="cards-little__img"
      />
      <RFHeading tag="h4">{{ title }}</RFHeading>
    </section>
  </Button>
</template>

<script>
import RFHeading from 'atoms/RFHeading/index.vue'

export default {
  name: 'Card',
  components: {
    RFHeading,
  },
  props: {
    title: {
      type: String,
      default: 'Анализы и цены',
    },
    link: {
      type: String,
      default: '/',
    },
    subtitle: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: 'banner-card.png',
    },
    isBig: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.cards {
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  &-big {
    max-height: 474px;
    width: 100%;
    height: 100%;
    position: relative;
    @include medium-tablet {
      max-height: 100%;
    }

    h4.rf-heading {
      position: absolute;
      margin: 20px 0 0 20px;
      @include small-phone {
        margin: 10px 0 0 10px;
      }
    }
    h5.rf-heading {
      position: absolute;
      margin: 56px 0 0 20px;
      @include small-phone {
        margin: 37px 0 0 10px;
        opacity: 0.5;
        @include font-size(14px, 17px);
      }
    }
    img {
      height: 474px;
      @include laptop {
        width: 600px;
        height: 433px;
      }

      @include small-laptop {
        height: 328px;
        width: 450px;
      }

      @include wide-tablet {
        width: 420px;
        height: 309px;
      }

      @include medium-tablet {
        width: 100%;
        height: 100%;
      }
    }
  }

  &-little {
    width: 100%;
    height: 217px;
    background: $c-blue;
    padding: 20px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    @include laptop {
      height: 100%;
      .rf-heading.rf-heading--dark {
        overflow: visible;
      }
    }
    @include phone {
      padding: 10px;
    }
    h4.rf-heading {
      width: 100px;
      font-weight: 400;
      text-align: left;
      @include small-laptop {
        margin: 0;
        z-index: 1;
        position: relative;
      }
      @include medium-tablet {
        width: 100%;
      }
      @include small-phone {
        @include font-size(16px, 19px);
      }
    }
    img {
      position: absolute;
      bottom: 5px;
      right: 5px;
      @include laptop {
        width: 50%;
        height: fit-content;
        right: 0;
      }
      @include medium-tablet {
        height: 90%;
        width: fit-content;
        right: 10px;
      }
      @include phone {
        height: 80%;
      }
    }
  }
}
</style>
