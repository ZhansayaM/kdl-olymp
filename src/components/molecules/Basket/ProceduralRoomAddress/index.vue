<template>
  <Card class="procedural-room-address__card" card-mode="light">
    <RFText>{{ title }}</RFText>
    <div class="procedural-room-address__card__row">
      <Icons variant="mapMarkerLittle" />
      <RFText variant="small">{{ location }}</RFText>
    </div>
    <div class="procedural-room-address__card__row">
      <Icons variant="phoneBlue" />
      <RFText variant="small">{{ phone }}</RFText>
    </div>
    <template v-if="detailedView">
      <div class="procedural-room-address__card__row">
        <Icons variant="calendarBlue" />
        <div class="schedules">
          <RFText
            v-for="(schedule, index) in schedules"
            :key="index"
            variant="small"
          >
            {{
              `${dayName[schedule.from_day - 1]} - ${
                dayName[schedule.to_day - 1]
              }: ${schedule.from_time}:00 - ${schedule.to_time}:00`
            }}
          </RFText>
        </div>
      </div>
      <div class="procedural-room-address__card__row tags">
        <Tag v-for="tag in tags" :key="tag.id">
          {{ tag.title }}
        </Tag>
      </div>
      <div class="procedural-room-address__card__row">
        <Tag v-for="(icon, index) in icons" :key="index">
          <svg-icon :name="icon"></svg-icon>
        </Tag>
      </div>
      <RFButton size="small" :disabled="disable" @click="confirm">
        Выбрать
      </RFButton>
    </template>
  </Card>
</template>

<script>
/* eslint-disable camelcase */
import Vue from 'vue'
import Icons from 'atoms/Icons/index.vue'
import Card from 'atoms/Card/index.vue'
import RFText from 'atoms/RFText/index.vue'
import RFButton from 'atoms/RFButton/index.vue'
import Tag from 'atoms/Tag/index.vue'

export default Vue.extend({
  name: 'ProceduralRoomAddressCard',
  components: {
    Icons,
    Card,
    RFText,
    Tag,
    RFButton,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    location: {
      type: String,
      default: '',
    },
    phone: {
      type: String,
      default: '',
    },
    schedules: {
      type: Array,
      default: () => [],
    },
    tags: {
      type: Array,
      default: () => [],
    },
    icons: {
      type: Array,
      default: () => [],
    },
    detailedView: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      date: new Date().toISOString().slice(0, 10),
      time: {},
      dayName: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    }
  },
  methods: {
    confirm() {
      const data = {}
      this.$emit('confirmChoice', data)
    },
  },
})
</script>

<style lang="scss" scoped>
.procedural-room-address__card {
  @include flex-column();

  ::v-deep .content {
    margin: 0;
    padding: 24px;
    @include medium-tablet {
      padding: 16px;
    }
  }
  &__row {
    display: inline-flex;
    align-items: flex-start;
    margin-top: 8px;
    flex-wrap: wrap;
    width: 100%;

    .wrapper,
    .rf-input {
      width: 100%;
    }
    ::v-deep .icons {
      margin-right: 7px;
    }
    .tag {
      margin: 0 5px 5px 0;
      border-radius: 4px;
      height: 30px;
      padding: 0 11px;
      svg::v-deep {
        width: 20px;
        height: 30px;
      }
    }
    .tag:last-child {
      padding: 0 6px;
      svg {
        width: 50px;
      }
    }
  }
  &__row.tags {
    .tag {
      border-radius: 100px;
      height: 38px;
      padding: 0 15px;
      @include phone {
        @include font-size(12px, 16px);
      }
    }
  }
  &__row:last-child {
    margin-top: 6px;
  }
  button.rf-btn {
    width: 100%;
    margin-top: 20px;
  }
  .rf-input {
    font-size: 16px;
  }
}
</style>
