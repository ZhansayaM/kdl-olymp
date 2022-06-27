<template>
  <div class="button-cart">
    <ButtonBase :icon="img" size="extra-small" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import ButtonBase from 'atoms/Button/index.vue'

/**
 * MOLECULES/BurgerMenu
 * @displayName BurgerMenu
 */
export default Vue.extend({
  name: 'BurgerMenu',
  components: { ButtonBase },
  props: {
    img: {
      type: String,
      default: 'burger',
    },
  },
})
</script>
<style lang="scss" scoped>
.button-cart {
  display: none;
  @include medium-tablet {
    display: inline-block;
  }
}
</style>
