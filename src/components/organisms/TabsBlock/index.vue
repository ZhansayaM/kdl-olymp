<template>
  <div class="about-block">
    <div class="about-block__inner">
      <slot name="heading" />
      <Tabs
        v-model="selectedTab"
        :tabs="tabs"
        class="about-block__inner__tabs"
        :class="{ analysis: analysis }"
        type="wrap"
        type-tab="outline-primary"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Tabs from 'molecules/Tabs/index.vue'

export default Vue.extend({
  name: 'TabsBlock',
  components: {
    Tabs,
  },
  props: {
    tabs: {
      type: Array,
      default: () => [],
    },
    analysis: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedTab: '',
    }
  },
  watch: {
    selectedTab(val) {
      this.$emit('selectedTab', val)
    },
  },
})
</script>

<style lang="scss" scoped>
.about-block {
  height: 22rem;
  justify-content: flex-end;
  background-color: $c-secondary-background;
  @include flex-column();
  @include phone {
    height: auto;
  }
  &__inner {
    padding: 100px 50px 60px;
    max-width: 1440px;
    margin: 0 auto;
    width: 100%;
    @include phone {
      padding: 36px 16px 30px;
    }
    &__tabs.analysis {
      width: 40%;
      @include wide-tablet {
        width: 100%;
      }
    }
    &__tabs {
      width: 65%;
      @include wide-tablet {
        width: 100%;
      }
      ::v-deep .outline-primary {
        background: $c-secondary-background;
        border-color: $c-white;
        color: $c-white;
      }
      ::v-deep .active {
        background: $c-white !important;
        color: $c-secondary-background !important;
      }
    }
  }
}
</style>
