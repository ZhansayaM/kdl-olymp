<template>
  <div class="additional">
    <label class="additional__label" :for="id"> {{ label }} </label>
    <div class="additional__input">
      <input
        :id="id"
        v-model="num"
        type="number"
        class="additional__input__field"
      />
      <div class="additional__input__var">
        <p>{{ variable }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

/* Footer сайта */

export default Vue.extend({
  name: 'InputAdditional',
  props: {
    id: {
      type: Number,
      default: 0,
    },
    label: {
      type: String,
      default: 'Кол-во рабочих дней в месяце',
    },
    variable: {
      type: String,
      default: 'дней',
    },
  },
  data() {
    return {
      num: 0,
    }
  },
})
</script>

<style lang="scss" scoped>
.additional {
  display: flex;
  flex-direction: column;
  &__input {
    position: relative;
    width: 26.25rem;
    &__field {
      width: 26.25rem;
      background: #fff;
      border: 1px solid #e0e0e0;
      box-sizing: border-box;
      border-radius: 6px;
      padding: 13.5px 17px;
      outline: none;
      @include font-size(16px, 24px, 400);
      &:hover {
        background: $c-cards;
      }
      &:focus {
        border-color: $c-secondary;
      }
    }
    &__var {
      position: absolute;
      width: 65px;
      height: 100%;
      top: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f8f8f8;
      border: 1px solid #e0e0e0;
      box-sizing: border-box;
      border-radius: 0 6px 6px 0;
      p {
        color: $c-gray;
        @include font-size(16px, 24px, 400);
      }
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  &__label {
    margin-bottom: 6px;
    color: $c-gray;
    @include font-size(16px, 19px, 400);
  }
}
</style>
