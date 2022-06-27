import { ActionTree, MutationTree, GetterTree } from 'vuex/types/index'

export const state = () => ({
  acceptPersonalDataCollection: false,
  acceptProcedures: false,
  acceptTerms: false,
})

type stateT = ReturnType<typeof state>

export const mutations: MutationTree<stateT> = {
  setAcceptPersonalDataCollection(state: stateT, payload: boolean) {
    state.acceptPersonalDataCollection = payload
  },
  setAcceptProcedures(state: stateT, payload: boolean) {
    state.acceptProcedures = payload
  },
  setAcceptTerms(state: stateT, payload: boolean) {
    state.acceptTerms = payload
  },
}

export const getters: GetterTree<stateT, stateT> = {
  getAllAccepted: (state) => {
    return (
      state.acceptPersonalDataCollection &&
      state.acceptProcedures &&
      state.acceptTerms
    )
  },
}

export const actions: ActionTree<stateT, stateT> = {}
