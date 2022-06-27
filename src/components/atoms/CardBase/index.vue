<template>
  <div class="card_base">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'CardBase',
})
</script>

<style lang="scss" scoped>
.card_base {
  background: $c-white;
  border-radius: 10px;
  padding: 25px 34px 33px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 0;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @include flex-row();
  @include medium-tablet {
    padding: 30px 16px;
  }
}
</style>
