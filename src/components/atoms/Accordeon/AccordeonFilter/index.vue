<template>
  <div :class="['wrapper', isShow && 'open-wrap']">
    <div
      :class="['drop-down', error && 'drop-down_error']"
      tabindex="0"
      @click="toggleShow"
      @blur="$emit('blur')"
    >
      <span>
        <!-- @slot выбранная options -->
        <slot></slot>
      </span>
    </div>

    <transition name="fade">
      <div
        v-if="isShow && options.length"
        :class="['wrap-menu', label && 'is-label', { 'is-open': isShow }]"
      >
        <perfect-scrollbar class="menu" tag="ul" :suppress-scroll-y="true">
          <li
            v-for="item in options"
            :key="item.id"
            class="list-items"
            @click="selectItem($event)"
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
 * ATOMS/Accordeon
 * @displayName AccordeonFilter
 */
export default Vue.extend({
  name: 'AccordeonFilter',
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
  },
  data() {
    return {
      /**
       *  Показать\скрыть меню
       */
      isShow: false,
      /**
       *  Выбор элемента на класс .selected
       */
      isSelect: false,
    }
  },
  methods: {
    toggleShow() {
      if (!this.isShow && !this.options.length) return

      this.isShow = !this.isShow
    },
    /**
     * Скрыть меню
     */
    hideShow() {
      this.isShow = false
    },
    /**
     * Выбрать option
     */
    chooseItem(item: any) {
      this.$emit('change', item)
      this.hideShow()
    },
    selectItem(event: any) {
      const items = document.getElementsByClassName('selected')
      const item = event.target

      if (items.length > 0) {
        for (let i = 0; i <= items.length; i++) {
          items[i].classList.remove('selected')
        }
      }
      item.classList.add('selected')
    },
  },
})
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;

  .drop-down {
    width: 100%;
    height: 100%;
    align-items: center;
    padding: 8px 18px;
    outline: none;
    transition: 0.3s;
    @include flex-row();
    @include small-laptop {
      width: 300px;
    }
    @include medium-tablet {
      width: 230px;
    }
    @include tablet {
      width: 400px;
    }
    @include phone {
      width: 300px;
    }
    @include small-phone {
      width: 240px;
    }
    &_error {
      border-color: $c-error;
    }

    > span {
      color: $c-primary;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      flex: 1;
      @include font-size(18px, 22px, 500);
    }

    cursor: pointer;

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
      @include bg('~assets/icons/filter-arrow-blue.svg', center center/cover);
    }

    &:hover {
      > span {
        color: $c-white !important;
      }

      background-color: $c-primary;
    }
  }

  .wrap-menu {
    background-color: transparent;
    width: 100%;
    z-index: 0;
    border-radius: 4px;
    padding-top: 5px;
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
    max-height: 500px;
    background: $c-white;

    > ul {
      padding: 6px;
    }

    > li {
      border: 1px solid $c-white;
      color: $c-primary;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 8px 30px;
      cursor: pointer;
      transition: 0.3s;
      @include font-size(18px, 22px, 500);

      &:hover {
        background: $c-primary;
        color: $c-white;
      }
      &.selected {
        background: $c-white !important;
        color: $c-dark !important;
      }
    }
  }

  &.open-wrap {
    .drop-down {
      > span {
        color: $c-primary;
      }
      &::after {
        transform: rotate(180deg);
        @include bg('~assets/icons/filter-arrow-blue.svg', center center/cover);
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

.is-open {
  background-color: $c-white !important;
}
</style>
