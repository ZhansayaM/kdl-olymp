import { ActionTree, MutationTree } from 'vuex'
import { IContact } from 'types/DTO/Contact'

export const state = () => ({
  contactInfo: [] as IContact[],
})

export type stateT = ReturnType<typeof state>

export const actions: ActionTree<stateT, stateT> = {
  async fetchContact({ commit }) {
    const response = await this.$repositories.contact.getContact()
    commit('setContact', response)
  },
}

export const mutations: MutationTree<stateT> = {
  setContact(state: stateT, payload: IContact[]) {
    state.contactInfo = payload
  },
}

export const getters = {
  getContact: (state) => state.contactInfo,
}
