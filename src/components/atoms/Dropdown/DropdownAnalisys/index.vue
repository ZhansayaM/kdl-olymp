<template>
  <div v-click-outside="hideShow" :class="['wrapper', show && 'open']">
    <p v-if="label" class="label">
      {{ label }}
    </p>

    <div
      :class="['drop-down', !subtitle.length && 'disabled']"
      tabindex="0"
      @click="toggleShow"
    >
      <span>
        <!-- @slot выбранная options -->
        <slot></slot>
      </span>
    </div>

    <transition name="fade">
      <div
        v-if="show && subtitle.length"
        :class="['wrap-menu', label && 'is-label']"
      >
        <perfect-scrollbar class="menu" tag="ul" :class="{ effect: isEffects }">
          <li v-for="(value, index) in subtitle" :key="index">
            {{ value.text }}
          </li>
        </perfect-scrollbar>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

/**
 * ATOMS/DropdownAnalysis
 * @displayName DropdownAnalysis
 */
export default Vue.extend({
  name: 'DropdownAnalysis',
  props: {
    label: {
      type: String,
      default: '',
    },
    /**
     * Описание
     */
    subtitle: {
      type: Array,
      default: () => [{}],
    },
    /**
     * Описание
     */
    isEffects: {
      type: Boolean,
      default: true,
    },
    /**
     * Если пустой
     */
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      /**
       *  Показать\скрыть описание
       */
      show: false,
    }
  },
  methods: {
    toggleShow() {
      if (!this.show && !this.subtitle.length) return

      this.show = !this.show
    },
    /**
     * Скрыть описание
     */
    hideShow() {
      this.show = false
    },
  },
})
</script>

<style lang="scss" scoped>
.wrapper {
  z-index: 10;

  .label {
    color: $c-disabled-text;
    margin-bottom: 6px;
    @include font-size(16px, 19px);
  }

  .drop-down {
    max-width: 800px;
    width: 100%;
    height: 51px;
    border-radius: 4px;
    align-items: center;
    padding: 0 18px;
    z-index: 1;
    position: relative;
    outline: none;
    transition: 0.3s;
    color: $c-dark;
    @include flex-row();
    @include font-size(20px, 30px);

    > span {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      flex: 1;
    }

    cursor: pointer;

    &.disabled {
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
      @include bg('~assets/icons/dropdown-arrow.svg', center center/cover);
    }

    &:hover,
    &:active {
      border-color: $c-primary;

      &::after {
        @include bg(
          '~assets/icons/dropdown-arrow-blue.svg',
          center center/cover
        );
      }

      > span {
        color: $c-primary;
      }
    }
  }

  .wrap-menu {
    background-color: transparent;
    max-width: 800px;
    width: 100%;
    z-index: 1;
    border-radius: 4px;
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

    > ul {
      padding: 6px;
      color: $c-dark;
    }

    > li {
      color: $c-dark;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 8px 18px;
      transition: 0.3s;
      pointer-events: none;
      @include font-size(16px, 24px);
    }
  }

  &.open {
    > svg {
      fill: $c-primary !important;
    }
    .drop-down {
      border-color: $c-primary;

      > span {
        color: $c-primary;
      }

      &::after {
        transform: rotate(180deg);
        @include bg(
          '~assets/icons/dropdown-arrow-blue.svg',
          center center/cover
        );
      }
    }
  }
}

.effect {
  list-style-type: disc;
}
</style>
