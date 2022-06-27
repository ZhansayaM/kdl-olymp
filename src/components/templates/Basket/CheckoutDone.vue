<template>
  <div class="basket_checkout_done">
    <div class="basket_checkout_done-head">
      <svg-icon
        :name="
          stage === 'success' ? 'success-circle-green' : 'error-circle-red'
        "
      ></svg-icon>
      <RFHeading tag="h3">
        {{ stage === 'success' ? 'Заказ оформлен' : 'Заказ не оформлен' }}
      </RFHeading>
    </div>
    <div class="basket_checkout_done-wrapper">
      <section>
        <PaymentDoneInfo
          :payment-id="paymentDone.id"
          :info="paymentDone.info"
          :action="paymentDone.action"
          @click="backToBasket"
        />
        <RFText v-if="stage === 'success'" style-type="hint" variant="xs">
          Мы также отправили подтвержденный заказ на ваш электронный адрес
        </RFText>
      </section>
      <aside>
        <ServicesRedirectCard />
      </aside>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import RFText from 'atoms/RFText/index.vue'
import ServicesRedirectCard from 'molecules/Basket/ServicesRedirectCard/index.vue'
import PaymentDoneInfo from 'molecules/Basket/PaymentDoneInfo/index.vue'

import { IAppointment, IProcedureRoom } from '~/src/models/procedure_room'
import { EPaymentMethod } from '~/src/models/payment'
import { AnalysisDonePlace } from '~/src/models/analysis'

interface PaymentDoneInfoLine {
  label: string
  data: string
}
interface PaymentDoneInfoProp {
  id: number
  info: PaymentDoneInfoLine[]
  action?: string
}

/**
 * 'TEMPLATES/CheckoutDone'
 * @displayName CheckoutDone
 */
export default Vue.extend({
  name: 'CheckoutDone',
  components: {
    RFText,
    RFHeading,
    ServicesRedirectCard,
    PaymentDoneInfo,
  },
  data() {
    return {
      patient: {
        name: 'Анастасия',
        surname: 'Оболенская',
        phone: '+ 777 980 67 89',
        email: 'obolenskaya@gmail.com',
      },
    }
  },
  computed: {
    stage(): string {
      return this.$route.query.stage as string
    },
    place(): AnalysisDonePlace {
      return this.$store.state.order.analysisDone
    },
    procedureRoom(): IProcedureRoom {
      return this.$store.state.order.procedureRoom
    },
    houseCallAddress(): any {
      return this.$store.state.order.houseCall
    },
    appointment(): IAppointment {
      return this.$store.state.order.appointment
    },
    method(): EPaymentMethod {
      return this.$store.state.order.paymentMethod
    },
    paymentDone(): PaymentDoneInfoProp {
      const info: PaymentDoneInfoLine[] = []
      if (this.stage === 'success') {
        // procedure room info
        if (this.place === 'onsite')
          info.push({
            label: 'Адрес процедурного кабинета',
            data: this.procedureRoom.location,
          })
        if (
          this.place === 'onsite' &&
          this.appointment &&
          this.appointment.date &&
          this.appointment.time
        )
          info.push({
            label: 'Запись на приём',
            data: `${this.appointment.date}, ${this.appointment.time}`,
          })
        if (this.place === 'offsite') {
          info.push({
            label: 'Мед. бригада приедет на адрес:',
            data: this.houseCallAddress.address,
          })
          info.push({
            label: 'Дата и время выезда на дом:',
            data: this.houseCallAddress.date,
          })
        }
        // patient info
        info.push({
          label: 'Пациент',
          data: `${this.patient.name} ${this.patient.surname}, ${this.patient.phone}`,
        })
        // patient payment method
        info.push({
          label: 'Способ оплаты',
          data:
            this.method === 'in_person'
              ? 'В процедурном кабинете'
              : 'Картой онлайн',
        })
      } else {
        info.push({
          label: 'Ошибка при оплате:',
          data: 'Оплата не прошла успешно, убедитесь что данные по оплате введены правильно',
        })
      }
      return {
        id: this.$store.state.order.id,
        info,
        action: this.stage === 'failed' ? 'Вернуться в корзину' : undefined,
      }
    },
  },
  methods: {
    backToBasket() {
      this.$router.push('/basket')
    },
  },
})
</script>

<style lang="scss" scoped>
.basket_checkout_done {
  &-head {
    margin-bottom: 43px;
    align-items: center;
    @include flex-row();
    h3.rf-heading {
      font-weight: 400;
      margin: 0;
    }
    svg {
      width: 30px;
      height: 30px;
      margin-right: 17px;
    }
  }
  &-wrapper {
    display: flex;
    gap: 40px;
    section {
      width: 100%;
      max-width: 900px;
      gap: 20px;
      @include flex-column();
    }

    aside {
      width: 100%;
      max-width: 420px;
      min-width: 300px;
      height: fit-content;
      gap: 10px;
      @include flex-column();

      button {
        margin-top: 20px;
      }
    }
  }

  @include wide-tablet {
    @include flex-column();

    aside {
      display: none;
    }
  }
}
</style>
