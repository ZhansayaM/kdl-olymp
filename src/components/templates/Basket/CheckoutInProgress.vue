<template>
  <div class="basket_checkout_inprogress">
    <BackButton> Назад </BackButton>
    <div class="basket_checkout_inprogress-head">
      <RFHeading tag="h1">Оформление заказа</RFHeading>
    </div>
    <div class="basket_checkout_inprogress-wrapper">
      <aside>
        <UsedDiscountCard v-if="discountCard" :discount-card="discountCard" />
        <BasketBillCard />
      </aside>
      <section>
        <CheckoutPatientCard :user="patient" @change="changePatientData" />
        <CheckoutProcedureRoomCard
          v-if="place === 'onsite'"
          :location="procedureRoom.location"
          :appointment="appointment"
          @change="openProcedureChooseModal"
        />
        <CheckoutHouseCallCard
          v-if="place === 'offsite'"
          :address="houseCallAddress.address"
          :date="houseCallAddress.date"
          @change="changeHouseCallAddress"
        />
        <CheckoutPaymentMethod v-model="method" />
        <RFButton @click="checkout"> Оформить </RFButton>
      </section>
    </div>

    <ChooseProcedureRoomModal
      v-if="showProcedureModal"
      :show="showProcedureModal"
      :include-schedule="needAppointment"
      @close="closeProcedureChooseModal"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import BasketBillCard from 'molecules/Basket/BasketBillCard/index.vue'
import BackButton from 'atoms/Button/ButtonBack/index.vue'
import RFButton from 'atoms/RFButton/index.vue'
import CheckoutPatientCard from 'molecules/Basket/CheckoutPatientCard/index.vue'
import UsedDiscountCard from 'molecules/Basket/UsedDiscountCard/index.vue'
import CheckoutProcedureRoomCard from 'molecules/Basket/CheckoutProcedureRoomCard/index.vue'
import CheckoutPaymentMethod from 'molecules/Basket/CheckoutPaymentMethod/index.vue'
import CheckoutHouseCallCard from 'molecules/Basket/CheckoutHouseCallCard/index.vue'
import ChooseProcedureRoomModal from 'organisms/Modals/ChooseProcedureRoomModal/index.vue'
import { IDiscountCard } from '~/src/models/discount_card'
import { IAppointment, IProcedureRoom } from '~/src/models/procedure_room'
import { CheckoutPaymentStage, EPaymentMethod } from '~/src/models/payment'
import { AnalysisDonePlace } from '~/src/models/analysis'

/**
 * 'TEMPLATES/CheckoutInProgress'
 * @displayName CheckoutInProgress
 */
export default Vue.extend({
  name: 'CheckoutInProgress',
  components: {
    RFHeading,
    RFButton,
    BackButton,
    BasketBillCard,
    CheckoutPatientCard,
    UsedDiscountCard,
    CheckoutProcedureRoomCard,
    CheckoutPaymentMethod,
    CheckoutHouseCallCard,
    ChooseProcedureRoomModal,
  },
  data() {
    return {
      patient: {
        name: 'Анастасия',
        surname: 'Оболенская',
        phone: '+ 777 980 67 89',
        email: 'obolenskaya@gmail.com',
      },
      method: 'in_person' as EPaymentMethod,
      showProcedureModal: false,
    }
  },
  computed: {
    place(): AnalysisDonePlace {
      return this.$store.state.order.analysisDone
    },
    discountCard(): IDiscountCard {
      return this.$store.state.order.discountCard
    },
    procedureRoom(): IProcedureRoom {
      return this.$store.state.order.procedureRoom
    },
    houseCallAddress(): any {
      return this.$store.state.order.houseCall
    },
    needAppointment(): boolean {
      const analyzesData = this.$store.state.basket.products
      return !!analyzesData.find((item) => item.appointment)
    },
    appointment(): IAppointment {
      return this.$store.state.order.appointment
    },
  },
  methods: {
    openProcedureChooseModal(): void {
      this.showProcedureModal = true
    },
    closeProcedureChooseModal(): void {
      this.showProcedureModal = false
    },
    checkout(): void {
      this.$store.commit(
        'order/setPaymentMethod',
        this.method as EPaymentMethod
      )
      this.$store.commit(
        'order/changePaymentStage',
        'success' as CheckoutPaymentStage
      )
    },
    changePatientData(newData): void {
      this.patient = newData
    },
    changeHouseCallAddress(newAddress) {
      this.$store.commit('order/setHouseCall', newAddress)
    },
  },
})
</script>

<style lang="scss" scoped>
.basket_checkout_inprogress {
  &-head {
    display: block;
    h1.rf-heading {
      margin: 60px 0 58px;
      @include tablet {
        margin: 30px 0;
      }
    }
  }
  &-wrapper {
    @include flex-row();

    gap: 40px;
    section {
      width: 100%;
      max-width: 900px;
      gap: 10px;
      @include flex-column();
      button {
        margin-top: 26px;
        width: 206px;
        height: 54px;
      }
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

    @include wide-tablet {
      flex-direction: column;

      aside {
        max-width: 100%;
      }
    }
  }
}
</style>
