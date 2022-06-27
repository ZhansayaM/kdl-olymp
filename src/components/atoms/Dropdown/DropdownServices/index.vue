<template>
  <div v-click-outside="hideShow" :class="['wrapper', show && 'open']">
    <p v-if="label" class="label">
      {{ label }}
    </p>

    <div
      :class="[
        'drop-down',
        !options.length && 'disabled',
        error && 'drop-down_error',
      ]"
      tabindex="0"
      @click="toggleShow"
      @blur="$emit('blur')"
    >
      <span>
        <!-- @slot выбранная options -->
        <slot></slot>
      </span>
    </div>

    <p v-if="error" class="error">
      {{ typeof error !== 'boolean' ? error : '' }}
    </p>

    <p v-if="success && !error" class="success">
      {{ typeof success !== 'boolean' ? success : '' }}
    </p>

    <transition name="fade">
      <div
        v-if="show && options.length"
        :class="['wrap-menu', label && 'is-label']"
      >
        <perfect-scrollbar class="menu" tag="ul" :suppress-scroll-y="true">
          <li
            v-for="item in options"
            :key="item.id"
            :class="value.id === item.id && 'selected'"
            @click="chooseItem(item)"
          >
            {{ item.title }}
          </li>
        </perfect-scrollbar>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

/**
 * ATOMS/DropdownBase
 * @displayName DropdownServices
 */
export default Vue.extend({
  name: 'DropdownServices',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    label: {
      type: String,
      default: '',
    },
    /**
     * Список меню
     */
    options: {
      type: Array,
      default: () => ['RU', 'QQ', 'EN'],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: [String, Boolean],
      default: '',
    },
    success: {
      type: [String, Boolean],
      default: '',
    },
    /**
     * @model
     */
    value: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      /**
       *  Показать\скрыть меню
       */
      show: false,
    }
  },
  methods: {
    toggleShow() {
      if (!this.show && !this.options.length) return

      this.show = !this.show
    },
    /**
     * Скрыть меню
     */
    hideShow() {
      this.show = false
    },
    /**
     * Выбрать option
     */
    chooseItem(item: any) {
      this.$emit('change', item)
      this.hideShow()
    },
  },
})
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  z-index: 10;

  .label {
    color: $c-disabled-text;
    margin-bottom: 6px;
    @include font-size(16px, 19px);
  }

  .drop-down {
    width: 40px;
    height: 28px;
    border: 1px solid $c-primary;
    border-radius: 4px;
    align-items: center;
    z-index: 1;
    position: relative;
    outline: none;
    transition: 0.3s;
    @include flex-row();

    &_error {
      border-color: $c-error;
    }

    > span {
      font-size: 14px;
      color: $c-primary;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      flex: 1;
      padding-left: 5px;
    }

    cursor: pointer;

    &.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &::after {
      content: '';
      display: block;
      width: 5px;
      height: 4px;
      flex: none;
      z-index: 5;
      margin-right: 5px;
      transition: transform 0.5s ease;
      @include bg('~assets/icons/droplang-arrow.svg', center center/cover);
    }
  }

  .wrap-menu {
    background-color: transparent;
    position: absolute;
    width: 40px;
    z-index: 2;
    border-radius: 4px;
    top: 0;
    &.is-label {
      top: 25px;
    }
    &.fade-enter-active {
      transition: opacity 0.3s, transform 0.2s ease;
      overflow: hidden;
    }
    &.fade-leave-active {
      overflow: hidden;
      display: none;
    }
    &.fade-enter {
      opacity: 0;
      transform: translateY(5px);
    }
  }

  .menu {
    max-height: 300px;
    background: $c-white;
    border: 1px solid $c-primary;
    border-radius: 4px;

    > ul {
      padding: 6px;
    }

    > li {
      border: 1px solid $c-white;
      color: $c-primary;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-left: 3px;
      cursor: pointer;
      transition: 0.3s;
      @include font-size(14px, 24px);

      &:hover {
        background: $c-dropdown-text-hover;
      }

      &:focus {
        color: $c-white;
        background: $c-primary;
      }
      &.selected {
        color: $c-white;
        background: $c-primary;
      }
    }
  }

  &.open {
    .drop-down {
      border: none;

      &::after {
        z-index: 5;
        transform: rotate(180deg);
        @include bg('~assets/icons/droplang-arrow.svg', center center/cover);
      }
    }
  }

  .error {
    color: $c-error;
    padding-left: 13px;
    margin-top: 14px;
    position: relative;
    @include font-size(12px, 16px);

    &::before {
      content: '';
      width: 10px;
      height: 10px;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      @include bg('~assets/icons/error.svg', center center/cover);
    }
  }

  .success {
    color: $c-success;
    padding-left: 13px;
    margin-top: 14px;
    position: relative;
    @include font-size(12px, 16px);

    &::before {
      content: '';
      width: 10px;
      height: 10px;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      @include bg('~assets/icons/success.svg', center center/cover);
    }
  }
}
</style>
