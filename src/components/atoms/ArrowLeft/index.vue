<template>
  <div class="wrapper">
    <span class="arrow" :class="className" :isActive="isActive" @click="click">
      <svg
        width="16"
        height="28"
        viewBox="0 0 16 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.1265 26.2667L1.86664 13.9632L14.1333 1.73333"
          :stroke="isActive ? '#31B0ED' : '#DAEDFF'"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
  </div>
</template>

<script>
export default {
  name: 'ButtonArrow',
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    className() {
      return {
        isActive: this.isActive,
      }
    },
  },
  methods: {
    click() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  background: transparent;
  cursor: pointer;
  span {
    padding: 0 25px;
    @include medium-tablet {
      padding: 15px 25px 0 25px;
    }
    @include tablet {
      padding: 0 20px;
    }
    @include small-phone {
      padding: 0 15px 0 0;
    }
  }
}
.isActive {
  path {
    stroke: $c-primary;
  }
}
</style>
