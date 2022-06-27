import { ActionTree, MutationTree } from 'vuex/types/index'

interface IModalMessage {
  open: boolean
  message: string
}

export const state = () => ({
  modal_message: {
    open: false,
    message: '',
  } as IModalMessage,
})

export type stateT = ReturnType<typeof state>

export const actions: ActionTree<stateT, stateT> = {
  closeModals({ commit }) {
    commit('closeModals')
  },

  showModalMessage({ commit }, message: string) {
    commit('showModalMessage', message)
  },
}

export const mutations: MutationTree<stateT> = {
  closeModals(state: stateT) {
    state.modal_message.open = false
  },

  showModalMessage(state: stateT, message: string) {
    state.modal_message = {
      open: true,
      message,
    }
  },
}
