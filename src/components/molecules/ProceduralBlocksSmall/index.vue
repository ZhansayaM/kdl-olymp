<template>
  <div
    class="blocks-small"
    :class="{ disabled: room.status === 'Временно не работает' }"
  >
    <span class="blocks-small__title">
      {{ room.title }}
    </span>
    <span class="blocks-small__status">
      {{ room.status }}
    </span>
    <div class="blocks-small__list">
      <NuxtAddress
        :class="{ disabledFill: room.status === 'Временно не работает' }"
      />
      <p>
        {{ room.address }}
      </p>
    </div>
    <div class="blocks-small__list">
      <NuxtPhone
        :class="{ disabledFill: room.status === 'Временно не работает' }"
      />
      <p>
        {{ room.phone }}
      </p>
    </div>
    <div class="blocks-small__list">
      <NuxtDate
        :class="{ disabledFill: room.status === 'Временно не работает' }"
      />
      <div>
        <p>
          {{ room.weekdays }}
        </p>
        <p>
          {{ room.take }} <span>{{ room.weekdaysTimetake }}</span>
        </p>
        <p>
          {{ room.get }} <span>{{ room.weekdaysTimeget }}</span>
        </p>
        <p>
          {{ room.break }} <span>{{ room.breakTimeWeekdays }}</span>
        </p>
        <br />
        <p>
          {{ room.weekend1 }}
        </p>
        <p>
          {{ room.take }} <span>{{ room.weekend1Timetake }}</span>
        </p>
        <p>
          {{ room.get }} <span>{{ room.weekend1Timeget }}</span>
        </p>
        <p>
          {{ room.break }} <span>{{ room.breakTimeWeekend }}</span>
        </p>
        <br />
        <p>
          {{ room.weekend2 }}
        </p>
        <p>
          <span>
            {{ room.weekend2Time }}
          </span>
        </p>
      </div>
    </div>
    <div class="blocks-small__features">
      <svg-icon
        :class="{ disabled: room.status === 'Временно не работает' }"
        name="calendar 77"
      ></svg-icon>
      <svg-icon
        :class="{ disabled: room.status === 'Временно не работает' }"
        name="card-pay"
      ></svg-icon>
      <svg-icon
        :class="{ disabled: room.status === 'Временно не работает' }"
        name="virus"
      ></svg-icon>
      <svg-icon
        :class="{ disabled: room.status === 'Временно не работает' }"
        name="kaspi-red"
      ></svg-icon>
    </div>
    <div class="blocks-small__buttons">
      <Button class="blocks-small__buttons__show">Показать на карте</Button>
      <Button class="blocks-small__buttons__more">Подробнее</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NuxtPhone from 'icons/phone-blue.svg?inline'
import NuxtAddress from 'icons/map-marker-little.svg?inline'
import NuxtDate from 'icons/date.svg?inline'

/**
 * 'PAGES/Main'
 * @displayName ProceduralBlocksSmall
 */
export default Vue.extend({
  name: 'ProceduralBlocksSmall',
  components: { NuxtPhone, NuxtAddress, NuxtDate },
  props: {
    room: {
      type: Object,
      default: () => {},
    },
  },
})
</script>

<style lang="scss" scoped>
.blocks-small {
  display: none;
  margin: 18px 0 36px 0;
  padding: 20px;
  background: #ebf8ff;
  border-radius: 10px;
  &__title {
    @include font-size(22px, 27px, 400);
  }
  &__status {
    color: #31b0ed;
    margin: 28px 0;
    @include font-size(14px, 20px, 400);
  }
  &__list {
    margin-bottom: 6px;
    display: flex;
    svg {
      width: 15px;
      height: 15px;
      margin-right: 13px;
      margin-top: 3px;
    }
    p {
      @include font-size(14px, 20px, 400);
      span {
        color: #8296a9;
      }
    }
    div {
      display: flex;
      flex-direction: column;
    }
  }
  &__features {
    display: flex;
    align-items: center;
    margin-top: 33px;
    svg {
      width: 42px;
      height: 32px;
      margin-right: 20px;
      padding: 6px 8px;
      background: #daedff;
      border-radius: 5.2648px;
      box-sizing: border-box;
    }
    svg:last-child {
      width: 60px;
    }
  }
  &__buttons {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
    margin-top: 28px;
    justify-content: flex-end;
    @include phone {
      justify-content: center;
    }
    button {
      width: 250px;
      padding: 8px;
      text-align: center;
      border-radius: 4px;
      outline: none;
      @include font-size(16px, 22px, 400);
    }
    &__show {
      color: #fff;
      background: #31b0ed;
      border: 1px solid transparent;
    }
    &__more {
      color: #31b0ed;
      border: 1px solid #31b0ed;
      background: transparent;
      box-sizing: border-box;
    }
  }
  @include tablet {
    display: flex;
    flex-direction: column;
  }
}
.blocks-small.disabled {
  background: #f8f8f8;
  p,
  span {
    color: #8296a9;
  }
  svg.disabledFill path {
    fill: #8296a9;
  }
  svg.disabled {
    opacity: 0.5;
    background: #e0e0e0;
  }
  button {
    color: #8296a9;
  }
  button:last-child {
    border-color: #8296a9;
  }
  button:first-child {
    background-color: #fff;
  }
}
</style>
