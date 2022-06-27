<template>
  <div class="card">
    <!-- TODO: Change link to /about/innovations-and-equipment/slug -->
    <nuxt-link
      :to="`/about/innovations-and-equipment/${id}`"
      class="card__img-wrap"
    >
      <img :src="img" alt="Equipment" class="cards-wrapper__img" />
    </nuxt-link>
    <p class="card__title">{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: 'EquipmentCard',
  props: {
    title: {
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
.card {
  width: 271px;
  @include medium-tablet {
    width: clamp(180px, 213px, 220px);
    height: clamp(180px, 213px, 220px);
  }
  @include phone {
    width: 100%;
    text-align: center;
  }
  &__img-wrap {
    width: 85%;
    height: 75%;
    outline: none;
    background: none;
    cursor: pointer;
    border: 1px solid $c-basic-blue;
    box-sizing: border-box;
    border-radius: 5px;
    margin-bottom: 10px;
    justify-content: center;
    align-items: center;
    @include flex-row();
    @include phone {
      margin: 0 auto 10px auto;
    }
    img {
      max-width: 85%;
      max-height: 85%;
    }
  }
  &__title {
    @include font-size(18px, 28px, 400);
    @include medium-tablet {
      @include font-size(16px, 20px, 400);
    }
    @include phone {
      @include font-size(14px, 20px, 400);
    }
  }
}
</style>
