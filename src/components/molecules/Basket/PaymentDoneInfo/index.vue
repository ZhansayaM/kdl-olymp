<template>
  <Card class="payment-done-info__card" card-mode="light">
    <RFText variant="mid">
      Номер заказа <span class="payment_id">{{ paymentId }}</span>
    </RFText>
    <div v-for="(line, index) in info" :key="index" class="col">
      <RFText variant="small" class="label">
        {{ line.label }}
      </RFText>
      <RFText variant="small">{{ line.data }}</RFText>
    </div>
    <div v-if="action" class="row">
      <RFButton size="small" @click="$emit('click')">
        {{ action }}
      </RFButton>
    </div>
  </Card>
</template>

<script>
import Vue from 'vue'
import RFText from 'atoms/RFText/index.vue'
import Card from 'atoms/Card/index.vue'
import RFButton from 'atoms/RFButton/index.vue'

/**
 * 'MOLECULES/PaymentDoneInfo'
 * @displayName PaymentDoneInfo
 */
export default Vue.extend({
  name: 'PaymentDoneInfo',
  components: {
    Card,
    RFText,
    RFButton,
  },
  props: {
    paymentId: {
      type: Number,
      default: 0,
    },
    info: {
      type: Array,
      default: () => [],
    },
    action: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
.payment-done-info__card {
  ::v-deep .content {
    width: 100%;
    margin: 0;
    padding: 38px 40px 40px;
    > p {
      font-weight: 400;
      margin-bottom: 26px;
      span {
        font-weight: 500;
        color: $c-primary;
      }
    }
  }
  .col {
    @include flex-column();

    align-items: flex-start;
    margin-bottom: 20px;
  }
  .label {
    display: block;
    color: $c-gray;
    margin-bottom: 6px;
  }
  button {
    margin-top: 40px;
  }
}
</style>
