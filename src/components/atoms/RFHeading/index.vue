<template>
  <component
    :is="tag"
    :class="['rf-heading', variant && `rf-heading--${variant}`]"
  >
    <!-- @slot default slot for content -->
    <slot />
  </component>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import PropsValidator from 'services/common/PropsValidator'

type TagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type VariantType = 'light' | 'dark'

/**
 * ATOMS/RFHeading
 * @displayName RFHeading
 */
export default Vue.extend({
  name: 'RFHeading',
  props: {
    tag: {
      type: String as PropType<TagType>,
      default: 'h1',
      validator(v: TagType) {
        return PropsValidator.includes<TagType>(
          ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
          v,
          'ATOMS/RFHeading'
        )
      },
    },
    variant: {
      type: String as PropType<VariantType>,
      default: 'dark',
      validator(v: VariantType) {
        return PropsValidator.includes<VariantType>(
          ['light', 'dark'],
          v,
          'ATOMS/RFHeading'
        )
      },
    },
  },
})
</script>

<style lang="scss" scoped>
$f-heading: 'Inter', arial, sans-serif;
$color-dark: #29294b;
$color-light: #fff;

/** H1 font styles */
$h1-font-size: rem(56);
$h1-font-weight: 500;
$h1-line-height: 62px;
$h1-margin: 20px 0;

/** H2 font styles */
$h2-font-size: rem(44);
$h2-font-weight: 500;
$h2-line-height: 48px;
$h2-margin: 15px 0;

/** H3 font styles */
$h3-font-size: rem(38);
$h3-font-weight: 500;
$h3-line-height: auto;
$h3-margin: 10px 0;

/** H4 font styles */
$h4-font-size: rem(28);
$h4-font-weight: 500;
$h4-line-height: auto;
$h4-margin: 10px 0;

/** H5 font styles */
$h5-font-size: rem(22);
$h5-font-weight: 400;
$h5-line-height: rem(32);
$h5-margin: 10px 0;

/** H6 font styles */
$h6-font-size: rem(20);
$h6-font-weight: 400;
$h6-line-height: rem(24);
$h6-margin: 10px 0;

.rf-heading {
  &--dark {
    color: $color-dark;
  }
  &--light {
    color: $color-light;
  }
}

h1.rf-heading {
  font-family: $f-heading;
  font-size: $h1-font-size;
  font-weight: $h1-font-weight;
  line-height: $h1-line-height;
  margin: $h1-margin;
  @include medium-tablet {
    @include font-size(48px, 50px, 500);
  }
  @include tablet {
    @include font-size(40px, 46px, 500);
  }
  @include phone {
    @include font-size(32px, 40px, 500);
  }
  @include small-phone {
    @include font-size(28px, 34px, 500);
  }
}
h2.rf-heading {
  font-family: $f-heading;
  font-size: $h2-font-size;
  font-weight: $h2-font-weight;
  line-height: $h2-line-height;
  margin: $h2-margin;
  @include medium-tablet {
    @include font-size(36px, 40px);
  }
  @include phone {
    @include font-size(28px, 36px);
  }
  @include small-phone {
    @include font-size(24px, 30px);
  }
}
h3.rf-heading {
  font-family: $f-heading;
  font-size: $h3-font-size;
  font-weight: $h3-font-weight;
  line-height: $h3-line-height;
  margin: $h3-margin;
  @include medium-tablet {
    font-size: 2rem;
  }
  @include tablet {
    margin: 0 0 10px 0;
  }
}
h4.rf-heading {
  font-family: $f-heading;
  font-size: $h4-font-size;
  font-weight: $h4-font-weight;
  line-height: $h4-line-height;
  margin: $h4-margin;
  @include small-laptop {
    font-size: 1.4rem;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  @include medium-tablet {
    font-size: 1.2rem;
  }
  @include tablet {
    font-size: 1.4rem;
    word-wrap: break-word;
    white-space: normal;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin: 0 0 10px 0;
  }
  @include phone {
    @include font-size(22px, 27px);
  }
  @include small-phone {
    @include font-size(18px, 22px);
  }
}
h5.rf-heading {
  font-family: $f-heading;
  font-size: $h5-font-size;
  font-weight: $h5-font-weight;
  line-height: $h5-line-height;
  margin: $h5-margin;

  @include phone {
    @include font-size(16px, 22px);
  }
}

h6.rf-heading {
  font-family: $f-heading;
  font-size: $h6-font-size;
  font-weight: $h6-font-weight;
  line-height: $h6-line-height;
  margin: $h6-margin;

  @include tablet {
    @include font-size(20px, 30px);
  }
  @include phone {
    @include font-size(18px, 26px);
  }
}
</style>
