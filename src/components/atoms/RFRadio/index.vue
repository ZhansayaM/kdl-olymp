<template>
  <label :for="id" class="rf-radio">
    <input
      :id="id"
      v-model="model"
      :value="value"
      :name="name"
      :disabled="disabled"
      type="radio"
      class="rf-radio__field"
    />
    <span class="rf-radio__indicator"></span>
    <span class="rf-radio__message">
      <slot />
    </span>
  </label>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

type RadioValueType = boolean | string | number

/**
 * ATOMS/RFRadio
 * @displayName RFRadio
 */
export default Vue.extend({
  name: 'RFRadio',
  model: {
    event: 'change',
    prop: 'value',
  },
  props: {
    /**
     * ID of the radio
     */
    id: {
      type: String,
      default: '',
      required: true,
    },
    /**
     * Name of the radio, that uses to group them
     */
    name: {
      type: String,
      default: '',
      required: true,
    },
    /**
     * Disabled state of the radio
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Value of the radio
     * @model
     */
    value: {
      type: [String, Number, Boolean] as PropType<RadioValueType>,
      default: '',
    },
  },
  computed: {
    model: {
      get(): RadioValueType {
        return this.value
      },
      set(value: RadioValueType): void {
        /**
         * Emit the value from radio
         * @type {function}
         * @property {RadioValueType} value
         */
        this.$emit('change', value)
      },
    },
  },
})
</script>

<style lang="scss" scoped>
.rf-radio {
  align-items: center;
  cursor: pointer;
  @include flex-row();

  span.rf-radio__indicator {
    position: relative;
    display: block;
    width: 20px;
    height: 20px;
    border: 1.5px solid $c-primary;
    border-radius: 50%;
    margin-right: 12px;
    &::before {
      position: absolute;
      content: '';
      top: 50%;
      left: 50%;
      width: 12px;
      height: 12px;
      transform: translate(-50%, -50%);
      background-color: $c-primary;
      border-radius: 50%;
      transition: 0.25s;
      opacity: 0;
    }
  }

  &__message {
    color: $c-dark;
    @include font-size(14px, 20px);
  }

  &__field {
    appearance: none;
    position: absolute;
    opacity: 0.5;
    &:checked ~ span.rf-radio__indicator::before {
      opacity: 1;
    }
    &:disabled ~ span.rf-radio__indicator {
      border-color: $c-secondary-gray;
      &::before {
        background-color: $c-secondary-gray;
      }
    }
  }
}
</style>
