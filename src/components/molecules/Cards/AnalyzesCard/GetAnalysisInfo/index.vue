<template>
  <div class="info">
    <img
      :src="require('@/assets/images/' + img)"
      alt="Check sample"
      class="info__img"
    />
    <div>
      <p v-for="item in text" :key="item" class="info__text">{{ item }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

/**
 * MOLECULES/GetAnalysisInfo
 * @displayName GetAnalysisInfo
 */
export default Vue.extend({
  name: 'GetAnalysisInfo',
  props: {
    img: {
      type: String,
      default: 'check.png',
    },
    text: {
      type: Array,
      default: () => [
        'Данные для получения результатов находятся на фискальном чеке, выданном вам в нашем процедурном кабинете.',
        'Пароль можно вводить как указано на чеке (с пробелами между 3-мя цифрами), либо без пробелов.',
      ],
    },
  },
  data() {
    return {
      isBuy: false,
    }
  },
})
</script>

<style lang="scss" scoped>
.info {
  padding: 30px;
  width: 41rem;
  background: $c-light-blue;
  border-radius: 10px;
  gap: 18px;
  height: fit-content;
  @include flex-row();
  @include small-laptop {
    width: 30rem;
  }
  @include medium-tablet {
    width: 20rem;
    flex-direction: column-reverse;
  }
  @include tablet {
    width: 100%;
  }
  &__img {
    max-width: 16rem;
    height: fit-content;
    @include tablet {
      margin: 0 auto;
    }
  }
  &__text {
    color: $c-gray;
    margin-bottom: 10px;
    @include font-size(14px, 20px, 400);
  }
}
</style>
