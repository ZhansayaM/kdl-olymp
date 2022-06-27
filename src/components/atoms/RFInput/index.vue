<template>
  <label
    :for="id"
    :class="[
      'rf-input',
      isError && 'rf-input--error',
      { password: type === 'password' },
    ]"
  >
    <!-- @slot slot for input label -->
    <span>
      <slot name="label" />
      <span v-if="required" class="required-star">*</span>
    </span>
    <input
      :id="id"
      ref="input"
      v-model="val"
      :type="type"
      :inputmode="type"
      :placeholder="placeholder"
      :readonly="readonly"
      :autocomplete="autocomplete"
      max="9999-12-31"
      :min="min"
      class="rf-input__field"
      :class="{ password: type === 'password' }"
      @keydown="isLetter($event)"
      @blur="$emit('change', val)"
    />
    <svg-icon
      ref="eye"
      name="password-eye"
      :class="[{ active: eyeActive }, { show: type === 'password' }]"
      @click="showPassword"
    ></svg-icon>
    <span v-if="isError" class="rf-input__message">
      <!-- @slot slot for input message -->
      <slot name="message" />
    </span>
  </label>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import PropsValidator from 'services/common/PropsValidator'

type InputType = 'text' | 'number' | 'email' | 'phone' | 'password' | 'date'

/**
 * ATOMS/RFInput
 * @displayName RFInput
 */
export default Vue.extend({
  name: 'RFInput',
  props: {
    /**
     * ID of the input field
     */
    isOnlyText: {
      type: Boolean,
      default: false,
    },
    min: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
      required: true,
    },
    /**
     * Input field type
     * @values text, number, email, phone, date
     *
     */
    type: {
      type: String as PropType<InputType>,
      default: 'text',
      validator: (v: InputType) => {
        return PropsValidator.includes<InputType>(
          ['text', 'number', 'email', 'phone', 'password', 'date'],
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
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    autocomplete: {
      type: String,
      default: 'off',
    },
  },
  data() {
    return {
      eyeActive: false,
      val: '',
    }
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
  methods: {
    showPassword() {
      this.eyeActive = !this.eyeActive
      const inputField = this.$refs.input as any
      const type =
        inputField.getAttribute('type') === 'password' ? 'text' : 'password'
      inputField.setAttribute('type', type)
    },
    isLetter(e) {
      if (this.isOnlyText) {
        const char = String.fromCharCode(e.keyCode)
        if (/^[A-Za-z]+$/.test(char) || e.keyCode === 8 || e.keyCode === 46)
          return true
        else e.preventDefault()
      }
    },
  },
})
</script>

<style lang="scss" scoped>
/** Label styles */
$label-color: $c-gray;

/** Input styles */
$input-color: $c-text;
$input-placeholder-color: $c-background;
$input-focused-border-color: $c-secondary;
$input-hover-background: $c-cards;
$input-error-color: $c-primary;

/** Message styles */
$message-font-size: rem(12);

.rf-input {
  color: $label-color;
  position: relative;
  @include flex-column();
  span {
    @include font-size(14px, 20px);
  }
  svg {
    display: none;
  }
  svg.show {
    display: block;
    position: absolute;
    width: 25.33px;
    height: 19.87px;
    right: 14.33px;
    top: 38.69px;
    opacity: 0.5;
    cursor: pointer;
  }
  svg.active {
    opacity: 1;
  }
  &__field {
    border: 1px solid $c-secondary-gray;
    box-sizing: border-box;
    border-radius: 4px;
    background: $c-white;
    padding: 13px 28px 13px 18px;
    margin-top: 3px;
    height: 50px;
    color: $c-text;
    transition: 0.25s;
    outline: none;
    @include font-size(16px, 24px);
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
  &__field.password {
    padding: 14px 45px 12px 18px;
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
input[type='date'] {
  height: 43.4px;
  width: 19rem;
  @include tablet {
    width: 14rem;
  }
  @include phone {
    width: 100%;
  }
}
input[type='date']::-webkit-calendar-picker-indicator {
  background: url('icons/date-gray.svg') no-repeat;
  width: 18.27px;
  height: 20.52px;
  cursor: pointer;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
