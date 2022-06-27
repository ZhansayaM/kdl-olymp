<template>
  <label class="rf-textarea">
    <p v-if="title" class="label-text">{{ title }}</p>

    <textarea
      v-model="model"
      :placeholder="placeholder"
      :class="isError && 'error-input'"
      @blur="$emit('blur')"
    ></textarea>

    <p :class="['message', isError && 'error']">{{ message }}</p>
  </label>
</template>

<script lang="ts">
import Vue from 'vue'

/**
 * Элемент TextArea
 * @displayName RFTextArea
 */
export default Vue.extend({
  name: 'RFTextArea',
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    /**
     * placeholder input
     */
    placeholder: {
      type: String,
      default: '',
    },
    /**
     * Подпись
     */
    title: {
      type: String,
      default: '',
    },
    /**
     * @model
     */
    value: {
      type: String,
      default: '',
    },
    /**
     * Error state of the input field
     */
    isError: {
      type: Boolean,
      default: false,
    },
    /**
     * Поле ввода
     */
    message: {
      type: String,
      default: '',
    },
  },
  computed: {
    /**
     * Свойство для v-model
     */
    model: {
      get(): String {
        return this.value
      },
      set(newValue: String): void {
        this.$emit('input', newValue)
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

.rf-textarea {
  width: 100%;
  display: block;

  .label-text {
    font-size: $label-font-size;
    line-height: 20px;
    color: $label-color;
    margin-bottom: 8px;
  }

  textarea {
    width: 100%;
    min-height: 124px;
    border: 1px solid $input-border-color;
    box-sizing: border-box;
    border-radius: 6px;
    background: $input-background;
    padding: 11.5px 12px;
    margin: 4px 0;
    font-size: $input-font-size;
    line-height: 19px;
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

  .message {
    margin: 0;
    margin-top: 8px;
    font-size: $message-font-size;
    line-height: 20px;
    &.error {
      color: $input-error-color;
      &:focus {
        caret-color: $input-error-color;
      }
    }
  }
}
</style>
