<template>
  <input
    v-model="model"
    type="search"
    :placeholder="placeholder"
    :autocomplete="autocomplete"
  />
</template>

<script>
export default {
  model: {
    event: 'input',
    props: 'value',
  },
  props: {
    /**
     * Содержимое для v-model
     * @model
     */
    value: {
      type: [String, Number],
      default: '',
    },
    autocomplete: {
      type: String,
      default: 'off',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit('input', newValue)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
input {
  width: 100%;
  height: 100%;
  @include font-size(24px, 32px);

  /* color: #8296a9; */

  padding: 16px;
  border: 1px solid $c-secondary-gray;
  border-radius: 8px;
  background-color: transparent;
  outline: none;
  background-image: url('icons/search.svg');
  background-repeat: no-repeat;
  background-position: 17px 21px;
  text-indent: 34px;
  &:focus {
    border: 1px solid $c-primary;
  }
  @include small-laptop {
    background-position: 10px 20px;
    text-indent: 20px;
    @include font-size(22px, 24px);
  }
  @include medium-tablet {
    @include font-size(18px, 20px);
  }
  @include tablet {
    padding: 15.6px;
    background-position: 9px 16px;
    @include font-size(17px, 19px);
  }
  @include phone {
    background-position: 7px 15px;
    text-indent: 20px;
  }
  @include small-phone {
    text-indent: 25px;
    padding: 15.6px 14px 15.6px 10px;
  }
}
</style>
