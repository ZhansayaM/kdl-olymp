<template>
  <div :class="['tabs', type]">
    <TabBase
      v-for="item in tabs"
      :key="item.id"
      v-model="model"
      :name="item.id"
      :type="typeTab"
      :is-link="isLink"
      :exact="exact"
      :dynamics="dynamics"
      class="tab"
    >
      {{ item.title }}
    </TabBase>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TabBase from 'atoms/Tab/index.vue'

type TypesType = 'wrap' | 'line' | 'disabled'
type TabTypesType =
  | 'primary'
  | 'secondary'
  | 'outline-primary'
  | 'disabled'
  | 'disabled-secondary'
  | 'disabled-tertiary'
  | 'quaternary'

/**
 * MOLECULES/Tabs
 * @displayName Tabs
 */
export default Vue.extend({
  name: 'Tabs',
  components: { TabBase },
  model: {
    prop: 'tab',
    event: 'change',
  },
  props: {
    dynamics: {
      type: Boolean,
      default: false,
    },
    /**
     * Массив табов
     */
    tabs: {
      type: Array,
      default: () => [],
    },
    /**
     * @model
     */
    tab: {
      type: [String, Number],
      default: '',
    },
    /**
     * Вид списка табов
     * @values wrap, line
     */
    type: {
      type: String,
      default: 'line',
      validator: (value: TypesType) => {
        return ['wrap', 'line', 'disabled'].includes(value)
      },
    },
    /**
     * Вид таба
     * @values primary, secondary, outline-primary, disabled, disabled-secondary, disabled-tertiary, quaternary
     */
    typeTab: {
      type: String,
      default: 'primary',
      validator: (value: TabTypesType) => {
        return [
          'primary',
          'secondary',
          'outline-primary',
          'disabled',
          'disabled-secondary',
          'disabled-tertiary',
          'quaternary',
        ].includes(value)
      },
    },
    isLink: {
      type: Boolean,
      default: false,
    },
    /**
     * Активный класс, совпадения по включению
     */
    exact: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    model: {
      get(): any {
        return this.tab
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
})
</script>

<style lang="scss" scoped>
.tabs {
  width: 100%;
  &.line {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    background: $c-light-blue;
    justify-content: space-evenly;
    border-radius: 6px;
    height: 56px;
    padding: 4px;
    .tab {
      width: 100%;
    }
  }

  &.wrap {
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    // :nth-child(n + 1) {
    //   margin-right: 10px;
    // }
  }
  &.disabled {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    background: $c-light-gray;
    justify-content: space-evenly;
    border-radius: 6px;
    height: 56px;
    padding: 4px;
    .tab {
      width: 100%;
    }
  }
}
</style>
