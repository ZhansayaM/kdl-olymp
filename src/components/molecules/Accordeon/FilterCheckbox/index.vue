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
        <!-- @slot выбранная options -->
        {{ options.title }}
      </span>
    </div>

    <transition name="fade">
      <ul v-if="show" :class="['wrap-menu', label && 'is-label']">
        <li
          v-for="(item, index) in options.links"
          :key="item.id"
          :class="
            (value.id === item.id && 'selected',
            { 'filter-submenu': item.submenu })
          "
          @click="selectItem($event)"
        >
          <template v-if="options.isCheckbox">
            <RFCheckbox
              :id="'checkbox' + options.id + item.id"
              :v-model="'checkbox' + options.id + item.id"
            >
              {{ item.title }}
            </RFCheckbox>
          </template>

          <template v-else>
            <RFRadio
              :id="'radio' + index"
              :value="'radio' + index"
              name="radio"
              @change="radioHandler"
            >
              {{ item.title }}
            </RFRadio></template
          >
        </li>
      </ul>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RFCheckbox from 'atoms/RFCheckbox/index.vue'
import RFRadio from 'atoms/RFRadio/index.vue'

/**
 * Molecules/Accordeon
 * @displayName FilterCheckbox
 */
export default Vue.extend({
  name: 'FilterCheckbox',
  components: {
    RFCheckbox,
    RFRadio,
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
      default: () => ({}),
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
      radioPicked: '',
    }
  },
  methods: {
    radioHandler(v: string) {
      this.radioPicked = v
    },
    toggleShow() {
      this.show = !this.show
    },
    hideShow() {
      this.show = false
    },
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
  position: relative;
  max-width: 370px;
  @include phone {
    max-width: 100%;
  }
  .label {
    color: $c-disabled-text;
    margin-bottom: 6px;
    @include font-size(16px, 19px);
  }

  .drop-down {
    /* width: 100%; */
    width: 368px;
    box-sizing: border-box;
    height: 70px;
    border: 1px solid $c-basic-blue;
    border-radius: 3px;
    align-items: center;
    padding: 0 18px;
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
      width: 100%;
      height: 50px;
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
      @include phone {
        @include font-size(14px, 20px);
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
    width: 368px;
    border: 1.5px solid $c-basic-blue;
    border-radius: 3px;
    padding: 26px 0 40px 30px;
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
      padding: 14px 18px;
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

    > li {
      list-style-type: none;
    }

    > li + li {
      padding-top: 20px;
    }
  }

  .menu {
    // max-height: 800px;
    background: $c-white;
    border: 1px solid $c-input-border-default;
    border-radius: 3px;
    z-index: 1;

    > ul {
      padding: 6px;
    }

    > li {
      border: 1px solid $c-white;
      color: $c-primary;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 8px 18px;
      cursor: pointer;
      transition: 0.3s;
      @include font-size(18px, 22px, 500);

      &:hover {
        background: $c-primary;
        color: $c-white;
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
        color: $c-primary;
      }
      &::after {
        transform: rotate(180deg);
        @include bg('~assets/icons/filter-arrow-blue.svg', center center/cover);
      }
    }
  }
}

// стили для чекбоксов

::v-deep {
  .rf-checkbox__text,
  .rf-radio__message {
    max-width: 250px;
    color: $c-primary;
    @include font-size(16px, 20px);
    @include medium-tablet {
      max-width: 175px;
    }
    @include tablet {
      max-width: 300px;
    }
    @include phone {
      max-width: 90%;
      color: $c-dark-blue;
      @include font-size(14px, 20px);
    }
  }
}
</style>
