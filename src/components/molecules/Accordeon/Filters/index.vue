<template>
  <div :class="['wrapper', show && 'open']">
    <p v-if="label" class="label">
      {{ label }}
    </p>

    <div
      :class="['drop-down', error && 'drop-down_error']"
      tabindex="0"
      @click="toggleShow"
      @blur="$emit('blur')"
    >
      <span>
        {{ options.title }}
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
        v-if="show && options.links.length"
        v-click-outside="hideShow"
        :class="['wrap-menu', label && 'is-label', { absolute: isAbsolute }]"
      >
        <perfect-scrollbar class="menu" tag="ul" :suppress-scroll-y="true">
          <li
            v-for="item in options.links"
            :key="item.id"
            :class="
              (value.id === item.id && 'selected',
              { 'filter-submenu': item.submenu })
            "
            @click="selectItem($event)"
          >
            <template v-if="item.submenu" class="filter-submenu">
              <AccordeonFilter :options="item.submenu">
                {{ item.title }}
              </AccordeonFilter>
            </template>
            <template v-else>
              {{ item.title }}
            </template>
          </li>
        </perfect-scrollbar>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AccordeonFilter from 'atoms/Accordeon/AccordeonFilter/index.vue'

/**
 * Molecules/Accordeon
 * @displayName AccordeonFilters
 */
export default Vue.extend({
  name: 'AccordeonFilters',
  components: {
    AccordeonFilter,
  },
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
      type: Object,
      default: () => {},
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    isAbsolute: {
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
      absolute: 'absolute',
    }
  },
  methods: {
    toggleShow() {
      if (!this.show && !this.options.links.length) return

      this.show = !this.show
    },
    /**
     * Скрыть меню
     */
    hideShow() {
      this.show = false
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
      setTimeout(() => this.hideShow(), 100)
    },
  },
})
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  max-width: 370px;

  .label {
    color: $c-disabled-text;
    margin-bottom: 6px;
    @include font-size(16px, 19px);
  }

  .drop-down {
    width: 370px;
    height: 70px;
    border: 1px solid $c-basic-blue;
    border-radius: 3px;
    align-items: center;
    padding: 0 24px;
    outline: none;
    background: $c-white;
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
      @include medium-tablet {
        @include font-size(16px, 18px, 500);
      }
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
  }

  .wrap-menu {
    background-color: transparent;
    width: 370px;
    border-radius: 3px;
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
      width: 100%;
    }
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
    // max-height: 800px;
    background: $c-white;
    border: 1px solid $c-basic-blue;
    border-radius: 3px;
    z-index: 1;
    padding: 12px 0;
    > ul {
      padding: 6px;
    }

    > li {
      border: 1px solid $c-white;
      color: $c-primary;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 12px 24px;
      cursor: pointer;
      transition: 0.3s;
      width: 370px;
      @include font-size(18px, 22px, 500);
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
        width: 100%;
      }
      &:hover {
        background: $c-primary;
        color: $c-white;
      }
      &.selected {
        background: $c-white;
        color: $c-dark;
      }
      .wrapper .drop-down {
        border: none;
      }
    }
  }

  &.open {
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

.filter-submenu {
  padding: 0 !important;
  background-color: $c-white !important;
}

.absolute {
  position: absolute;
}
::v-deep .wrapper .drop-down {
  padding: 12px 24px;
  border: none !important;
}
</style>
