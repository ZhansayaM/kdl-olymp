<template>
  <div class="sales-card">
    <div class="sales-card__period">
      <RFText variant="small">{{ period }}</RFText>
    </div>
    <div class="sales-card__prices">
      <RFText variant="mid-avg">{{ oldPrice }} ₸</RFText>
      <RFText variant="big">{{ currentPrice }} ₸</RFText>
    </div>
    <RFButton size="medium">В корзину</RFButton>
  </div>
</template>

<script>
import RFText from 'atoms/RFText/index.vue'
import RFButton from 'atoms/RFButton/index.vue'

export default {
  name: 'SalesCard',
  components: { RFText, RFButton },
  props: {
    oldPrice: {
      type: Number,
      default: 0,
    },
    currentPrice: {
      type: Number,
      default: 0,
    },
    period: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.sales-card {
  width: 100%;
  max-width: 420px;
  height: fit-content;
  background: $c-light-blue;
  border-radius: 10px;
  padding: 30px;
  min-width: 280px;
  margin: 0 auto;
  @include phone {
    padding: 14px 16px;
    min-width: auto;
  }
  &__period {
    padding: 6px 15px 8px;
    margin-bottom: 36px;
    background: $c-basic-blue;
    border-radius: 100px;
    width: fit-content;
    @include phone {
      margin-bottom: 20px;
    }
    p {
      @include small-phone {
        @include font-size(14px, 20px);
      }
    }
  }
  &__prices {
    gap: 16px;
    margin-bottom: 30px;
    align-items: baseline;
    @include flex-row();
    @include phone {
      gap: 10px;
      margin-bottom: 20px;
    }
    p:first-child {
      text-decoration: line-through;
      @include phone {
        opacity: 0.5;
      }
    }
  }
  button {
    color: $c-white;
    padding: 9px;
    background: $c-primary;
    border-radius: 4px;
    width: 100%;
    cursor: pointer;
    border: none;
  }
}
</style>
