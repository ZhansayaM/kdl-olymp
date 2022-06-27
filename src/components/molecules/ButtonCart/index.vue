<template>
  <div class="button-cart">
    <ButtonBase
      :icon="img"
      variant="secondary"
      size="extra-small"
      class="button-cart__btn"
      @click="$emit('click')"
    />

    <div v-if="count" class="button-cart__count">
      <p>{{ count }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import ButtonBase from 'atoms/Button/index.vue'

/**
 * MOLECULES/ButtonCart
 * @displayName ButtonCart
 */
export default Vue.extend({
  name: 'ButtonCart',
  components: { ButtonBase },
  props: {
    count: {
      type: Number,
      default: 0,
    },
    img: {
      type: String,
      default: 'cart',
    },
  },
})
</script>

<style lang="scss" scoped>
.button-cart {
  position: relative;
  &__btn {
    &:hover {
      background: $c-button-background;
      svg {
        stroke: $c-black;
      }
    }
  }

  &__count {
    align-items: center;
    justify-content: center;
    height: 16px;
    min-width: 16px;
    padding: 0 4px;
    border-radius: 100px;
    background: $c-yellow;
    position: absolute;
    top: -8px;
    right: -8px;
    @include flex-row();

    > p {
      font-style: normal;
      font-weight: normal;
      font-size: 11px;
      line-height: 13px;
      text-align: center;
      color: $c-white;
    }
  }
}
</style>
