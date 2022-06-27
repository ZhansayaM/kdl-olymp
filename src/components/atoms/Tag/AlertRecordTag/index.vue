<template>
  <div :class="['tag-alert', disabled && 'disabled']">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

/**
 * ATOMS/Tag
 * @displayName AlertTag
 */
export default Vue.extend({
  name: 'TagAlertRecord',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.tag-alert {
  max-height: 58px;
  width: fit-content;
  display: inline-flex;
  align-items: center;
  background: $c-white;
  border-radius: 100px;
  color: $c-error;
  padding: 10px 15px;
  @include font-size(14px, 20px);

  &::before {
    content: '';
    width: 20px;
    height: 20px;
    display: block;
    background-image: url('@/assets/icons/alert-red.svg');
    background-repeat: no-repeat;
    background-position: 50% 50%;
    margin-right: 10px;

    > svg {
      fill: #e0e0e0;
    }
  }

  @include medium-tablet {
    height: 36px;
    font-size: 14px;
    line-height: 20px;
  }

  @include phone {
    height: fit-content;
  }

  &.disabled {
    background: $c-secondary-gray;
    color: $c-gray;
  }
}

.disabled .tag-alert::before {
  background-image: url('@/assets/icons/alert-gray.svg');
}
</style>
