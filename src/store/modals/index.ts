import { ActionTree, MutationTree, GetterTree } from 'vuex/types/index'

export interface IModalPromo {
  open: boolean
  data: {}
}

export const state = () => ({
  modal_promo: {
    open: false,
    data: {},
  } as IModalPromo,
  modal_covid_terms: {
    open: false,
    data: {},
  } as IModalPromo,
})

export type stateT = ReturnType<typeof state>

export const actions: ActionTree<stateT, stateT> = {
  closeModals({ commit }) {
    commit('closeModals')
  },

  showModalPromo({ commit }, data: {}) {
    commit('showModalPromo', data)
  },

  showModalCovidTerms({ commit }, data: {}) {
    commit('showModalCovidTerms', data)
  },
}

export const mutations: MutationTree<stateT> = {
  closeModals(state: stateT) {
    state.modal_promo.open = false
    state.modal_covid_terms.open = false
  },

  showModalPromo(state: stateT, data: {}) {
    state.modal_promo = {
      open: true,
      data,
    }
  },

  showModalCovidTerms(state: stateT, data: {}) {
    state.modal_covid_terms = {
      open: true,
      data,
    }
  },
}

export const getters: GetterTree<stateT, stateT> = {
  modalOpen(state) {
    return state.modal_covid_terms.open || state.modal_promo.open
  },
}
