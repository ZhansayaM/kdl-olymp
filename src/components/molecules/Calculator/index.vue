<template>
  <div class="main">
    <Dropdown
      :label="dropdowndata[0].title"
      :options="dropdowndata[0].options"
      @price="changeSum"
    />
    <Dropdown
      :label="dropdowndata[1].title"
      :options="dropdowndata[1].options"
    />
    <div class="main__amount">
      <RFText variant="small" class="title">{{ amountTitle }}</RFText>
      <AmountSelect @amount="changeAmount" />
    </div>
    <div class="main__cost">
      <RFText variant="small" class="title">{{ costTitle }}</RFText>
      <RFHeading tag="h3" class="main__cost__amount">{{ cost }} ₸</RFHeading>
    </div>
    <Button class="main__btn"> {{ formalize }} </Button>
  </div>
</template>

<script>
import Dropdown from 'atoms/Dropdown/index.vue'
import AmountSelect from 'atoms/AmountSelect/index.vue'
import RFText from 'atoms/RFText/index.vue'
import RFHeading from 'atoms/RFHeading/index.vue'

export default {
  name: 'Calculator',
  components: { Dropdown, AmountSelect, RFText, RFHeading },
  data() {
    return {
      dropdowndata: [
        {
          title: 'Стоимость',
          options: [
            {
              id: 0,
              title: '40 000 ₸',
              amount: 40000,
            },
            {
              id: 1,
              title: '30 000 ₸',
              amount: 30000,
            },
            {
              id: 2,
              title: '20 000 ₸',
              amount: 20000,
            },
            {
              id: 3,
              title: '10 000 ₸',
              amount: 10000,
            },
          ],
        },
        {
          title: 'Вид',
          options: [
            {
              id: 0,
              title: 'Электронный',
            },
            {
              id: 1,
              title: 'Бумажный',
            },
          ],
        },
      ],
      amountTitle: 'Количество',
      costTitle: 'Общая стоимость',
      cost: '0',
      price: 0,
      formalize: 'Оформить',
      amount: 0,
    }
  },
  methods: {
    changeAmount(amount) {
      this.amount = amount
      const tempCost = this.price * this.amount
      this.cost = this.$services.common.price.priceFormat(tempCost)
    },
    changeSum(item) {
      this.price = item
      const tempCost = item * this.amount
      this.cost = this.$services.common.price.priceFormat(tempCost)
    },
  },
}
</script>

<style lang="scss" scoped>
.main {
  width: 26rem;
  background: $c-light-blue;
  border-radius: 10px;
  padding: 20px;
  @include small-laptop {
    width: 22rem;
  }
  @include medium-tablet {
    width: 16rem;
  }
  @include tablet {
    width: 100%;
    padding: 20px 14px;
  }
  & > div {
    margin-bottom: 30px;
    @include tablet {
      margin-bottom: 10px;
    }
  }
  .title {
    color: $c-disabled-text;
    margin-bottom: 6px;
  }
  &__amount {
    @include flex-column();
  }
  &__cost {
    margin-bottom: 18px !important;
    @include tablet {
      margin: 28px 0 38px 0 !important;
    }
    &__amount {
      margin: 0;
      font-weight: 400;
    }
  }
  &__btn {
    cursor: pointer;
    width: 100%;
    padding: 8.5px 0;
    text-align: center;
    background: $c-primary;
    border-radius: 4px;
    color: $c-white;
    border: none;
    outline: none;
    @include font-size(20px, 28px);
    @include tablet {
      padding: 13.5px 0;
      @include font-size(16px, 20px);
    }
  }
}
</style>
