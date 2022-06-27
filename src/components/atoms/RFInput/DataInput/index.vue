<template>
  <label :for="id" :class="['data-input', isError && 'data-input--error']">
    <!-- @slot slot for input label -->
    <template>
      <p>
        {{ title }}
        <span v-if="isImportant" class="data-input__need-red">*</span>
      </p>
    </template>
    <input
      :id="id"
      v-model="model"
      v-mask="isMask"
      :type="type"
      :inputmode="type"
      :placeholder="placeholder"
      :readonly="readonly"
      class="data-input__field"
    />
    <span v-if="isError" class="data-input__message">
      <!-- @slot slot for input message -->
      <template> {{ error }} </template>
    </span>
  </label>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import PropsValidator from 'services/common/PropsValidator'

type InputType = 'text' | 'number' | 'email' | 'phone' | 'password' | 'number'

/**
 * ATOMS/DataInput
 * @displayName DataInput
 */
export default Vue.extend({
  name: 'DataInput',
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
     * Input field type
     * @values text, number, email, phone
     */
    type: {
      type: String as PropType<InputType>,
      default: 'text',
      validator: (v: InputType) => {
        return PropsValidator.includes<InputType>(
          ['text', 'number', 'email', 'phone', 'password', 'number'],
          v,
          'ATOMS/RFInput'
        )
      },
    },
    /**
     * Placeholder of input field
     */
    placeholder: {
      type: String,
      default: '-',
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
      type: String,
      default: '',
    },
    isImportant: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
    /* Устанавливает маску */
    isMask: {
      type: String,
      default: null,
    },
  },
  computed: {
    model: {
      get(): string {
        return this.value
      },
      set(value: string): void {
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
$label-color: rgba($c-dark, 0.25);

/** Input styles */
$input-font-size: rem(16);
$input-color: $c-text;
$input-placeholder-color: $c-background;
$input-focused-border-color: $c-secondary;
$input-background: #fff;
$input-hover-background: $c-cards;
$input-error-color: $c-primary;

/** Message styles */
$message-font-size: rem(12);

.data-input {
  font-size: $label-font-size;
  line-height: 20px;
  color: $label-color;
  @include flex-column();

  > p {
    color: $c-input-label-text;
  }

  &__need-red {
    color: $c-error;
  }
  &__field {
    border: 1px solid $c-input-border-default;
    box-sizing: border-box;
    border-radius: 6px;
    background: $input-background;
    padding: 18px 13px;
    margin: 4px 0;
    font-size: $input-font-size;
    color: $c-dark;
    transition: 0.25s;
    outline: none;
    width: 420px;
    min-height: 50px;

    &:hover {
      background: $input-hover-background;
    }
    &:focus {
      border-color: $input-focused-border-color;
      caret-color: $input-focused-border-color;
    }
    &::placeholder {
      color: $c-disabled-text;
    }
  }
  &__message {
    display: inline-block;
    font-size: $message-font-size;
    line-height: 20px;
    color: $c-error;
    min-width: 300px;
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
