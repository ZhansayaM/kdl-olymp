<template>
  <div :class="['tag', disabled && 'disabled']">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

/**
 * ATOMS/Tag
 * @displayName Tag
 */
export default Vue.extend({
  name: 'Tag',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.tag {
  height: 38px;
  display: inline-flex;
  align-items: center;
  background: $c-basic-blue;
  border-radius: 100px;
  font-size: 16px;
  line-height: 24px;
  color: $c-dark;
  padding: 0 15px;
  white-space: nowrap;

  @include small-laptop {
    font-size: 15px;
    line-height: 20px;
  }
  @include medium-tablet {
    height: 36px;
    font-size: 14px;
    line-height: 20px;
  }
  @include tablet {
    font-size: 13px;
    line-height: 16px;
  }
  @include phone {
    font-size: 14px;
  }

  &.disabled {
    background: #e0e0e0;
    color: #8296a9;
  }
}
</style>
