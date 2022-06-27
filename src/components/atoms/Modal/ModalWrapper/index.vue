<template>
  <div class="modal-wrapper">
    <!-- @slot содержимое -->
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

/**
 * Обертка модалки
 * @displayName ModalWrapper
 */
export default Vue.extend({
  name: 'ModalWrapper',
})
</script>

<style lang="scss" scoped>
.modal-wrapper {
  align-items: center;
  justify-content: center;
  z-index: 1500;
  background: $m-background-modal;
  @include flex-row();
  @include size(100%);
  @include fixed(0, 0, 0, 0);

  @include tablet {
    display: block;
    overflow: auto;
  }
}
</style>
