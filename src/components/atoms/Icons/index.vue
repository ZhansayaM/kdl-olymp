<template>
  <component
    :is="!clickable ? 'div' : 'button'"
    :class="['icons', `icons--${variant}`, clickable && 'icons--clickable']"
    @click="onClick"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import PropsValidator from 'services/common/PropsValidator'

type VariantType =
  | 'arrowRight'
  | 'basket'
  | 'bracketDown'
  | 'bracketRight'
  | 'bus'
  | 'calendarBlue'
  | 'calendar'
  | 'phoneBlue'
  | 'checkCircle'
  | 'checkMark'
  | 'download'
  | 'eye'
  | 'loop'
  | 'mapMarkerBig'
  | 'mapMarkerLittle'
  | 'person'
  | 'print'
  | 'kaspiRed'
  | 'card-pay'
  | 'close-modal'
  | 'close-gray'
  | 'close-light-gray'
  | 'conditions-disabled'
  | 'delete'
  | 'virus'
  | 'marker'
  | 'no-weekends'
  | 'no-weekends-blue'
  | 'success-green'
  | 'error'

/**
 * ATOMS/Icons
 * @displayName Icons
 */
export default Vue.extend({
  name: 'Icons',
  props: {
    variant: {
      type: String as PropType<VariantType>,
      default: 'default',
      validator(v: VariantType) {
        return PropsValidator.includes<VariantType>(
          [
            'arrowRight',
            'basket',
            'bracketDown',
            'bracketRight',
            'bus',
            'calendarBlue',
            'calendar',
            'phoneBlue',
            'checkCircle',
            'checkMark',
            'download',
            'eye',
            'loop',
            'person',
            'print',
            'mapMarkerBig',
            'mapMarkerLittle',
            'kaspiRed',
            'card-pay',
            'close-modal',
            'close-gray',
            'close-light-gray',
            'conditions-disabled',
            'delete',
            'virus',
            'marker',
            'no-weekends',
            'no-weekends-blue',
            'success-green',
            'error',
          ],
          v,
          'ATOMS/Icons'
        )
      },
    },
    clickable: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick(e: PointerEvent): void {
      this.$emit('click', e)
    },
  },
})
</script>

<style lang="scss" scoped>
$badge-font-family: $f-text;
$badge-font-weight: 400;

button {
  border: none;
  cursor: pointer;
}

.icons {
  display: inline-flex;
  width: 24px;
  height: 24px;

  &--arrowRight {
    @include bg-icon-size('arrow-right.svg', auto);
  }
  &--basket {
    @include bg-icon-size('basket.svg', auto);
  }
  &--bracketDown {
    @include bg-icon-size('bracket-down.svg', auto);
  }
  &--bracketRight {
    @include bg-icon-size('bracket-right.svg', auto);
  }
  &--bus {
    @include bg-icon-size('bus.svg', auto);
  }
  &--calendarBlue {
    @include bg-icon-size('calendar-blue.svg', auto);
  }
  &--calendar {
    @include bg-icon-size('calendar-gray.svg', auto);
  }
  &--phoneBlue {
    @include bg-icon-size('phone-blue.svg', auto, center);
  }
  &--checkCircle {
    @include bg-icon-size('check-circle.svg', auto);
  }
  &--checkMark {
    @include bg-icon-size('check-mark.svg', auto);
  }
  &--download {
    @include bg-icon-size('download.svg', auto);
  }
  &--eye {
    @include bg-icon-size('eye.svg', auto);
  }
  &--loop {
    @include bg-icon-size('loop.svg', auto);
  }
  &--mapMarkerBig {
    @include bg-icon-size('map-marker-big.svg', auto);
  }
  &--mapMarkerLittle {
    @include bg-icon-size('map-marker-little.svg', auto, center);
  }
  &--person {
    @include bg-icon-size('person.svg', auto);
  }
  &--print {
    @include bg-icon-size('print.svg', auto);
  }
  &--kaspiRed {
    @include bg-icon-size('kaspi-red.svg', 100%);

    width: 62px;
    height: 30px;
  }
  &--card-pay {
    @include bg-icon-size('card-pay.svg', 100%);

    width: 40px;
    height: 30px;
  }
  &--close-modal {
    @include bg-icon-size('close-modal.svg', 100%);

    width: 40px;
    height: 40px;
  }
  &--close-gray {
    @include bg-icon-size('close-gray.svg', 50%);

    background-position: center;
    width: 28px;
    height: 28px;
    padding: 8px;
    background-color: #fff;
    border-radius: 50%;
  }
  &--close-light-gray {
    @include bg-icon-size('close-light-gray.svg', 50%);

    background-position: center;
    width: 28px;
    height: 28px;
    padding: 8px;
    background-color: #fff;
    border-radius: 50%;
  }
  &--conditions-disabled {
    @include bg-icon-size('conditions-disabled.svg', 100%);

    width: 40px;
    height: 30px;
  }
  &--delete {
    @include bg-icon-size('delete.svg', 100%);

    width: 40px;
    height: 30px;
  }
  &--virus {
    @include bg-icon-size('virus.svg', 100%);

    width: 30px;
    height: 30px;
  }
  &--marker {
    @include bg-icon-size('marker.svg', 100%);

    width: 32px;
    height: 40px;
  }
  &--no-weekends {
    @include bg-icon-size('no-weekends.svg', 100%);

    width: 40px;
    height: 30px;
  }
  &--no-weekends-blue {
    @include bg-icon-size('no-weekends-blue.svg', 100%);

    width: 40px;
    height: 30px;
  }
  &--success-green {
    @include bg-icon-size('success-circle-green.svg', 100%);

    width: 40px;
    height: 40px;
  }
  &--error {
    @include bg-icon-size('error-circle-red.svg', 100%);

    width: 40px;
    height: 40px;
  }
}
</style>
