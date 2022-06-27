<template>
  <Card class="checkout-house-call__card" card-mode="light">
    <RFText :class="!extended && 'label'" :variant="extended ? 'mid' : 'xs'">
      Выезд на дом
    </RFText>
    <template v-if="!extended">
      <div class="checkout-house-call__card__row">
        <RFText>
          {{ address }}
          <br /><br />
          {{ date }}
        </RFText>
        <RFButton variant="link" size="small" @click="toggleExtend">
          Изменить
        </RFButton>
      </div>
    </template>
    <template v-else>
      <form @submit.prevent="changeAddress">
        <RFInput id="address_input" v-model="newAddress" :required="true">
          <template slot="label">Адрес</template>
        </RFInput>
        <RFInput id="date_input" v-model="newDate" :required="true">
          <template slot="label">Дата</template>
        </RFInput>
        <RFButton type="submit" size="small">Сохранить</RFButton>
      </form>
    </template>
  </Card>
</template>

<script>
import Vue from 'vue'
import RFText from 'atoms/RFText/index.vue'
import Card from 'atoms/Card/index.vue'
import RFButton from 'atoms/RFButton/index.vue'
import RFInput from 'atoms/RFInput/index.vue'

/**
 * 'MOLECULES/CheckoutHouseCallCard'
 * @displayName CheckoutHouseCallCard
 */
export default Vue.extend({
  name: 'CheckoutHouseCallCard',
  components: {
    Card,
    RFText,
    RFButton,
    RFInput,
  },
  props: {
    address: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      extended: !this.address,
      newAddress: this.address,
      newDate: this.date,
    }
  },
  methods: {
    toggleExtend() {
      this.extended = !this.extended
    },
    clear() {
      this.newAddress = ''
      this.newDate = ''
    },
    changeAddress() {
      this.$emit('change', {
        address: this.newAddress,
        date: this.newDate,
      })
      this.extended = false
    },
  },
})
</script>

<style lang="scss" scoped>
.checkout-house-call__card {
  ::v-deep .content {
    width: 100%;
    margin: 0;
    padding: 28px 40px;
    height: auto;
    transition: 0.3s ease-in-out;
  }
  &__row {
    @include flex-row();

    justify-content: space-between;
    align-items: flex-end;
  }

  .label {
    color: $c-gray;
    margin-bottom: 6px;
  }

  form {
    @include flex-column();

    margin: 30px 0;
    row-gap: 30px;

    .rf-input {
      width: 100%;
      max-width: 420px;
    }

    @include phone {
      margin-bottom: 0;
      row-gap: 20px;

      .rf-input {
        width: 100%;
        margin-bottom: 0;
      }
    }
    button.rf-btn {
      width: 208px;
    }
  }
}
</style>
