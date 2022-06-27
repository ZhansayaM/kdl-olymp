<template>
  <section class="main">
    <ButtonBack class="main__back" />
    <RFHeading tag="h1">{{ room.title }}</RFHeading>
    <RFText variant="mid-big" style-type="hint" class="main__status">{{
      room.status
    }}</RFText>
    <RFText variant="mid-big" style-type="hint" class="main__statusText">{{
      room.statusText
    }}</RFText>
    <ProceduralBlocks :room="room" />
    <ProceduralBlocksSmall :room="room" />
    <ProceduralSchedule />
    <div class="main__location">
      <RFHeading tag="h2">Как добраться</RFHeading>
      <Map class="map" :is-actionable="false" />
      <div class="main__location__get">
        <div>
          <svg-icon name="map-marker-little"></svg-icon>
          <div class="main__location__get__text">
            <span>{{ room.fullAddress1 }}</span>
            <br />
            <span>{{ room.fullAddress2 }}</span>
          </div>
        </div>
        <div>
          <svg-icon name="bus"></svg-icon>
          <span>{{ room.bus }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Map from 'organisms/Map/YandexMap/index.vue'
import ProceduralBlocks from 'molecules/ProceduralBlocks/index.vue'
import ProceduralBlocksSmall from 'molecules/ProceduralBlocksSmall/index.vue'
import ProceduralSchedule from 'molecules/ProceduralSchedule/index.vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import RFText from 'atoms/RFText/index.vue'
import ButtonBack from 'atoms/Button/ButtonBack/index.vue'
/**
 * 'PAGES/Main'
 * @displayName ProceduralRoom
 */
export default Vue.extend({
  name: 'ProceduralRoom',
  components: {
    Map,
    ButtonBack,
    ProceduralBlocks,
    ProceduralBlocksSmall,
    ProceduralSchedule,
    RFHeading,
    RFText,
  },
  data() {
    return {
      room: {},
    }
  },
  head: {
    title: 'Процедурный кабинет',
  },
  created() {
    this.room = this.$store.state.service
  },
})
</script>

<style lang="scss" scoped>
.main {
  max-width: 1440px;
  margin: 0 auto;
  padding: 50px 50px 100px;
  @include small-laptop {
    padding: 30px 30px 80px;
  }
  @include phone {
    padding: 20px 16px 60px;
  }
  &__status {
    display: none;
    @include phone {
      display: block;
    }
  }
  &__statusText {
    @include phone {
      display: none;
    }
  }
  &__back {
    align-items: center;
    cursor: pointer;
    border: none;
    outline: none;
    background: transparent;
    @include flex-row();
    span {
      color: $c-primary;
      text-decoration: underline;
      @include font-size(14px, 20px);
    }
    svg {
      margin-right: 7px;
      width: 5px;
      height: 11px;
    }
  }
  h1.rf-heading {
    margin: 40px 0 24px 0;
    width: 618px;
    color: $c-input-border-active;
    @include tablet {
      max-width: 85%;
    }
    @include phone {
      max-width: 95%;
      margin-bottom: 19px;
      @include font-size(28px, 34px, 500);
    }
  }
  &__blocks {
    margin: 34px 0 73px;
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
      gap: 20px;
      @include flex-row();
      @include small-laptop {
        gap: 10px;
      }
      > div {
        background: $c-disabled-bg;
        border-radius: 10px;
        padding: 30px;
        @include small-laptop {
          padding: 20px;
        }
      }
    }
    &__address {
      background: $c-disabled-bg;
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
        align-items: center;
        margin-bottom: 13px;
        @include flex-row();
        svg {
          width: 15px;
          height: 15px;
          margin-right: 14px;
        }
        span {
          color: $c-input-border-active;
          @include font-size(18px, 28px);
        }
      }
      &__row:nth-child(2) {
        margin-bottom: 47px;
        span {
          color: $c-primary;
        }
      }
      &__features {
        align-items: center;
        @include flex-row();
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
      justify-content: flex-end;
      @include flex-column();
      span {
        color: $c-dark;
        @include font-size(16px, 24px);
        @include small-laptop {
          margin-bottom: 5px;
          @include font-size(14px, 18px);
        }
        @include medium-tablet {
          margin-bottom: 0;
        }
      }
    }
    &__weekdays,
    &__weekend1,
    &__weekend2 {
      justify-content: center;
      @include flex-column();
      span {
        @include font-size(16px, 24px);
        @include small-laptop {
          @include font-size(14px, 18px);
        }
      }
      &__title {
        @include font-size(16px, 24px, 600!important);
      }
    }
  }
  &__blocks-small {
    display: none;
    margin: 18px 0 36px 0;
    padding: 20px;
    background: $c-light-blue;
    border-radius: 10px;
    &__title {
      @include font-size(22px, 27px);
    }
    &__status {
      color: $c-primary;
      margin: 28px 0;
      @include font-size(14px, 20px);
    }
    &__list {
      margin-bottom: 6px;
      @include flex-row();
      svg {
        width: 15px;
        height: 15px;
        margin-right: 13px;
        margin-top: 3px;
      }
      p {
        @include font-size(14px, 20px);
        span {
          color: $c-gray;
        }
      }
      div {
        @include flex-column();
      }
    }
    &__features {
      align-items: center;
      margin-top: 33px;
      @include flex-row();
      svg {
        width: 42px;
        height: 32px;
        margin-right: 20px;
        padding: 6px 8px;
        background: $c-basic-blue;
        border-radius: 5.2648px;
        box-sizing: border-box;
      }
      svg:last-child {
        width: 60px;
      }
    }
    &__buttons {
      gap: 14px;
      flex-wrap: wrap;
      margin-top: 28px;
      justify-content: flex-end;
      @include flex-row();
      @include phone {
        justify-content: center;
      }
      button {
        width: 250px;
        padding: 8px;
        text-align: center;
        border-radius: 4px;
        outline: none;
        @include font-size(16px, 22px);
      }
      &__show {
        color: $c-white;
        background: $c-primary;
        border: 1px solid transparent;
      }
      &__more {
        color: $c-primary;
        border: 1px solid $c-primary;
        background: transparent;
        box-sizing: border-box;
      }
    }
    @include tablet {
      @include flex-column();
    }
  }
  &__blocks-small.disabled {
    background: $c-light-gray;
    p,
    span {
      color: $c-gray;
    }
    svg.disabledFill path {
      fill: $c-gray;
    }
    svg.disabled {
      opacity: 0.5;
      background: $c-secondary-gray;
    }
    button {
      color: $c-gray;
    }
    button:last-child {
      border-color: $c-gray;
    }
    button:first-child {
      background-color: $c-white;
    }
  }
  &__schedule {
    margin-bottom: 65px;
    &__small {
      display: none;
      p {
        padding: 18px 0;
        @include font-size(16px, 22px);
      }
      p.inactive {
        color: $c-inactive;
      }
      &__time {
        padding-bottom: 6px;
        border-bottom: 1px solid $c-primary-bgcolor;
        > div {
          @include flex-column();
        }
        > div.inactive {
          display: none;
        }

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
        &__title {
          color: $c-primary;
          @include font-size(14px, 22px, 600);
        }
        &__period {
          color: $c-news-text;
          @include font-size(14px, 22px);
        }
      }
      @include tablet {
        display: block;
      }
    }
    &__small-more {
      display: none;
      color: $c-primary;
      border: 1px solid $c-primary;
      padding: 9px;
      text-align: center;
      margin-top: 28px;
      border-radius: 4px;
      outline: none;
      background: transparent;
      width: 100%;
      @include font-size(14px, 20px);
      @include tablet {
        display: block;
      }
    }
    h2.rf-heading {
      margin: 0 0 42px;
      @include font-size(28px, 34px);
      @include tablet {
        margin-bottom: 10px;
        @include font-size(26px, 28px);
      }
    }
    table {
      width: 100%;
      border-collapse: collapse;
      @include tablet {
        display: none;
      }
      tr {
        th {
          color: $c-primary;
          text-align: left;
          @include font-size(18px, 22px, 600);
        }
        td.inactive {
          background: $c-light-gray;
          color: $c-gray;
          border-left: 0;
          border-right: 0;
        }
        th,
        td {
          border: 1px solid $c-basic-blue;
          padding: 15px 20px;
        }
        td:first-child,
        th:first-child {
          border-left: 0;
        }
        td:last-child,
        th:last-child {
          border-right: 0;
        }
        td {
          @include font-size(16px, 20px);
        }
      }
      tr:first-child {
        th {
          border-top: 0;
        }
      }
      tr:last-child {
        td {
          border-bottom: 0;
        }
      }
    }
  }
  &__location {
    h2 {
      margin-bottom: 40px;
      @include font-size(28px, 34px);
      @include tablet {
        @include font-size(26px, 28px);
      }
    }
    .map.ymap-container {
      width: 100%;
      height: 384px;
      margin-bottom: 46px;
    }
    &__get {
      gap: 90px;
      @include flex-row();
      @include phone {
        display: block;
      }
      span {
        @include font-size(16px, 24px);
        @include phone {
          @include font-size(14px, 20px);
        }
      }
      div {
        @include flex-row();
        svg {
          margin-right: 14px;
          width: 18px;
          height: 18px;
          margin-top: 2px;
          @include tablet {
            width: 40px;
          }
        }
      }
      div:first-child {
        @include phone {
          svg {
            width: 36px;
            height: 14.63px;
          }

          margin-bottom: 19px;
        }
      }
      div:last-child {
        @include phone {
          svg {
            width: 16px;
            margin-top: 4px;
            height: 12px;
          }
        }
      }
      &__text {
        max-width: 459px;
        @include flex-column();
      }
    }
  }
}
</style>
