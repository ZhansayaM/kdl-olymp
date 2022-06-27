<template>
  <div class="tag-alert-activate">
    <p class="tag-alert-activate__text">
      Можно активировать до {{ active }}
      <br />
      После активации действует до {{ valid }}
    </p>
  </div>
</template>

<script>
import Vue from 'vue'

/**
 * ATOMS/Tag/AlertActivateTag
 * @displayName AlertActivateTag
 */
export default Vue.extend({
  name: 'AlertActivateTag',
  props: {
    active: {
      type: String,
      default: '',
    },
    valid: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
.tag-alert-activate {
  max-height: 78px;
  max-width: 420px;
  width: 100%;
  background: $c-alert-tag;
  border-radius: 5px;
  color: $c-dark;
  padding: 18px 30px;
  @include font-size(14px, 20px);

  @include wide-tablet {
    max-height: max-content;
  }
}
</style>
