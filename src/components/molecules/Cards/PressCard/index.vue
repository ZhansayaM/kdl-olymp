<template>
  <button class="press-card" @click="redirect">
    <img
      :src="require('@/assets/images/press/' + img)"
      :alt="img"
      class="press-card__img"
    />
    <span class="press-card__date"> {{ date }} </span>
    <RFText class="press-card__title">{{ title }}</RFText>
    <span class="press-card__description"> {{ description }} </span>
  </button>
</template>

<script>
import RFText from 'atoms/RFText/index.vue'

export default {
  name: 'PressCard',
  components: { RFText },
  props: {
    img: {
      type: String,
      default: 'Forbes.png',
    },
    title: {
      type: String,
      default: 'Новые технологии в пренатальной диагностике',
    },
    description: {
      type: String,
      default:
        'Известно ли Вам, что 21 марта это Международный день человека с синдромом Дауна? День выбран не случайно, ведь...',
    },
    date: {
      type: String,
      default: '23 ноября',
    },
    id: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    redirect() {
      this.$router.push('/about/press/news')
    },
  },
}
</script>

<style lang="scss" scoped>
.press-card {
  padding: 20px 20px 34px;
  width: 22rem;
  text-align: left;
  height: 22rem;
  border: none;
  background: $c-light-blue;
  border-radius: 8px;
  cursor: pointer;
  @include flex-column();
  @include small-laptop {
    width: 18rem;
  }
  @include medium-tablet {
    width: 14rem;
  }
  @include tablet {
    width: 16rem;
  }
  @include phone {
    width: 200px;
    height: 329px;
    padding: 10px;
  }

  &__img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: none;
    margin-bottom: 20px;
    @include phone {
      width: 73px;
      height: 73px;
      margin-bottom: 10px;
    }
  }
  &__date {
    color: $c-gray;
    @include font-size(14px, 20px);
  }
  &__title {
    margin: 10px 0;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    @include phone {
      -webkit-line-clamp: 3;
      @include font-size(16px, 22px);
    }
  }
  &__description {
    opacity: 0.7;
    -webkit-line-clamp: 4;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    @include font-size(14px, 20px);
    @include phone {
      -webkit-line-clamp: 6;
    }
  }
}
</style>
