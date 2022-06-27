<template>
  <div class="blocks">
    <div class="blocks__address">
      <div class="blocks__address__row">
        <svg-icon name="map-marker-little"></svg-icon>
        <span>{{ room.address }}</span>
      </div>
      <div class="blocks__address__row">
        <svg-icon name="phone-blue"></svg-icon>
        <span>{{ room.phone }}</span>
      </div>
      <div class="blocks__address__features">
        <svg-icon name="calendar 77"></svg-icon>
        <svg-icon name="card-pay"></svg-icon>
        <svg-icon name="virus"></svg-icon>
        <svg-icon name="kaspi-red"></svg-icon>
      </div>
    </div>
    <div class="blocks__info">
      <div class="blocks__time-titles">
        <span>{{ room.take }}</span>
        <span>{{ room.get }}</span>
        <br />
        <span>{{ room.break }}</span>
      </div>
      <div class="blocks__weekdays">
        <span class="blocks__weekdays__title">{{ room.weekdays }}</span>
        <br />
        <span>{{ room.weekdaysTimetake }}</span>
        <span>{{ room.weekdaysTimeget }}</span>
        <br />
        <span>{{ room.breakTimeWeekdays }}</span>
      </div>
      <div class="blocks__weekend1">
        <span class="blocks__weekend1__title">{{ room.weekend1 }}</span>
        <br />
        <span>{{ room.weekend1Timetake }}</span>
        <span>{{ room.weekend1Timeget }}</span>
        <br />
        <span>{{ room.breakTimeWeekend }}</span>
      </div>
      <div class="blocks__weekend2">
        <span class="blocks__weekend2__title">{{ room.weekend2 }}</span>
        <br />
        <span>{{ room.weekend2Timetake }}</span>
        <span>{{ room.weekend2Timeget }}</span>
        <br />
        <br />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
/**
 * 'PAGES/Main'
 * @displayName ProceduralBlocks
 */
export default Vue.extend({
  name: 'ProceduralBlocks',
  props: {
    room: {
      type: Object,
      default: () => {},
    },
  },
})
</script>

<style lang="scss" scoped>
.blocks {
  margin: 34px 0 73px 0;
  display: flex;
  gap: 20px;
  @include small-laptop {
    gap: 10px;
  }
  @include medium-tablet {
    display: block;
  }
  @include tablet {
    display: none;
  }
  &__info {
    > div {
      background: #f2fbff;
      border-radius: 10px;
      padding: 30px;
      @include small-laptop {
        padding: 20px;
      }
    }

    display: flex;
    gap: 20px;
    @include small-laptop {
      gap: 10px;
    }
  }
  &__address {
    background: #f2fbff;
    border-radius: 10px;
    padding: 30px;
    @include small-laptop {
      padding: 20px;
    }
    @include medium-tablet {
      margin-bottom: 20px;
      width: 369px;
    }
    &__row {
      display: flex;
      align-items: center;
      margin-bottom: 13px;
      svg {
        width: 15px;
        height: 15px;
        margin-right: 14px;
      }
      span {
        color: #29294b;
        @include font-size(18px, 28px, 400);
      }
    }
    &__row:nth-child(2) {
      margin-bottom: 47px;
      span {
        color: #31b0ed;
      }
    }
    &__features {
      display: flex;
      align-items: center;
      svg {
        opacity: 0.5;
        width: 20px;
        height: 20px;
        margin-right: 20px;
      }
      svg:last-child {
        width: 42px;
      }
    }
  }
  &__time-titles {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    span {
      color: #29294b;
      @include font-size(16px, 24px, 400);
      @include small-laptop {
        margin-bottom: 5px;
        @include font-size(14px, 18px, 400);
      }
      @include medium-tablet {
        margin-bottom: 0;
      }
    }
  }
  &__weekdays,
  &__weekend1,
  &__weekend2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    span {
      @include font-size(16px, 24px, 400);
      @include small-laptop {
        @include font-size(14px, 18px, 400);
      }
    }
    &__title {
      @include font-size(16px, 24px, 600!important);
    }
  }
}
</style>
