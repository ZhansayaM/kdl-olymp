import { ActionTree, MutationTree } from 'vuex/types/index'
import { IProcedureRoom, IAppointment } from '~/src/models/procedure_room'
import { IDiscountCard } from '~/src/models/discount_card'
import { CheckoutPaymentStage, EPaymentMethod } from '~/src/models/payment'
import { AnalysisDonePlace } from '~/src/models/analysis'

export const state = () => ({
  id: 125633,
  stage: 'none' as CheckoutPaymentStage,
  analysisDone: 'onsite' as AnalysisDonePlace,
  discountCard: {
    number: '2000018200001',
    discount: 10,
  } as IDiscountCard,
  procedureRoom: {} as IProcedureRoom,
  appointment: {} as IAppointment,
  houseCall: {
    address: '',
    date: '',
  },
  payable: 0,
  paymentMethod: 'in_person' as EPaymentMethod,
})

type stateT = ReturnType<typeof state>

export const mutations: MutationTree<stateT> = {
  setId(state: stateT, id: number) {
    state.id = id
  },
  /**
   * Установить результат вычисление
   * */
  setProcedureRoom(state: stateT, room: IProcedureRoom) {
    state.procedureRoom = room
  },
  setAnalysisDone(state: stateT, place: AnalysisDonePlace) {
    state.analysisDone = place
  },
  setPayable(state: stateT, payable: number) {
    state.payable = payable
  },
  setDiscountCard(state: stateT, card: IDiscountCard) {
    state.discountCard = card
  },
  setHouseCall(state: stateT, houseCall) {
    state.houseCall = houseCall
  },
  setAppointment(state: stateT, appointment: IAppointment) {
    state.appointment = appointment
  },
  setPaymentMethod(state: stateT, method: EPaymentMethod) {
    state.paymentMethod = method
  },
  changePaymentStage(state: stateT, stage: CheckoutPaymentStage) {
    state.stage = stage
  },
}

export const actions: ActionTree<stateT, stateT> = {}
