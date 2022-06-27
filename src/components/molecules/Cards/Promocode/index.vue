<template>
  <div class="card">
    <div class="card__text">
      <p class="card__text__description">{{ description }}</p>
      <button @click="$router.push(link)" class="card__text__btn">
        {{ btn }}
      </button>
    </div>
    <img :src="require('@/assets/images/' + img)" alt="img" />
  </div>
</template>

<script>
export default {
  name: 'Promocode',
  props: {
    description: {
      type: String,
      default: '',
    },
    btn: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  background: radial-gradient(
    65.99% 154.98% at 97.54% -14.14%,
    #31b0ed 0%,
    #0087cb 100%
  );
  border-radius: 8px;
  position: relative;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  @include flex-row();
  @include tablet {
    width: 100%;
  }
  @include phone {
    padding: 20px 15px;
  }
  &__text {
    margin-bottom: 20px;
    z-index: 10;
    @include small-phone {
      text-align: center;
    }
    &__description {
      color: $c-white;
      min-height: 112px;
      margin-bottom: 30px;
      @include font-size(18px, 28px);
      @include small-laptop {
        min-height: 168px;
      }
      @include medium-tablet {
        width: 75%;
        @include font-size(16px, 24px);
      }
      @include tablet {
        width: 100%;
        min-height: auto;
      }
      @include small-phone {
        text-align: left;
        width: 84%;
      }
    }
    &__btn {
      border: 1px solid $c-white;
      padding: 15.5px 12px 16.5px 12px;
      background: none;
      box-sizing: border-box;
      outline: none;
      text-decoration: none;
      border-radius: 4px;
      color: $c-white;
      cursor: pointer;
      @include font-size(16px, 24px);
      @include medium-tablet {
        padding: 10px 12px;
        @include font-size(14px, 20px);
      }
    }
  }
  img {
    max-width: 30%;
    height: fit-content;
    @include medium-tablet {
      position: absolute;
      top: 10px;
      right: 10px;
    }
    @include tablet {
      position: relative;
    }
    @include small-phone {
      position: absolute;
    }
  }
}
</style>
