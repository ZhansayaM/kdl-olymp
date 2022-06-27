<template>
  <div
    v-click-outside="hide"
    class="main"
    :class="{ left: side === 'left' }"
    :style="[
      side === 'left'
        ? { top: position[0] - 2 + 'em', left: checkLeft }
        : { top: position[0] - 2 + 'em', left: checkRight },
    ]"
  >
    <p class="main__title">{{ data.title }}</p>
    <div v-for="item in data.links" :key="item" class="main__links">
      <a href="#"> {{ item.title }} </a>
    </div>
    <Button class="main__close" @click="$emit('close')">
      <svg-icon name="close-gray"></svg-icon>
    </Button>
    <div
      class="main__small-square"
      :style="[
        side === 'right'
          ? { right: leftPoint, left: rightPoint, top: 2 + 'em' }
          : { left: leftPoint, right: rightPoint, top: 2 + 'em' },
      ]"
    ></div>
  </div>
</template>
<script>
export default {
  name: 'BodyModal',
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
    position: {
      type: Array,
      default: () => [{}],
    },
    side: {
      type: String,
      default: 'right',
    },
  },
  data() {
    return {
      mq: {
        bigLaptop: '(max-width: 2560px)',
        smallLaptop: '(max-width: 1285px)',
        mediumTablet: '(max-width: 1000px)',
        tablet: '(max-width: 780px)',
      },
    }
  },
  mq: {
    bigLaptop: '(max-width: 2560px)',
    smallLaptop: '(max-width: 1285px)',
    mediumTablet: '(max-width: 1000px)',
    tablet: '(max-width: 780px)',
  },
  computed: {
    checkLeft() {
      if (this.mq.mediumTablet) return this.position[1] + 1 + 'em'
      else if (this.mq.smallLaptop) return this.position[1] - 23 + 'em'
      return this.position[1] - 30 + 'em'
    },
    checkRight() {
      if (this.mq.tablet) return this.position[1] - 16 + 'em'
      else if (this.mq.mediumTablet) return this.position[1] - 23 + 'em'
      return this.position[1] + 1 + 'em'
    },
    leftPoint() {
      if (this.mq.mediumTablet) return -0.4 + 'em'
      return 'auto'
    },
    rightPoint() {
      if (this.mq.mediumTablet) return 'auto'
      return -0.4 + 'em'
    },
  },
  mounted() {
    this.mq = this.$mq
  },
  methods: {
    hide() {
      this.$emit('close')
    },
  },
}
</script>
<style lang="scss" scoped>
.main {
  background: $c-light-blue;
  box-shadow: 0 4px 4px rgba(0, 126, 187, 0.13),
    0 0 10px rgba(0, 103, 155, 0.24);
  border-radius: 20px;
  padding: 30px 30px 50px 30px;
  box-sizing: border-box;
  width: 30rem;
  z-index: 100;
  position: absolute;
  @include small-laptop {
    padding: 20px 20px 40px 20px;
    width: 23rem;
  }
  @include tablet {
    width: 16rem;
  }
  @include phone {
    position: fixed;
    width: 25rem;
    left: calc(50% - 12.5rem) !important;
    top: calc(35%) !important;
  }
  @include small-phone {
    padding: 15px;
    width: 20rem;
    left: calc(50% - 10rem) !important;
  }
  &__title {
    margin-bottom: 19px;
    max-width: 94%;
    @include font-size(24px, 32px, 400);
    @include small-laptop {
      margin-bottom: 10px;
      @include font-size(22px, 24px, 400);
    }
    @include tablet {
      max-width: 85%;
    }
  }
  &__links {
    a {
      color: $c-active-text;
      margin-bottom: 5px;
      text-decoration: none;
      @include font-size(18px, 25px, 400);
      @include small-laptop {
        @include font-size(16px, 20px, 400);
      }
    }
  }
  &__close {
    position: absolute;
    width: 40px;
    height: 40px;
    background: $c-white;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    top: 13px;
    right: 13px;
    border: none;
    outline: none;
    cursor: pointer;
    @include flex-row();
    @include small-phone {
      width: 30px;
      height: 30px;
    }
    svg {
      width: 13px;
      height: 13px;
      opacity: 0.7;
    }
  }
  &__small-square {
    width: 14px;
    height: 14px;
    background: $c-light-blue;
    transform: rotate(45deg);
    position: absolute;
    @include phone {
      display: none;
    }
  }
}
</style>
