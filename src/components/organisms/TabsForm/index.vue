<template>
  <div class="tabs-form">
    <RFText style-type="hint" variant="small">
      {{ label }}<span v-if="required" class="required-star">*</span>
    </RFText>
    <Tabs
      v-model="model"
      :tabs="tabs"
      :dynamics="dynamics"
      :type="type"
      :type-tab="typeTab"
      :is-link="isLink"
      :exact="exact"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RFText from 'atoms/RFText/index.vue'
import Tabs from 'molecules/Tabs/index.vue'

export default Vue.extend({
  name: 'TabsForm',
  components: { Tabs, RFText },
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
    },
    /**
     * Вид таба
     * @values primary, secondary, outline-primary
     */
    typeTab: {
      type: String,
      default: 'primary',
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
    label: {
      type: String,
      default: '',
    },
    required: {
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
.tabs-form {
  width: 100%;
  @include flex-column();

  .text {
    margin-bottom: 10px;
  }

  .required-star {
    color: $c-error;
  }
}
</style>
