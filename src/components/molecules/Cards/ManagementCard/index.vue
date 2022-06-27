<template>
  <div class="cards">
    <section class="cards-wrapper">
      <!-- TODO: Change link to /about/management/slug -->
      <nuxt-link :to="`/about/management/${id}`" class="cards-wrapper__btn"
        ><img :src="img" :alt="img" class="cards-wrapper__img" />
        <RFText variant="medium" class="cards-wrapper__title">{{
          title
        }}</RFText>
        <RFText
          variant="small"
          styleType="hint"
          class="cards-wrapper__subtitle"
          >{{ subtitle }}</RFText
        >
      </nuxt-link>
    </section>
  </div>
</template>

<script>
import RFText from 'atoms/RFText/index.vue'

export default {
  name: 'ManagementCard',
  components: { RFText },
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
    id: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style lang="scss" scoped>
.cards {
  &-wrapper {
    width: 291px;
    @include small-laptop {
      width: 270px;
    }
    @include tablet {
      width: 100%;
    }
    &__btn {
      text-decoration: none;
      @include tablet {
        width: 100%;
      }
    }
    &__img {
      width: 271px;
      height: 341px;
      border-radius: 5px;
      @include small-laptop {
        width: 250px;
      }
      @include tablet {
        width: 100%;
        height: 410px;
      }
      @include phone {
        height: 270px;
      }
      @include small-phone {
        height: 210px;
      }
    }
    &__title {
      padding: 10px 0 3px;
      @include tablet {
        padding: 12px 0 6px;
      }
    }
    &__title,
    &__subtitle {
      max-width: 271px;
      @include tablet {
        max-width: 100%;
      }
    }
    &__subtitle {
      @include phone {
        @include font-size(14px, 20px);
      }
    }
  }
}
</style>
