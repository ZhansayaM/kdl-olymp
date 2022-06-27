<template>
  <button
    :class="[
      'button-base',
      variant && `button-base_${variant}`,
      `button-base_${size}`,
    ]"
    :disabled="disabled"
    @click="onClick"
  >
    <svg-icon
      v-if="icon && iconLeft && !iconRight"
      :name="icon"
      :class="['icon', hasSlotData && 'icon_left', { slot: hasSlotData }]"
    ></svg-icon>

    <!-- @slot title of the button -->
    <slot />

    <svg-icon
      v-if="icon && iconRight"
      :name="icon"
      :class="['icon', hasSlotData && 'icon_right']"
    ></svg-icon>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

type VariantType = 'primary' | 'secondary'
type SizeType = 'large' | 'big' | 'medium' | 'small' | 'extra-small'

/**
 * ATOMS/ButtonBase
 * @displayName ButtonBase
 */
export default Vue.extend({
  name: 'ButtonBase',
  props: {
    /**
     * Variant of appearence of the button
     * @values primary, secondary
     */
    variant: {
      type: String,
      default: 'primary',
      validator: (value: VariantType) => {
        return ['primary', 'secondary'].includes(value)
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Button size
     * @values large, big, medium, small, extra-small
     */
    size: {
      type: String,
      default: 'medium',
      validator: (value: SizeType) => {
        return ['large', 'big', 'medium', 'small', 'extra-small'].includes(
          value
        )
      },
    },
    icon: {
      type: String,
      default: '',
    },
    iconLeft: {
      type: Boolean,
      default: true,
    },
    iconRight: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    hasSlotData(): any {
      return this.$slots.default
    },
  },
  methods: {
    /**
     * Click handler of the button
     * @event click
     */
    onClick(): void {
      this.$emit('click')
    },
  },
})
</script>

<style lang="scss" scoped>
.button-base {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid $c-primary;
  border-radius: 4px;
  font-style: normal;
  font-weight: normal;
  white-space: nowrap;
  color: white;
  appearance: none;
  cursor: pointer;
  transition: 0.3s;
  &:disabled {
    background-color: $c-disabled-bg;
    border-color: $c-disabled-bg;
    color: $c-disabled-text;
    cursor: not-allowed;
    &:hover {
      background-color: $c-disabled-bg;
      border-color: $c-disabled-bg;
      color: $c-disabled-text;
    }

    .icon {
      fill: $c-disabled-text;
      stroke: $c-disabled-text;
    }
  }

  .icon {
    width: 14px;
    height: 14px;
    &.slot {
      margin-right: 5px;
    }
  }

  // variants
  &_primary {
    background: $c-primary;
    &:hover {
      background: $c-primary-lighter;
      border-color: $c-primary-lighter;
    }
    &:active {
      background: $c-primary-darker;
      border-color: $c-primary-darker;
    }

    .icon {
      fill: white;
      stroke: white;
    }
  }

  &_secondary {
    background: transparent;
    color: $c-primary;
    &:hover {
      color: $c-primary-lighter;
      border-color: $c-primary-lighter;
      .icon {
        fill: $c-primary-lighter;
        stroke: #000;
      }
    }
    &:active {
      color: $c-primary-darker;
      border-color: $c-primary-darker;
      .icon {
        fill: $c-primary-darker;
        stroke: $c-primary-darker;
      }
    }

    .icon {
      fill: $c-primary;
      stroke: $c-primary;
    }
  }

  // sizes
  &_medium {
    height: 46px;
    padding: 0 25px;
    @include font-size(18px, 28px);
    .icon {
      &_left {
        margin-right: 10px;
      }
      &_right {
        margin-left: 10px;
      }
    }
  }

  &_large {
    height: 64px;
    padding: 0 47px;
    @include font-size(20px, 28px);

    .icon {
      &_left {
        margin-right: 15px;
      }
      &_right {
        margin-left: 15px;
      }
    }
  }

  &_big {
    height: 54px;
    padding: 0 25px;
    @include font-size(24px, 30px);
    @include medium-tablet {
      @include font-size(18px, 22px);
    }
    .icon {
      &_left {
        margin-right: 10px;
      }
      &_right {
        margin-left: 10px;
      }
    }
  }

  &_small {
    height: 38px;
    padding: 0 10px;
    @include font-size(16px, 24px);
    @include tablet {
      height: 30px;
      font-size: 14px;
    }
    @include phone {
      height: 28px;
      padding: 0 8px;
    }

    .icon {
      &_left {
        margin-right: 8px;
      }
      &_right {
        margin-left: 8px;
      }
    }
  }

  &_extra-small {
    height: 28px;
    padding: 0 7px;
    @include font-size(14px, 20px);
    @include small-phone {
      padding: 0 6px;
    }
    .icon {
      &_left {
        margin-right: 8px;
      }
      &_right {
        margin-left: 8px;
      }
    }
  }
}
</style>
