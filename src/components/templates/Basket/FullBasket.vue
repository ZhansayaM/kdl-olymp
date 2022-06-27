<template>
  <div class="full_basket">
    <div class="full_basket-wrapper">
      <section>
        <div class="full_basket-head">
          <RFHeading tag="h1">Корзина</RFHeading>
          <RFButton variant="link" size="small" @click="clear"
            >Очистить</RFButton
          >
        </div>
        <AnalyzesCard
          v-for="item in analyzesData"
          :key="item.id"
          :service="item"
          :is-button="true"
          :close="!item.autoAdded"
          @close="removeItem(item.id)"
        >
          <RFText style-type="hint" variant="small">
            {{ item.info }}
          </RFText>
          <AlertTag v-if="item.appointment" class="analyzes_card-alert_tag">
            Необходимо записаться на приём
          </AlertTag>
        </AnalyzesCard>
        <RFText variant="xs" style-type="hint" class="full_basket-wrapper__note"
          >Вы можете использовать этот заказ для быстрого прохождения очереди в
          процедурном кабинете, для этого понадобится номер заказа.</RFText
        >
      </section>
      <aside>
        <Tabs v-model="tab" :tabs="tabs" type="line" type-tab="secondary" />
        <template v-if="tab === 'onsite'">
          <ProcedureModalOpenCard
            v-if="!chosenExtendedRoom.id"
            @open="openProcedureChooseModal"
          />
          <BasketProcedureRoomCard
            v-else
            :title="chosenExtendedRoom.title"
            :location="chosenExtendedRoom.location"
            :appointment="appointment"
            @open="openProcedureChooseModal"
          />
        </template>
        <BasketBillCard />
        <RFButton
          :class="{ disabled: !canCheckout }"
          :disabled="!canCheckout"
          @click="checkout"
        >
          Перейти к оформлению
        </RFButton>
      </aside>
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
import RFText from 'atoms/RFText/index.vue'
import AnalyzesCard from 'molecules/Cards/AnalyzesCard/index.vue'
import BasketBillCard from 'molecules/Basket/BasketBillCard/index.vue'
import Tabs from 'molecules/Tabs/index.vue'
import RFButton from 'atoms/RFButton/index.vue'
import ProcedureModalOpenCard from 'molecules/Basket/ProcedureModalOpenCard/index.vue'
import BasketProcedureRoomCard from 'molecules/Basket/BasketProcedureRoomCard/index.vue'
import AlertTag from 'atoms/Tag/AlertRecordTag/index.vue'
import ChooseProcedureRoomModal from 'organisms/Modals/ChooseProcedureRoomModal/index.vue'
import { CheckoutPaymentStage } from '~/src/models/payment'
import { IAppointment, IProcedureRoom } from '~/src/models/procedure_room'
import { IBasketItem } from '~/src/models/basket'
import { AnalysisDonePlace } from '~/src/models/analysis'
/**
 * 'TEMPLATES/FullBasket'
 * @displayName FullBasket
 */
export default Vue.extend({
  name: 'FullBasket',
  components: {
    RFHeading,
    RFText,
    AnalyzesCard,
    Tabs,
    RFButton,
    BasketBillCard,
    ChooseProcedureRoomModal,
    ProcedureModalOpenCard,
    BasketProcedureRoomCard,
    AlertTag,
  },
  data() {
    return {
      tab: 'onsite' as AnalysisDonePlace,
      tabs: [
        {
          id: 'onsite' as AnalysisDonePlace,
          title: 'Приеду сам',
        },
        {
          id: 'offsite' as AnalysisDonePlace,
          title: 'Вызову на дом',
        },
      ],
      showProcedureModal: false,
    }
  },
  computed: {
    analyzesData(): Array<IBasketItem> {
      return this.$store.state.basket.products
    },
    needAppointment(): boolean {
      return !!(this.analyzesData as IBasketItem[]).find(
        (item) => item.appointment
      )
    },
    appointment(): IAppointment {
      return this.$store.state.order.appointment
    },
    chosenExtendedRoom(): IProcedureRoom {
      return this.$store.state.order.procedureRoom
    },
    canCheckout(): boolean {
      return (this.$store.state.order.payable > 0 &&
        (this.tab === 'offsite' ||
          (this.tab === 'onsite' && this.chosenExtendedRoom.id))) as boolean
    },
  },
  methods: {
    clear() {
      this.$store.dispatch('basket/clearBasket')
    },
    removeItem(id) {
      this.$store.dispatch('basket/removeFromBasket', id)
    },
    openProcedureChooseModal() {
      this.showProcedureModal = true
    },
    closeProcedureChooseModal() {
      this.showProcedureModal = false
    },
    checkout() {
      this.$store.commit(
        'order/changePaymentStage',
        'in_progress' as CheckoutPaymentStage
      )
      this.$store.commit('order/setAnalysisDone', this.tab as AnalysisDonePlace)
      this.$router.push({
        name: 'Basket-checkout',
        query: { stage: 'in_progress', analysisDone: this.tab },
      })
    },
  },
})
</script>

<style lang="scss" scoped>
.full_basket {
  &-head {
    width: 100%;
    max-width: 879px;
    justify-content: space-between;
    margin-bottom: 28px;
    align-items: baseline;
    @include flex-row();
    @include wide-tablet {
      max-width: 100%;
    }
    @include phone {
      margin-bottom: 10px;
    }
    button {
      color: $c-gray;
    }
    h1.rf-heading {
      margin: 0;
    }
  }
  &-wrapper {
    gap: 40px;
    @include flex-row();
    &__note {
      max-width: 690px;
      padding-top: 20px;
    }
    section {
      width: 100%;
      max-width: 879px;
      gap: 10px;
      @include flex-column();
      @include wide-tablet {
        max-width: 100%;
      }
    }

    aside {
      width: 100%;
      max-width: 420px;
      gap: 10px;
      margin-top: 100px;
      @include flex-column();
      @include wide-tablet {
        margin: 0;
      }
      button {
        margin-top: 16px;
        padding: 13px;
      }
      button.disabled {
        background: $c-disabled-bg;
        border-radius: 4px;
        color: $c-gray;
      }
      ::v-deep label {
        @include font-size(18px, 28px);
        @include phone {
          @include font-size(16px, 20px);
        }
      }
    }

    @include wide-tablet {
      @include flex-column();
      aside {
        max-width: 100%;
      }
    }
  }
  .analyzes_card {
    &-alert_tag {
      margin-top: 10px;
    }
  }
}

::v-deep {
  .analyzes-card {
    padding: 28px 30px;
    gap: 7px;
    @include phone {
      padding: 20px;
      @include flex-column-reverse();
    }
    &__actions {
      margin: 0;
      @include small-phone {
        align-items: end;
      }
      &-prices {
        margin-bottom: 0;
      }
    }
    &__content-title {
      @include phone {
        width: 100%;
      }
    }
  }
  .close_btn {
    position: static;
  }
  .icons--close-gray {
    background-size: 46%;
  }
  .analyzes-card__content {
    max-width: 550px;
  }
  .card {
    height: fit-content;
  }
}
</style>
