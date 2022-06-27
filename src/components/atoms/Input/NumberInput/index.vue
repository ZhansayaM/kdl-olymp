<template>
  <label :for="id" :class="['rf-input', isError && 'rf-input--error']">
    <!-- @slot slot for input label -->
    <slot name="label" />
    <div class="rf-input__fields">
      <button @click="decrement">-</button>
      <input
        :id="id"
        v-model="model"
        type="number"
        inputmode="number"
        :placeholder="placeholder"
        :readonly="readonly"
        class="rf-input__field"
      />
      <button @click="increment">+</button>
    </div>
    <span v-if="isError" class="rf-input__message">
      <!-- @slot slot for input message -->
      <slot name="message" />
      {{ mssg }}
    </span>
  </label>
</template>

<script lang="ts">
import Vue from 'vue'

/**
 * ATOMS/NumberInput
 * @displayName NumberInput
 */
export default Vue.extend({
  name: 'NumberInput',
  model: {
    prop: 'value',
    event: 'input',
  },
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
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      mssg: '',
    }
  },
  computed: {
    model: {
      get(): number {
        return this.value
      },
      set(value: number): void {
        /**
         * Emit the value from input field
         * @type {function}
         * @property {string} value
         */
        this.$emit('input', value)
      },
    },
  },
  methods: {
    increment() {
      this.$emit('input', +this.value + 1)
    },
    decrement() {
      this.$emit('input', +this.value - 1)
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
  &__field,
  &__fields button {
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
  &__fields {
    gap: 5px;
    @include flex-row();
    button {
      width: 58px;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type='number'] {
      -moz-appearance: textfield;
    }
  }
  &__field {
    width: 100%;
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
</style>
