<template>
  <div class="card-outline">
    <div class="cards" :style="{ background: color }">
      <RFHeading tag="h4" class="cards__title">{{ title }}</RFHeading>
      <div class="cards__info">
        <p v-if="oldPrice" class="cards__info__old-price">{{ oldPrice }}₸</p>
        <p v-if="price" class="cards__info__price">{{ price }}₸</p>
        <p class="cards__info__time">{{ date }}</p>
      </div>
      <img
        :src="require('@/assets/images/' + img)"
        alt="img"
        class="cards__img"
      />
    </div>
    <div class="card-detail">
      <RFHeading tag="h5"> {{ detail.title }} </RFHeading>
      <RFText> {{ detail.content }} </RFText>
      <nuxt-link :to="to"> Узнать больше </nuxt-link>
    </div>
  </div>
</template>

<script>
import RFHeading from 'atoms/RFHeading/index.vue'
import RFText from 'atoms/RFText/index.vue'

export default {
  name: 'DoubleSideServiceCard',
  components: {
    RFHeading,
    RFText,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    oldPrice: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      default: 0,
    },
    date: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '#4990ed',
    },
    detail: {
      type: Object,
      default: () => {},
    },
    to: {
      type: String,
      default: '/',
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.card-outline {
  width: 100%;
  border-radius: 5px;
  border: 1px solid $c-basic-blue;
  @include flex-row();
  @include phone {
    flex-direction: column;
    width: 100%;
  }

  .cards {
    position: relative;
    min-width: 290px;
    background: $c-blue-dark;
    padding: 15px 20px;
    border-radius: 5px 0 0 5px;
    justify-content: space-between;
    @include flex-column();
    h4.rf-heading {
      margin: 0;
      color: $c-white;
      z-index: 10;
      white-space: break-spaces;
      @include font-size(20px, 28px, 400);
    }
    &__info {
      color: $c-white;
      z-index: 10;
      &__old-price {
        text-decoration-line: line-through;
        @include font-size(16px, 20px, 400);
      }
      &__time {
        @include font-size(14px, 20px, 400);
      }
      &__price {
        margin-bottom: 14px;
        @include font-size(32px, 40px, 700);
      }
    }
    img {
      position: absolute;
      z-index: 2;
      height: 80%;
      max-width: 80%;
      object-fit: contain;
      bottom: 10px;
      right: 0;
    }

    @include phone {
      min-width: 100%;
      border-radius: 5px 5px 0 0;
      h4.rf-heading {
        @include font-size(16px, 22px, 400);
      }
      &__info {
        &__price {
          margin-bottom: 14px;
          @include font-size(24px, 30px, 700);
        }
      }
    }
  }

  .card-detail {
    padding: 18px 20px;

    h5 {
      margin-bottom: 10px;
      @include font-size(20px, 28px);
    }

    p {
      margin-bottom: auto;
      @include font-size(16px, 24px);
    }

    a {
      color: $c-primary;
      text-decoration: underline;
      top: 20px;
    }

    @include phone {
      h5 {
        @include font-size(16px, 20px);
      }
      p {
        @include font-size(14px, 18px);
      }
    }
  }
}
</style>
