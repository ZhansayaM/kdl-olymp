<template>
  <nuxt-link
    v-if="isLink"
    :to="{ name }"
    :exact="exact"
    :class="[type]"
    @click.native="$emit('change')"
  >
    <!-- @slot текст таба -->
    <slot></slot>
  </nuxt-link>

  <label
    v-else
    :class="[
      value == name && 'active',
      type,
      current === name && 'active',
      { dynamic: dynamics },
    ]"
  >
    <input :id="name" v-model="model" type="radio" :value="name" />
    <!-- @slot текст таба -->
    <slot></slot>
  </label>
</template>

<script lang="ts">
import Vue from 'vue'

type TabTypesType = 'primary' | 'secondary' | 'outline-primary' | 'disabled'

/**
 * ATOMS/TabBase
 * @displayName TabBase
 */
export default Vue.extend({
  name: 'TabBase',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    dynamics: {
      type: Boolean,
      default: false,
    },
    /**
     * значение input
     */
    name: {
      type: [String, Number],
      default: '',
    },
    /**
     * Value of the tab
     * @model
     */
    value: {
      type: [String, Number],
      default: '',
    },
    /**
     * Вид таба
     * @values primary, secondary, outline-primary, disabled
     */
    type: {
      type: String,
      default: 'primary',
      validator: (value: TabTypesType) => {
        return ['primary', 'secondary', 'outline-primary', 'disabled'].includes(
          value
        )
      },
    },
    /**
     * Ссылка, либо чекбокс
     */
    isLink: {
      type: Boolean,
      default: false,
    },
    /**
     * Активный класс, совпадения по включению
     * работает если isLink = true
     */
    exact: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      current: '',
    }
  },
  computed: {
    model: {
      get(): any {
        return this.value
      },
      set(newValue: any): void {
        /**
         * Назначит активный таб
         * @event change
         * @property {string} newValue new value set
         */
        this.$emit('change', newValue)
      },
    },
  },
  watch: {
    '$store.state.tabs.tabsActive'() {
      this.current = this.$store.state.tabs.tabsActive
    },
  },
  mounted() {
    this.$store.commit(
      'tabs/changeTabsActive',
      localStorage.getItem('last') || ''
    )
    this.current = this.$store.state.tabs.tabsActive
  },
  beforeDestroy() {
    localStorage.setItem('last', this.$store.state.tabs.tabsActive)
  },
})
</script>

<style lang="scss" scoped>
label,
a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  border: 1px solid;
  border-radius: 6px;
  padding: 0 14px;
  cursor: pointer;
  @include font-size(20px, 28px);
  &.dynamic {
    height: 37px;
    @include font-size(16px, 19px);
  }
  &.primary {
    background: transparent;
    border-color: transparent;
    color: $c-dark;
  }

  &.secondary {
    background: transparent;
    border-color: transparent;
    color: $c-dark;
  }

  &.outline-primary {
    background: $c-white;
    border-color: $c-primary;
    color: $c-primary;
  }

  &.disabled {
    background: $c-white;
    border-color: transparent;
    color: $c-gray;
  }
  &.disabled-secondary {
    background: transparent;
    border-color: transparent;
    color: $c-gray;
  }
  &.disabled-tertiary {
    background: transparent;
    border-color: transparent;
    color: $c-gray;
  }
  &.quaternary {
    background: transparent;
    border-color: $c-light-blue;
    color: $c-light-blue;
  }
  > input {
    width: 0;
    height: 0;
    position: absolute;
    opacity: 0;
    visibility: hidden;
  }

  @include medium-tablet {
    height: 40px;
    @include font-size(14px, 19px);
  }
  &.active,
  &.nuxt-link-active {
    &.primary {
      background: $c-primary;
      border-color: $c-primary;
      color: $c-white;
    }

    &.secondary {
      background: $c-white;
      border-color: transparent;
      color: $c-primary;
      box-shadow: none;
    }

    &.outline-primary {
      background: $c-primary;
      border-color: $c-primary;
      color: $c-white;
    }

    &.disabled {
      background: $c-light-gray;
      border-color: transparent;
      color: $c-gray;
    }
    &.disabled-secondary {
      background: $c-white;
      border-color: transparent;
      color: $c-gray;
    }
    &.disabled-tertiary {
      background: $c-white;
      border-color: $c-secondary-gray;
      color: $c-secondary-gray;
    }
    &.quaternary {
      background: transparent;
      border-color: $c-light-blue;
      color: $c-primary;
    }
  }
}
</style>
