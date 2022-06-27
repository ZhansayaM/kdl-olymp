<template>
  <div class="schedule">
    <div v-for="item in analysesType" :key="item" class="schedule__small">
      <p :class="{ inactive: item.weekdays === '' }">
        {{ item.title }}
      </p>
      <div class="schedule__small__time">
        <div :class="{ inactive: item.weekdays === '' }">
          <span class="schedule__small__time__title"> Будни </span>
          <span class="schedule__small__time__period">
            {{ item.weekdays }}
          </span>
        </div>
        <div :class="{ inactive: item.weekdays === '' }">
          <span class="schedule__small__time__title"> Сб </span>
          <span class="schedule__small__time__period">
            {{ item.weekend1 }}
          </span>
        </div>
        <div :class="{ inactive: item.weekdays === '' }">
          <span class="schedule__small__time__title"> Вс </span>
          <span class="schedule__small__time__period">
            {{ item.weekend2 }}
          </span>
        </div>
      </div>
    </div>
    <Button class="schedule__small-more"
      >Выбрать другой процедурный кабинет</Button
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

/**
 * 'PAGES/Main'
 * @displayName ProceduralRoom
 */
export default Vue.extend({
  name: 'ProceduralRoom',
  data() {
    return {
      analysesType: [],
    }
  },
  created() {
    this.analysesType = this.$store.state.analysesType
  },
})
</script>

<style lang="scss" scoped>
.schedule {
  margin-bottom: 65px;
  &__small {
    display: none;
    p {
      padding: 18px 0;
      @include font-size(16px, 22px, 400);
    }
    p.inactive {
      color: $c-inactive;
    }
    &__time {
      padding-bottom: 6px;
      border-bottom: 1px solid $c-primary-bgcolor;
      > div {
        display: flex;
        flex-direction: column;
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
        @include font-size(14px, 22px, 400);
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
    @include font-size(14px, 20px, 400);
    @include tablet {
      display: block;
    }
  }
}
</style>
