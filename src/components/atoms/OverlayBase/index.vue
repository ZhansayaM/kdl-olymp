<template>
  <div :class="['overlay', !show && 'hide']">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'OverlayBase',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: $c-black-shade;
  z-index: 2000;
  align-items: center;
  justify-content: center;
  @include flex-row();

  &.hide {
    display: none;
  }
}
</style>
