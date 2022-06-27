<template>
  <p
    :class="[
      'text',
      variant && `text--${variant}`,
      styleType && `style--${styleType}`,
    ]"
  >
    <!-- @slot default slot for content -->
    <slot />
  </p>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import PropsValidator from 'services/common/PropsValidator'
type VariantType =
  | 'large'
  | 'mid'
  | 'default'
  | 'small'
  | 'medium'
  | 'xs'
  | 'xxs'
type StyleType = 'default' | 'hint' | 'error' | 'accent-blue'

/**
 * ATOMS/RFText
 * @displayName RFText
 */
export default Vue.extend({
  name: 'RFText',
  props: {
    /**
     * Variant of appearence of the text
     * @values large, mid, default, small, medium, xs, xxs
     */
    variant: {
      type: String as PropType<VariantType>,
      default: 'default',
      validator(v: VariantType) {
        return PropsValidator.includes<VariantType>(
          ['large', 'mid', 'default', 'small', 'medium', 'xs', 'xxs'],
          v,
          'ATOMS/RFText'
        )
      },
    },
    styleType: {
      type: String as PropType<StyleType>,
      default: 'default',
      validator(v: StyleType) {
        return PropsValidator.includes<StyleType>(
          ['default', 'hint', 'error', 'accent-blue'],
          v,
          'ATOMS/RFText'
        )
      },
    },
  },
})
</script>

<style lang="scss" scoped>
.text {
  &--big {
    @include font-size(34px, 41px, 500);
    @include tablet {
      @include font-size(28px, 32px);
    }
    @include phone {
      @include font-size(24px, 32px, 600);
    }
  }
  &--large {
    @include font-size(32px, 38px);
    @include tablet {
      @include font-size(28px, 32px);
    }
  }
  &--mid-big {
    @include font-size(28px, 34px);
    @include tablet {
      @include font-size(24px, 30px);
    }
    @include phone {
      @include font-size(18px, 26px);
    }
    @include small-phone {
      @include font-size(16px, 22px);
    }
  }
  &--mid {
    @include font-size(24px, 28px, 500);
    @include tablet {
      @include font-size(20px, 24px);
    }
    @include phone {
      @include font-size(18px, 22px);
    }
  }
  &--mid-avg {
    @include font-size(22px, 27px, 300);
    @include phone {
      @include font-size(20px, 32px, 400);
    }
  }
  &--default {
    @include font-size(20px, 24px);
    @include medium-tablet {
      @include font-size(18px, 24px);
    }
    @include tablet {
      @include font-size(16px, 20px);
    }
    @include small-phone {
      @include font-size(14px, 20px);
    }
  }
  &--medium {
    @include font-size(18px, 28px);
    @include tablet {
      @include font-size(16px, 20px);
    }
    @include small-phone {
      @include font-size(14px, 20px);
    }
  }
  &--small {
    @include font-size(16px, 20px);
    @include tablet {
      @include font-size(14px, 18px);
    }
    @include small-phone {
      @include font-size(12px, 16px);
    }
  }
  &--xs {
    @include font-size(14px, 18px);
    @include tablet {
      @include font-size(12px, 16px);
    }
  }
  &--xxs {
    @include font-size(12px, 16px);
  }
}
.style {
  &--default {
    color: $c-dark;
  }
  &--hint {
    color: $c-gray;
  }
  &--error {
    color: $c-error;
  }
  &--accent-blue {
    color: $c-active-text;
  }
}
</style>
