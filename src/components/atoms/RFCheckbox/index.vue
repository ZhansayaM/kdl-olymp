<template>
  <label :for="id" class="rf-checkbox">
    <input
      :id="id"
      v-model="model"
      :disabled="disabled"
      type="checkbox"
      class="rf-checkbox__field"
    />
    <span class="rf-checkbox__indicator"></span>
    <span class="rf-checkbox__text">
      <!-- @slot slot for checkbox label -->
      <slot />
    </span>
  </label>
</template>

<script lang="ts">
import Vue from 'vue'

/**
 * ATOMS/RFCheckbox
 * @displayName RFCheckbox
 */
export default Vue.extend({
  name: 'RFCheckbox',
  model: {
    event: 'change',
    prop: 'value',
  },
  props: {
    /**
     * ID of the checkbox
     */
    id: {
      type: String,
      default: '',
      required: true,
    },
    /**
     * Disabled state of the checkbox
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Value of the checkbox
     * @model
     */
    value: {
      type: Boolean,
      default: false,
    },
    /**
     * Adds a red star indicator to a required field
     */
    required: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    model: {
      get(): boolean {
        return this.value
      },
      set(value: boolean): void {
        /**
         * Emit the value from checkbox
         * @type {function}
         * @property {boolean} value
         */
        this.$emit('change', value)
      },
    },
  },
})
</script>

<style lang="scss" scoped>
.rf-checkbox {
  align-items: flex-start;
  cursor: pointer;
  @include flex-row();

  span.rf-checkbox__indicator {
    position: relative;
    display: block;
    width: 20px;
    min-width: 20px;
    height: 20px;
    min-height: 20px;
    border: 1.5px solid $c-primary;
    border-radius: 2px;
    margin-right: 12px;
    transition: 0.3s ease;
    &::before {
      content: '';
      opacity: 0;
      position: absolute;
      top: 1px;
      left: 50%;
      width: 4px;
      height: 9px;
      margin-left: -3px;
      border: solid $c-white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      transition: all 0.3s ease;
    }
  }

  &__text {
    color: $c-dark;
    @include font-size(14px, 17px);
  }

  &__field {
    appearance: none;
    position: absolute;
    opacity: 0.5;
    &:checked ~ span.rf-checkbox__indicator {
      background: $c-primary;

      &::before {
        opacity: 1;
      }
    }
    &:disabled ~ span.rf-checkbox__indicator {
      background: $c-light-gray;
      border-color: $c-input-border-default;

      &::before {
        border-color: $c-border-gray;
      }
    }
  }
}
</style>
