<template>
  <div v-if="show" class="modal-container">
    <button class="modal-container__close" @click="$emit('click')">
      <svg-icon :name="name" class="modal-container__close-svg"></svg-icon>
    </button>
    <!-- @slot контент -->
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

/**
 * Контейнер модалки
 * @displayName ModalContainer
 */
export default Vue.extend({
  name: 'ModalContainer',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: 'close-gray',
    },
  },
})
</script>

<style lang="scss" scoped>
.modal-container {
  width: 840px;
  background: $c-white;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  z-index: 600;
  position: relative;
  padding: 60px 0;
  animation: animModal 0.4s cubic-bezier(0.11, 0.72, 0.56, 1.28);

  &__close {
    width: 14px;
    height: 14px;
    position: absolute;
    top: -25.42px;
    right: -27.77px;
    border: none;
    cursor: pointer;
    background: transparent;
    padding: 0;
    svg {
      width: 14px;
      height: 14px;
    }
  }

  @include tablet {
    margin: 60px auto;
    min-width: 80%;
    width: 80%;
  }
}
@keyframes animModal {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
