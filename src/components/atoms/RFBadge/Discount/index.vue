<template>
  <div :class="['discount-badge', `discount-badge--${variant}`]">
    <span class="discount-badge__value"> -{{ value }}%</span>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import PropsValidator from 'services/common/PropsValidator'

type VariantType = 'big' | 'little'

/**
 * ATOMS/discount bage
 * @displayName DiscountBage
 */
export default Vue.extend({
  name: 'DiscountBage',
  props: {
    variant: {
      type: String as PropType<VariantType>,
      default: 'default',
      validator(v: VariantType) {
        return PropsValidator.includes<VariantType>(
          ['big', 'little'],
          v,
          'ATOMS/RFBadge/discount'
        )
      },
    },
    /**
     * Discount value in badge
     */
    value: {
      type: Number,
      default: 10,
    },
  },
})
</script>

<style lang="scss" scoped>
$badge-font-family: $f-text;
$badge-font-weight: 400;

.discount-badge {
  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 100px;
  font-family: $badge-font-family;
  font-weight: $badge-font-weight;
  line-height: 1.75;
  transition: 0.25s;

  &--big {
    background: $c-yellow;
    border-color: $c-yellow;
    color: $c-dark-blue;
    @include size(140px, 140px);

    @include phone {
      max-height: 120px;
      height: 100%;
      width: max-content;
      padding: 0 14px;
    }

    > span {
      @include font-size(44px, 48px);

      @include phone {
        @include font-size(18px, 26px);
      }
    }
  }
  &--little {
    background: $c-yellow;
    border-color: $c-yellow;
    color: $c-dark-blue;
    @include size(60px, 60px);

    > span {
      @include font-size(18px, 24px, 600);
    }
  }
}
</style>
