<template>
  <div
    :class="['wrapper', show && 'open', { choosemyself: choosemyself }]"
    @click="toggleShow"
    @blur="$emit('blur')"
  >
    <p v-if="label" class="label">
      {{ label }}
    </p>

    <div
      :class="[
        'drop-down',
        error && 'drop-down_error',
        { choosemyself: choosemyself },
      ]"
      tabindex="0"
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
        :class="[
          'wrap-menu',
          label && 'is-label',
          { choosemyself: choosemyself },
        ]"
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
 * Molecules/AccordionChooseMyself
 * @displayName AccordionChooseMyself
 */
export default Vue.extend({
  name: 'AccordionChooseMyself',
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
    choosemyself: {
      type: Boolean,
      default: false,
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
  max-width: 370px;
  border-bottom: 1px solid $c-secondary-gray;
  @include tablet {
    max-width: 100%;
  }
  .label {
    color: $c-disabled-text;
    margin-bottom: 6px;
    @include font-size(16px, 19px);
  }

  .drop-down {
    position: relative;
    width: 369px;
    padding: 17px 30px 17px 0;
    align-items: center;
    outline: none;
    background: $c-white;
    transition: 0.3s;
    @include flex-row();
    @include small-laptop {
      width: 300px;
    }
    @include medium-tablet {
      width: 230px;
      padding: 14px 30px 14px 0;
    }
    @include tablet {
      width: 100%;
    }
    &_error {
      border-color: $c-error;
    }

    > span {
      @include font-size(20px, 28px, 400);
      @include medium-tablet {
        @include font-size(16px, 18px, 400);
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
      top: 2em;
      right: 1em;
      position: absolute;
      transition: transform 0.5s ease;
      @include bg('~assets/icons/dropdown-arrow.svg', center center/cover);
      @include medium-tablet {
        top: 1.2em;
      }
    }
  }
  .drop-down.choosemyself {
    @include tablet {
      width: 100%;
    }
  }
  &.open.choosemyself {
    .drop-down {
      &::after {
        transform: rotate(-90deg);
        @include tablet {
          transform: rotate(180deg);
        }
      }
    }
  }

  .wrap-menu {
    width: 368px;
    border-radius: 3px;
    background: $c-white;
    z-index: 10;
    position: absolute;
    border-bottom: 1px solid $c-secondary-gray;
    @include small-laptop {
      width: 299px;
    }
    @include medium-tablet {
      width: 229px;
    }
    @include tablet {
      width: 100%;
      position: relative;
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
  .wrap-menu.choosemyself {
    left: 42vw;
    top: 32.3rem;
    width: 48rem;
    @include wide-laptop {
      left: 34vw;
    }
    @include small-laptop {
      left: 37vw;
      width: 37rem;
    }
    @include medium-tablet {
      top: 24.4rem;
      left: 35vw;
      width: 30rem;
    }
    @include tablet {
      position: static;
      width: 100%;
    }
    .menu > li {
      margin-bottom: 15px;
      width: 100%;
      @include font-size(18px, 24px, 400);
      @include medium-tablet {
        margin-bottom: 10px;
        @include font-size(14px, 20px, 400);
      }
    }
  }
  .menu {
    // max-height: 800px;
    z-index: 1;
    @include small-laptop {
      margin-bottom: 8px;
    }
    > ul {
      padding: 6px;
    }

    > li {
      color: $c-active-text;
      overflow: hidden;
      margin-bottom: 6px;
      text-overflow: ellipsis;
      cursor: pointer;
      transition: 0.3s;
      width: 368px;
      @include font-size(16px, 20px, 400);
      @include small-laptop {
        width: 299px;
      }
      @include medium-tablet {
        width: 229px;
      }
      @include tablet {
        width: 399px;
      }
      @include phone {
        width: 100%;
      }
      &.selected {
        background: $c-white;
        color: $c-dark;
      }
    }
  }

  &.open {
    .drop-down {
      > span {
        color: $c-active-text;
      }

      &::after {
        transform: rotate(180deg);
        @include bg('~assets/icons/dropdown-arrow.svg', center center/cover);
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
.wrapper.choosemyself {
  @include tablet {
    max-width: 100%;
  }
}
.filter-submenu {
  padding: 0 !important;
  background-color: $c-white !important;
}

.absolute {
  position: absolute;
}
</style>
