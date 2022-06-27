<template>
  <div class="map-popup">
    <div class="map-popup__content">
      <RFText variant="mid" class="lg-only">
        Процедурный кабинет Бокейхана 11
      </RFText>
      <div class="map-popup__row map">
        <Icons variant="mapMarkerLittle" />
        <RFText variant="small"> ул. Бокейхана, 11 </RFText>
      </div>
      <div class="map-popup__row">
        <Icons variant="phoneBlue" />
        <RFText variant="small"> 259-79-69 </RFText>
      </div>
      <div class="map-popup__row">
        <Icons variant="calendarBlue" />
        <div class="schedules">
          <RFText variant="small"> Пн - Пт: 08:00 - 15:00 </RFText>
          <RFText variant="small"> Сб - Вс: 08:00 - 13:00 </RFText>
        </div>
      </div>
      <div class="map-popup__row tags lg-only">
        <Tag v-for="(icon, index) in icons" :key="index">
          <svg-icon :name="icon"></svg-icon>
        </Tag>
      </div>
      <RFButton v-if="isActionable" size="small" @click="$emit('click')">
        Подробнее
      </RFButton>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import RFText from 'atoms/RFText/index.vue'
import Icons from 'atoms/Icons/index.vue'
import RFButton from 'atoms/RFButton/index.vue'
import Tag from 'atoms/Tag/index.vue'

export default Vue.extend({
  name: 'MapPopup',
  components: {
    RFText,
    Icons,
    RFButton,
    Tag,
  },
  props: {
    isActionable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      icons: ['calendar 77', 'card-pay', 'virus', 'kaspi-red'],
    }
  },
})
</script>

<style lang="scss" scoped>
.map-popup {
  width: fit-content;

  &__content {
    padding: 14px 12px;
    @include phone {
      padding: 10px 4px;
    }
    .rf-btn {
      height: 38px;
      width: 100%;
      padding: 6.5px 10px 7.5px;
      border-radius: 4px;
      @include phone {
        padding: 10px;
        height: 40px;
        @include font-size(14px, 20px);
      }
    }
  }
  &__row {
    display: inline-flex;
    align-items: center;
    margin-bottom: 8px;
    flex-wrap: wrap;
    width: 100%;
    @include phone {
      margin-bottom: 12px;
    }
    &.tags {
      margin-bottom: 19px;
      @include phone {
        display: none;
      }
    }

    .tag {
      margin: 0 5px 5px 0;
      border-radius: 4px;
      height: 30px;
      padding: 0 11px;
      svg::v-deep {
        width: 20px;
        height: 30px;
        @include phone {
          padding: 8px 12px;
          background: $c-basic-blue;
          border-radius: 5.2648px;
          width: 43px;
          height: 37px;
        }
      }
    }
    .tag:last-child {
      padding: 0 6px;
      svg {
        width: 50px;
      }
    }
    .text--small {
      @include phone {
        @include font-size(14px, 20px);
      }
    }
  }
  &__row.map {
    @include phone {
      display: none;
    }
  }
  &__row:nth-child(4) {
    margin-bottom: 18px;
    @include phone {
      margin-bottom: 16px;
    }
  }
  .lg-only {
    margin-bottom: 13px;
    @include phone {
      margin-bottom: 18px;
      @include font-size(16px, 22px);
    }
  }
}

::v-deep .icons {
  &--mapMarkerLittle {
    margin-right: 6px;
  }
  &--calendarBlue {
    margin-right: 6px;
  }
  &--phoneBlue {
    margin-right: 6px;
  }
  .ymaps-2-1-79-balloon__close + .ymaps-2-1-79-balloon__content {
    margin-right: 0;
  }
}
</style>
