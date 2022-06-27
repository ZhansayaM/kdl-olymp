<template>
  <div :class="['card', cardMode]">
    <RFHeading v-if="title" tag="h4" :variant="fontType">
      {{ title }}
    </RFHeading>
    <RFHeading v-if="subtitle" tag="h5" :variant="fontType">
      {{ subtitle }}
    </RFHeading>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import PropsValidator from 'services/common/PropsValidator'
import RFHeading from 'atoms/RFHeading/index.vue'

type Style = 'light' | 'dark' | 'main'

export default Vue.extend({
  name: 'Card',
  components: {
    RFHeading,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    cardMode: {
      type: String as PropType<Style>,
      default: 'dark',
      validator(v: Style) {
        return PropsValidator.includes<Style>(
          ['light', 'dark', 'main'],
          v,
          'MOLECULES/Banner'
        )
      },
    },
  },
  data() {
    return {}
  },
  computed: {
    fontType() {
      switch (this.cardMode) {
        case 'light':
          return 'dark'
        case 'main':
          return 'dark'
        case 'dark':
          return 'light'
        default:
          return ''
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  padding: 20px;
  @include flex-row();

  @include small-phone {
    padding: 15px;
  }

  &.main {
    background-color: $c-light-blue;
  }
  &.dark {
    background-color: $c-secondary-background;
  }
  &.light {
    background-color: $c-background;
  }
}
</style>
