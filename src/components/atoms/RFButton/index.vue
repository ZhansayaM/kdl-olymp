<template>
  <button
    :class="[
      'rf-btn',
      variant && `rf-btn--${variant}`,
      isIcon && 'rf-btn--icon',
      size && `rf-btn-size--${size}`,
    ]"
    :disabled="disabled"
    @click="onClick"
  >
    <!-- @slot title of the button -->
    <slot />
  </button>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import PropsValidator from 'services/common/PropsValidator'

type VariantType =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'outline-primary'
  | 'outline-light'
  | 'link'

type Size = 'large' | 'mid' | 'default' | 'medium' | 'small' | 'xs'

/**
 * ATOMS/RFButton
 * @displayName RFButton
 */
export default Vue.extend({
  name: 'RFButton',
  props: {
    /**
     * Variant of appearence of the button
     * @values primary, secondary, tertiary
     */
    variant: {
      type: String as PropType<VariantType>,
      default: 'primary',
      validator(v: VariantType) {
        return PropsValidator.includes<VariantType>(
          [
            'primary',
            'secondary',
            'tertiary',
            'outline-primary',
            'outline-light',
            'link',
          ],
          v,
          'ATOMS/RFButton'
        )
      },
    },
    /**
     * Size of a button
     */
    size: {
      type: String as PropType<Size>,
      default: 'default',
      validator(v: Size) {
        return PropsValidator.includes<Size>(
          ['large', 'mid', 'default', 'medium', 'small', 'xs'],
          v,
          'ATOMS/RFButton'
        )
      },
    },
    /**
     * Diabled state of the button
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Loading state of the button
     */
    loading: {
      type: Boolean,
      default: false,
    },
    /**
     * Flag to use when some icon is coming to slot
     */
    isIcon: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    /**
     * Click handler of the button
     * @event click
     * @property {PointerEvent} e
     */
    onClick(e: PointerEvent): void {
      this.$emit('click', e)
    },
  },
})
</script>

<style lang="scss" scoped>
/* Disabled colors */
$c-disabled-background: #fafcfe;
$c-disabled-color: #c3c3ca;

/* Primary variant colors */
$c-primary-background: #31b0ed;
$c-primary-hover: #145fc2;
$c-primary-active: #063572;
$c-primary-color: #fff;

/* Secondary variant colors */
$c-secondary-background: #c5dcfa;
$c-secondary-hover: #145fc2;
$c-secondary-active: #063572;
$c-secondary-color: #31b0ed;

/* Tertiary variant colors */
$c-tertiary-background: #fff;
$c-tertiary-hover: #145fc2;
$c-tertiary-active: #063572;
$c-tertiary-color: #1672eb;

/* Outline primary colors */
$c-outline-primary-background: transparent;
$c-outline-primary-hover: #145fc2;
$c-outline-primary-active: #063572;
$c-outline-primary-color: #31b0ed;

/* Outline light colors */
$c-outline-light-background: transparent;
$c-outline-light-hover: #c5dcfa;
$c-outline-light-active: #c5dcfa;
$c-outline-light-color: #fff;

/* Link button colors */
$c-link-background: transparent;
$c-link-hover: #145fc2;
$c-link-active: #063572;
$c-link-color: #1672eb;

.rf-btn {
  appearance: none;
  cursor: pointer;
  transition: 0.25s;
  border: 1px solid transparent;
  border-radius: 8px;
  &:disabled {
    background-color: $c-disabled-background;
    color: $c-disabled-color;
    &:hover {
      background-color: $c-disabled-background;
    }
  }
  &--primary {
    background: $c-primary-background;
    color: $c-primary-color;
    &:hover {
      background: $c-primary-hover;
    }
    &:active {
      background: $c-primary-active;
    }
  }
  &--secondary {
    background: $c-secondary-background;
    color: $c-secondary-color;
    &:hover {
      color: $c-secondary-hover;
    }
    &:active {
      color: $c-secondary-active;
    }
  }
  &--tertiary {
    background: $c-tertiary-background;
    color: $c-tertiary-color;
    &:hover {
      color: $c-tertiary-hover;
    }
    &:active {
      color: $c-tertiary-active;
    }
  }
  &--outline-primary {
    background: $c-outline-primary-background;
    color: $c-outline-primary-color;
    border: 1px solid $c-outline-primary-color;
    &:hover {
      color: $c-outline-primary-hover;
    }
    &:active {
      color: $c-outline-primary-active;
    }
  }
  &--outline-light {
    background: $c-outline-light-background;
    color: $c-outline-light-color;
    border: 1px solid $c-outline-light-color;
    &:hover {
      color: $c-outline-light-hover;
    }
    &:active {
      color: $c-outline-light-active;
    }
  }
  &--link {
    background: $c-link-background;
    color: $c-link-color;
    border: none;
    text-decoration: underline;
    text-align: start;
    padding: 0 !important;
    &:hover {
      color: $c-link-hover;
    }
    &:active {
      color: $c-link-active;
    }
  }
  &--icon {
    padding: 19px;
  }
  &-size {
    &--large {
      padding: 18px 20px;
      @include font-size(32px, 38px);

      @include tablet {
        @include font-size(28px, 32px);
      }
    }
    &--mid {
      padding: 14px 16px;
      @include font-size(24px, 38px);

      @include tablet {
        @include font-size(20px, 24px);
      }
    }
    &--default {
      padding: 12px 14px;
      @include font-size(20px, 24px);

      @include tablet {
        @include font-size(16px, 20px);
      }
    }
    &--medium {
      padding: 12px 14px;
      @include font-size(18px, 28px);
      @include small-laptop {
        @include font-size(16px, 18px);
      }
      @include phone {
        @include font-size(14px, 20px);
      }
    }
    &--small {
      padding: 10px 12px;
      @include font-size(16px, 20px);

      @include tablet {
        @include font-size(14px, 18px);
      }
    }
    &--xs {
      padding: 8px 10px;
      @include font-size(14px, 18px);

      @include tablet {
        @include font-size(12px, 16px);
      }
    }
  }
}
</style>
