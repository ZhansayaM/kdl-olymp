<template>
  <div class="stats">
    <div class="stats__block">
      <p class="stats__block__value">{{ priceNormalized(data[0]) }} ₸</p>
      <p class="stats__block__title">Паушальный взнос</p>
    </div>
    <div class="stats__block">
      <p class="stats__block__value">{{ priceNormalized(data[1]) }}%</p>
      <p class="stats__block__title">Агентское вознаграждение</p>
    </div>
    <div class="stats__block">
      <p class="stats__block__value">{{ priceNormalized(data[2]) }}%</p>
      <p class="stats__block__title">Роялти</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FranchiseStatistics',
  props: {
    data: {
      type: Array,
      default: () => ['1000000', '34', '0'],
    },
  },
  computed: {
    priceNormalized() {
      return (el) => this.$services.common.price.priceFormat(el)
    },
  },
}
</script>

<style lang="scss" scoped>
.stats {
  padding: 34px 49px;
  background: $c-light-blue;
  border: 1px solid $c-basic-blue;
  box-sizing: border-box;
  border-radius: 8px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  @include medium-tablet {
    padding: 30px;
    gap: 10px;
    justify-content: space-between;
    @include flex-row();
  }
  @include tablet {
    padding: 20px;
  }
  @include phone {
    gap: 20px;
    flex-direction: column;
  }
  &__block {
    justify-content: space-between;
    @include flex-column();
    &__title {
      @include font-size(14px, 20px);
      @include tablet {
        @include font-size(12px, 16px);
      }
      @include phone {
        @include font-size(14px, 20px);
      }
    }
    &__value {
      margin-bottom: 4px;
      @include font-size(38px, 46px);
      @include medium-tablet {
        @include font-size(32px, 40px);
      }
      @include tablet {
        @include font-size(20px, 30px, 500);
      }
      @include phone {
        margin-bottom: 0;
        @include font-size(28px, 34px, 500);
      }
    }
  }
}
</style>
