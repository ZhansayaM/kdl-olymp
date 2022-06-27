<template>
  <section :class="['banner', backgroundColor]">
    <div
      class="banner-wrapper"
      :style="{ backgroundImage: `url(${background})` }"
    >
      <RFHeading tag="h2" :variant="fontType" class="title">
        {{ title }}
      </RFHeading>
      <RFHeading tag="h3" :variant="fontType" class="subtitle">
        {{ subtitle }}
      </RFHeading>
      <slot name="content" class="content" />
    </div>
  </section>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import PropsValidator from 'services/common/PropsValidator'
import RFHeading from 'atoms/RFHeading/index.vue'

type BackgroundColorType = 'light' | 'dark' | 'main'

/**
 * MOLECULES/Banner
 * @displayName Banner
 */
export default Vue.extend({
  name: 'Banner',
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
    background: {
      type: String,
      default: '',
    },
    backgroundColor: {
      type: String as PropType<BackgroundColorType>,
      default: 'dark',
      validator(v: BackgroundColorType) {
        return PropsValidator.includes<BackgroundColorType>(
          ['light', 'dark', 'main'],
          v,
          'MOLECULES/Banner'
        )
      },
    },
  },
  computed: {
    fontType() {
      switch (this.backgroundColor) {
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
.banner {
  width: 100%;
  position: relative;

  &-wrapper {
    padding: 100px 50px 60px;
    max-width: 1440px;
    margin: 0 auto;
    width: 100%;
    background-size: contain;
    background-position: 85% 50%;
    background-repeat: no-repeat;
    @include phone {
      padding: 36px 16px 30px;
    }
  }

  &.main {
    background-color: $c-blue;
  }
  &.dark {
    background-color: $c-secondary-background;
  }
  &.light {
    background-color: $c-background;
  }
}
</style>
