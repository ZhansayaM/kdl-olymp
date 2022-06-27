<template>
  <label :for="id" :class="['rf-input', isError && 'rf-input--error']">
    <!-- @slot slot for input label -->
    <span>
      <slot name="label" />
      <span v-if="required" class="required-star">*</span>
    </span>
    <input
      :id="id"
      v-model="model"
      type="date"
      inputmode="date"
      :min="min"
      :max="max"
      :placeholder="placeholder"
      :readonly="readonly"
      class="rf-input__field"
    />
    <span v-if="isError" class="rf-input__message">
      <!-- @slot slot for input message -->
      <slot name="message" />
    </span>
  </label>
</template>

<script lang="ts">
import Vue from 'vue'

/**
 * ATOMS/RFDatepicker
 * @displayName RFDatepicker
 */
export default Vue.extend({
  name: 'RFDatepicker',
  props: {
    /**
     * ID of the input field
     */
    id: {
      type: String,
      default: '',
      required: true,
    },
    /**
     * Placeholder of input field
     */
    placeholder: {
      type: String,
      default: '',
    },
    /**
     * Readonly mode for input field
     */
    readonly: {
      type: Boolean,
      default: false,
    },
    /**
     * Disabled state of the input field
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Error state of the input field
     */
    isError: {
      type: Boolean,
      default: false,
    },
    /**
     * Value of the input field
     * @model
     */
    value: {
      type: [String, Date],
      default: new Date(),
    },
    required: {
      type: Boolean,
      default: false,
    },
    min: {
      type: [String, Date],
      default: undefined,
    },
    max: {
      type: [String, Date],
      default: undefined,
    },
  },
  computed: {
    model: {
      get(): string | Date {
        return this.value
      },
      set(value: string | Date): void {
        /**
         * Emit the value from input field
         * @type {function}
         * @property {string} value
         */
        this.$emit('input', value)
      },
    },
  },
})
</script>

<style lang="scss" scoped>
/** Label styles */
$label-font-size: rem(12);
$label-color: $c-gray;

/** Input styles */
$input-font-size: rem(16);
$input-color: $c-text;
$input-placeholder-color: $c-background;
$input-border-color: #ecf1f4;
$input-focused-border-color: $c-secondary;
$input-background: #fff;
$input-hover-background: $c-cards;
$input-error-color: $c-primary;

/** Message styles */
$message-font-size: rem(12);

.rf-input {
  font-size: $label-font-size;
  line-height: 20px;
  color: $label-color;
  @include flex-column();
  &__field {
    border: 1px solid $input-border-color;
    box-sizing: border-box;
    border-radius: 6px;
    background: $input-background;
    padding: 11.5px 12px;
    margin: 4px 0;
    font-size: $input-font-size;
    color: $c-text;
    transition: 0.25s;
    outline: none;
    &:hover {
      background: $input-hover-background;
    }
    &:focus {
      border-color: $input-focused-border-color;
      caret-color: $input-focused-border-color;
    }
    &::placeholder {
      color: $input-placeholder-color;
    }
  }
  &__message {
    font-size: $message-font-size;
    line-height: 20px;
    color: $input-error-color;
  }
  &--error {
    .rf-input__field {
      border-color: $input-error-color;
      &:focus {
        caret-color: $input-error-color;
      }
    }
  }
}
.required-star {
  color: $c-error;
}
</style>
