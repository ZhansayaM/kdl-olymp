<template>
  <div class="press-news">
    <ButtonBack class="press-news__back" />
    <p class="press-news__date">{{ item.date }}</p>
    <div class="press-news__main">
      <div class="press-news__main__text">
        <RFHeading tag="h2" class="press-news__main__text__title"
          >{{ item.title }}
        </RFHeading>
        <RFText
          v-for="element in item.text"
          :key="element"
          class="press-news__main__text__info"
        >
          {{ element }}
        </RFText>
      </div>
      <div class="press-news__main__img">
        <img
          :src="require('@/assets/images/press/' + item.img)"
          :alt="item.img"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonBack from 'atoms/Button/ButtonBack/index.vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import RFText from 'atoms/RFText/index.vue'

export default {
  name: 'AboutNewsSlug',
  components: {
    ButtonBack,
    RFHeading,
    RFText,
  },
  data() {
    return {
      item: {},
    }
  },
  head() {
    return {
      title: 'Пресса о нас',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Пресса о нас',
        },
      ],
    }
  },
  created() {
    this.item =
      this.$store.state.pressNews.pressNewsData[
        this.$store.state.pressNews.pressNewsId
      ]
  },
}
</script>

<style lang="scss" scoped>
.press-news {
  padding: 50px 50px 120px;
  max-width: 1440px;
  margin: 0 auto;
  @include tablet {
    padding: 20px 20px 50px;
  }
  &__back {
    margin-bottom: 46px;
    @include phone {
      margin-bottom: 26px;
    }
  }
  &__date {
    margin-bottom: 30px;
    color: $c-gray;
    @include font-size(14px, 20px);
  }
  &__main {
    display: flex;
    gap: 40px;
    justify-content: space-between;
    @include tablet {
      flex-direction: column-reverse;
    }
    &__text {
      max-width: 50rem;
      &__title {
        margin-bottom: 20px;
        font-weight: 400;
        @include tablet {
          @include font-size(30px, 34px);
        }
        @include phone {
          @include font-size(24px, 28px);
        }
      }
      &__info {
        margin-bottom: 15px;
        @include tablet {
          margin-bottom: 10px;
        }
      }
    }
    &__img {
      width: 26rem;
      height: 16rem;
      background: $c-light-blue;
      border-radius: 8px;
      justify-content: center;
      align-items: center;
      @include flex-row();
      @include tablet {
        margin: 0 auto;
      }
      @include small-phone {
        width: 100%;
      }
      img {
        width: 168px;
        height: 168px;
      }
    }
  }
}
</style>
