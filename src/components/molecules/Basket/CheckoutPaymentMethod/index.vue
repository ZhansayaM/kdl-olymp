<template>
  <Card class="payment-method__card" card-mode="light">
    <RFText variant="mid">Способ оплаты</RFText>
    <div class="row">
      <TabBase v-model="model" name="in_person" :is-link="false" type="primary">
        В процедурном кабинете
      </TabBase>
      <RFText variant="xxs" style-type="hint" class="additional">
        Для оплаты в процедурном кабинете запомните номер заказа после
        оформления.
      </RFText>
    </div>
    <TabBase v-model="model" name="card" :is-link="false" type="primary">
      Картой онлайн
    </TabBase>
  </Card>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import RFText from 'atoms/RFText/index.vue'
import Card from 'atoms/Card/index.vue'
import TabBase from 'atoms/Tab/index.vue'
import { EPaymentMethod } from '~/src/models/payment'

/**
 * 'MOLECULES/CheckoutPaymentMethod'
 * @displayName CheckoutPaymentMethod
 */
export default Vue.extend({
  name: 'CheckoutPaymentMethod',
  components: {
    Card,
    RFText,
    TabBase,
  },
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: {
      type: Object as PropType<EPaymentMethod>,
      default: 'in_person' as EPaymentMethod,
    },
  },
  data() {
    return {
      active: 1,
    }
  },
  computed: {
    model: {
      get(): EPaymentMethod {
        return this.value
      },
      set(newValue: EPaymentMethod) {
        /**
         * @event change
         * @property {string} newValue new value set
         */
        this.$emit('change', newValue)
      },
    },
  },
})
</script>

<style lang="scss" scoped>
.payment-method__card {
  ::v-deep .content {
    width: 100%;
    margin: 0;
    padding: 28px 40px;
    align-items: baseline;
    > .text {
      margin-bottom: 36px;
      font-weight: 400;
    }
    .row {
      align-items: flex-start;
      @include flex-row();
      @include phone {
        width: 100%;
      }
    }

    label {
      min-width: 300px;
      margin-right: 30px;
      margin-bottom: 10px;
      padding: 0 16px;
      height: 50px;
      justify-content: flex-start;
      background: $c-white;
      color: $c-primary;
      border: 1px solid $c-primary;
      border-radius: 6px;
      @include font-size(16px, 19px);
      @include phone {
        min-width: 100%;
        margin: 0;
      }
    }
    label:first-child {
      margin-bottom: 10px;
    }
    label.active {
      background: $c-primary;
      color: $c-white;
    }
    .additional {
      max-width: 330px;
    }

    @include tablet {
      padding: 16px;
      .additional {
        display: none;
      }
    }
  }
}
</style>
