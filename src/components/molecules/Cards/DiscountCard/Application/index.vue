<template>
  <div class="discount-application">
    <span class="discount-application__date"> {{ date }} </span>
    <p class="discount-application__number">№{{ number }}</p>
    <span class="discount-application__name"> {{ name }} </span>
    <div class="discount-application__price">
      <p>{{ price }} ₸</p>
      <button :class="ready ? 'show' : 'wait'">
        {{ ready ? 'Посмотреть результат' : 'Ожидание результатов' }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

/**
 * MOLECULES/DiscountCard/Application
 * @displayName Application
 */
export default Vue.extend({
  name: 'Application',
  props: {
    date: {
      type: String,
      default: '',
    },
    number: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      default: 0,
    },
    ready: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.discount-application {
  border: 1px solid $c-basic-blue;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 28px 30px 24px 30px;
  width: 100%;
  @include phone {
    padding: 28px 16px;
  }
  &__date,
  &__name {
    color: $c-light-gray-text;
  }
  &__date {
    @include font-size(14px, 20px);
  }
  &__number {
    margin: 18px 0 10px 0;
    @include font-size(20px, 28px);
    @include phone {
      margin-bottom: 14px;
      @include font-size(22px, 27px);
    }
  }
  &__name {
    @include font-size(16px, 24px);
  }
  &__price {
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    gap: 10px;
    @include flex-row();
    p {
      @include font-size(20px, 24px, 600);
      @include phone {
        @include font-size(22px, 27px);
      }
    }
    @include small-phone {
      align-items: flex-start;
      gap: 24px;
      margin-top: 30px;
      flex-direction: column;
    }
    button.show {
      color: $c-primary;
      padding: 6.5px 20px 7.5px 20px;
      background: $c-white;
      border: 1px solid $c-primary;
      box-sizing: border-box;
      border-radius: 4px;
      cursor: pointer;
      @include font-size(16px, 24px);
      @include phone {
        padding: 10px;
      }
      @include small-phone {
        width: 100%;
        @include font-size(14px, 20px);
      }
    }
    button.wait {
      color: $c-light-gray-text;
      padding: 6.5px 17.5px 7.5px 17.5px;
      background: $c-light-gray;
      border-radius: 4px;
      border: none;
      @include font-size(16px, 24px);
      @include phone {
        border-radius: 100px;
        padding: 6px 15px 8px;
      }
      @include small-phone {
        @include font-size(14px, 20px);
      }
    }
  }
}
</style>
