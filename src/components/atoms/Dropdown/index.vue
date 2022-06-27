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
        {{ selected }}
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
        :class="['wrap-menu', label && 'is-label', position]"
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
import Vue, { PropType } from 'vue'
import PropsValidator from 'services/common/PropsValidator'

type Position = 'top' | 'bottom'
/**
 * ATOMS/DropdownBase
 * @displayName DropdownBase
 */
export default Vue.extend({
  name: 'DropdownBase',
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
      default: () => [],
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
    position: {
      type: String as PropType<Position>,
      default: 'bottom',
      validator(v: Position) {
        return PropsValidator.includes<Position>(
          ['top', 'bottom'],
          v,
          'ATOMS/DropdownBase'
        )
      },
    },
  },
  data() {
    return {
      /**
       *  Показать\скрыть меню
       */
      selected: '',
      show: false,
    }
  },
  watch: {
    value: {
      deep: true,
      handler(val) {
        // check for an already selected item case
        if (val.title !== this.selected) this.selected = val.title
      },
    },
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
      this.selected = item.title
      if (item.amount) this.$emit('price', item.amount)
      else this.$emit('change', item)
      this.hideShow()
    },
  },
})
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;

  .label {
    color: $c-disabled-text;
    margin-bottom: 6px;
    @include font-size(16px, 19px, 400);
  }

  .drop-down {
    width: 100%;
    height: 51px;
    border-radius: 4px;
    align-items: center;
    padding: 0 18px;
    position: relative;
    outline: none;
    transition: 0.3s;
    background: $c-white;
    cursor: pointer;
    @include flex-row();

    &_error {
      border-color: $c-error;
    }

    > span {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      flex: 1;
      @include font-size(16px, 19px, 400);
    }

    &.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &::after {
      content: '';
      display: block;
      width: 12px;
      height: 7px;
      flex: none;
      margin-left: 10px;
      transition: transform 0.5s ease;
      @include bg('~assets/icons/arrowDown_black.svg', center center/cover);
    }

    &:hover {
      border-color: $c-input-border-hover;

      > span {
        color: $c-dark;
      }
    }
  }

  .wrap-menu {
    background-color: transparent;
    position: absolute;
    width: 100%;
    z-index: 10;
    border-radius: 4px;
    border-top: 1px solid $c-input-border-default;
    &.is-label,
    &.bottom {
      top: 98%;
      bottom: auto;
    }
    &.top {
      bottom: 98%;
      top: auto;
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
    border-radius: 4px;

    > ul {
      padding: 6px;
    }

    > li {
      border: 1px solid $c-white;
      color: $c-dark;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 8px 18px;
      cursor: pointer;
      transition: 0.3s;
      @include font-size(16px, 24px);
      &:hover {
        background: $c-light-blue;
      }
      &.selected {
        border-color: $c-dark;
      }
    }
  }

  &.open {
    .drop-down {
      border-color: $c-input-border-active;

      > span {
        color: $c-dark;
      }
      &::after {
        transform: rotate(180deg);
        @include bg('~assets/icons/arrowDown_black.svg', center center/cover);
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
