<template>
  <div :class="['card', cardMode]">
    <div class="content">
      <RFHeading v-if="title" tag="h4" :variant="fontType">
        {{ title }}
      </RFHeading>
      <RFHeading v-if="subtitle" tag="h5" :variant="fontType">
        {{ subtitle }}
      </RFHeading>
      <slot></slot>
    </div>
    <img v-if="img" :src="img" alt="img" />
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
    img: {
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
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 8px;
  @include flex-row();
  &.main {
    background-color: $c-blue;
  }
  &.dark {
    background-color: $c-secondary-background;
  }
  &.light {
    background-color: $c-light-blue;
  }

  .content {
    margin: 20px;
    width: 70%;
    z-index: 1;
    @include flex-column();
    @include small-phone {
      margin: 15px 0 0 10px;
      width: 100%;
    }
  }
  img {
    position: absolute;
    top: 0;
    right: 0;
    padding: 20px;
    height: 100%;
    z-index: 0;
    object-fit: contain;

    @include phone {
      max-width: 160px;
    }
  }
}
</style>
