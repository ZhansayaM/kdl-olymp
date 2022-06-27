<template>
  <div :class="{ disabled: disabled }" class="whereto-card">
    <div class="whereto-card__content">
      <p :class="{ disabled: disabled }" class="whereto-card__content-title">
        {{ service.title }}
      </p>
      <p :class="{ disabled: disabled }" class="whereto-card__content-status">
        {{ service.status }}
      </p>
      <div class="whereto-card__content-address">
        <NuxtAddress :class="{ disabled: disabled }" />
        <p :class="{ disabled: disabled }">{{ service.address }}</p>
      </div>
      <div class="whereto-card__content-phone">
        <NuxtPhone :class="{ disabled: disabled }" />
        <p :class="{ disabled: disabled }">{{ service.phone }}</p>
      </div>
      <div class="whereto-card__content-date">
        <NuxtDate :class="{ disabled: disabled }" />
        <div class="where-card__content-date__times">
          <p :class="{ disabled: disabled }">
            {{ service.weekdays }}: {{ service.weekdaysTimetake }}
            {{ service.weekdaysTimeget }}
          </p>
          <p :class="{ disabled: disabled }">
            {{ service.weekend1 }}: {{ service.weekend1Timetake }}
            {{ service.weekend1Timeget }}
          </p>
          <p :class="{ disabled: disabled }">
            {{ service.weekend2 }}: {{ service.weekend2Time }}
          </p>
        </div>
      </div>

      <div class="whereto-card__content-schedule">
        <div class="whereto-card__content-schedule-titles">
          <p
            :class="{ disabled: disabled }"
            class="whereto-card__content-schedule-take"
          >
            {{ service.take }}
          </p>
          <p
            :class="{ disabled: disabled }"
            class="whereto-card__content-schedule-get"
          >
            {{ service.get }}
          </p>
        </div>
        <div class="whereto-card__content-schedule-days">
          <div
            :class="{ disabled: disabled }"
            class="whereto-card__content-schedule-days-card"
          >
            <p :class="{ disabled: disabled }">
              {{ service.weekdays }}
            </p>
            <div class="whereto-card__content-schedule-days-card-time">
              <span :class="{ disabled: disabled }">{{
                service.weekdaysTimetake
              }}</span>
              <span :class="{ disabled: disabled }">{{
                service.weekdaysTimeget
              }}</span>
            </div>
          </div>
          <div
            :class="{ disabled: disabled }"
            class="whereto-card__content-schedule-days-card"
          >
            <p :class="{ disabled: disabled }">
              {{ service.weekend1 }}
            </p>
            <div class="whereto-card__content-schedule-days-card-time">
              <span :class="{ disabled: disabled }">{{
                service.weekend1Timetake
              }}</span>
              <span :class="{ disabled: disabled }">{{
                service.weekend1Timeget
              }}</span>
            </div>
          </div>
          <div
            :class="{ disabled: disabled }"
            class="whereto-card__content-schedule-days-card"
          >
            <p :class="{ disabled: disabled }">
              {{ service.weekend2 }}
            </p>
            <div class="whereto-card__content-schedule-days-card-time">
              <span :class="{ disabled: disabled }">{{
                service.weekend2Time
              }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="whereto-card__content-features">
        <svg-icon name="calendar 77" :class="{ disabled: disabled }"></svg-icon>
        <svg-icon name="card-pay" :class="{ disabled: disabled }"></svg-icon>
        <svg-icon name="virus" :class="{ disabled: disabled }"></svg-icon>
        <svg-icon name="kaspi-red" :class="{ disabled: disabled }"></svg-icon>
      </div>
    </div>
    <div class="whereto-card__btn">
      <Button
        class="whereto-card__btn__show"
        :class="{ disabled: disabled }"
        @click="$emit('show')"
        >Показать на карте</Button
      >
      <Button
        class="whereto-card__btn__more"
        :class="{ disabled: disabled }"
        @click="redirect"
        >Подробнее</Button
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NuxtPhone from 'icons/phone-blue.svg?inline'
import NuxtAddress from 'icons/map-marker-little.svg?inline'
import NuxtDate from 'icons/date.svg?inline'

/**
 * MOLECULES/WheretoCard
 * @displayName WheretoCard
 */
export default Vue.extend({
  name: 'WheretoCard',
  components: { NuxtPhone, NuxtAddress, NuxtDate },
  props: {
    service: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      disabled: false,
    }
  },
  created() {
    if (this.service.status === 'Временно не работает') this.disabled = true
  },
  methods: {
    redirect() {
      this.$store.commit('changeService', this.service)
      this.$router.push('/procedural-cabinet')
    },
  },
})
</script>

<style lang="scss" scoped>
.whereto-card {
  max-width: 951px;
  width: 100%;
  background: $c-light-blue;
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  @include small-laptop {
    display: block;
  }
  @include medium-tablet {
    padding: 20px;
  }
  &__btn {
    display: flex;
    flex-direction: column;
    @include small-laptop {
      margin-top: 20px;
      align-items: flex-end;
    }
    @include phone {
      align-items: center;
      display: none;
    }
    &__show,
    &__more {
      padding: 6px 12px 7px;
      width: 230px;
      border-radius: 4px;
      margin-bottom: 8px;
      border-color: transparent;
      outline: none;
      cursor: pointer;
    }
    &__show {
      color: #fff;
      background: #31b0ed;
      &.disabled {
        background: #e0e0e0;
        color: #8296a9;
      }
    }
    &__more {
      background: transparent;
      border: 1px solid #31b0ed;
      color: #31b0ed;
      &.disabled {
        border-color: #8c9eaf;
        color: #8c9eaf;
      }
    }
  }
  &__content {
    max-width: 650px;
    @include flex-column();
    &-features {
      display: flex;
      align-items: center;
      svg {
        opacity: 0.5;
        width: 27px;
        height: 25px;
        margin-right: 20px;
        @include phone {
          padding: 8px 12px;
          background: #daedff;
          border-radius: 5.2648px;
          opacity: 1;
          width: 43px;
          height: 37px;
        }
        @include small-phone {
          margin-right: 10px;
        }
      }
      svg.disabled {
        @include phone {
          background: #e0e0e0;
          opacity: 0.5;
        }
      }
      svg:last-child {
        width: 50px;
      }
    }
    &-schedule {
      display: flex;
      align-items: flex-end;
      margin-bottom: 31px;
      @include phone {
        display: none;
      }
      &-titles {
        margin-right: 4px;
        p {
          color: $c-dark;
          margin: 12.5px 0;
          @include font-size(12px, 16px);
          @include medium-tablet {
            margin: 5.5px 0;
            font-size: 10px;
            line-height: 12px;
          }
          @include tablet {
            margin: 9.5px 0;
          }
          @include phone {
            font-size: 14px;
            line-height: 16px;
          }
        }
        p.disabled {
          color: #8296a9;
        }
      }
      &-days {
        display: flex;
        @include phone {
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
        }
        &-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 8px 11px;
          width: 111px;
          height: 104px;
          background: #fff;
          border-radius: 8px;
          margin: 0 4px;
          text-align: center;
          @include phone {
            margin-bottom: 8px;
          }
          &-time {
            margin-top: 8px;
            display: flex;
            height: 100%;
            justify-content: space-around;
            flex-direction: column;
            align-items: center;
          }
          span {
            color: $c-dark;
            @include font-size(12px, 16px);
          }
          span.disabled {
            color: #8296a9;
          }
          p {
            width: 100%;
            color: $c-dark;
            padding-bottom: 7.5px;
            border-bottom: 0.5px solid #eee;
            @include font-size(14px, 20px);
          }
          p.disabled {
            color: #8296a9;
          }
        }
        &-card.disabled {
          background: #eee;
        }
      }
    }
    &-address {
      display: flex;
      align-items: center;
      margin-bottom: 6px;
      p {
        color: $c-dark;
        @include font-size(16px, 24px);
        @include small-phone {
          font-size: 14px;
          line-height: 16px;
        }
      }
      p.disabled {
        color: #8296a9;
      }
      svg {
        width: 15px;
        height: 15px;
        margin-right: 12px;
      }
      svg.disabled path {
        fill: #8296a9;
      }
    }
    &-phone {
      display: flex;
      align-items: center;
      margin-bottom: 18px;
      @include phone {
        margin-bottom: 6px;
      }
      p {
        color: $c-dark;
        @include font-size(16px, 24px);
        @include small-phone {
          font-size: 14px;
          line-height: 16px;
        }
      }
      p.disabled {
        color: #8296a9;
      }
      svg {
        width: 15px;
        height: 15px;
        margin-right: 12px;
      }
      svg.disabled path {
        fill: #8296a9;
      }
    }
    &-date {
      display: none;
      margin-bottom: 24px;
      @include phone {
        display: flex;
      }
      &__times {
        display: flex;
        flex-direction: column;
      }
      svg {
        width: 15px;
        height: 15px;
        margin-right: 12px;
      }
      p {
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        @include small-phone {
          font-size: 14px;
          line-height: 16px;
        }
      }
      p:first-child {
        margin-top: -5px;
        @include small-phone {
          margin-top: 0;
        }
      }
      p.disabled {
        color: #8296a9;
      }
      svg.disabled path {
        fill: #8296a9;
      }
    }
    &-title {
      color: $c-dark;
      width: 100%;
      font-weight: normal;
      @include font-size(24px, 32px);

      @include tablet {
        font-size: 18px;
        line-height: 26px;
      }
    }
    &-title.disabled {
      color: #8296a9;
    }

    &-status {
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
      color: #31b0ed;
      margin: 16px 0;
    }
    &-status.disabled {
      color: #8296a9;
    }
  }
}
.whereto-card.disabled {
  background: #f8f8f8;
}
</style>
