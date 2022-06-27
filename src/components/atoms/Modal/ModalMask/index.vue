<template>
  <div v-if="show" class="modal-mask" @click="$emit('click')"></div>
</template>

<script lang="ts">
import Vue from 'vue'

/**
 * Маска модалки
 * @displayName ModalMask
 */
export default Vue.extend({
  name: 'ModalMask',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.modal-mask {
  background: black;
  z-index: 500;
  opacity: 0.2;
  animation: animMask 0.5s;
  @include fixed(0, 0, 0, 0);
  @include size(100%);
}
@keyframes animMask {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.2;
  }
}
</style>
