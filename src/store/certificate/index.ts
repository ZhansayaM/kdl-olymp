import { ActionTree, MutationTree } from 'vuex'
import { ICertificate } from 'types/DTO/Certificate'

export const state = () => ({
  certificateInfo: [] as ICertificate[],
})

export type stateT = ReturnType<typeof state>

export const actions: ActionTree<stateT, stateT> = {
  async fetchCertificate({ commit }) {
    const response = await this.$repositories.certificate.getCertificate()
    commit('setCertificate', response)
  },
}

export const mutations: MutationTree<stateT> = {
  setCertificate(state: stateT, payload: ICertificate[]) {
    state.certificateInfo = payload
  },
}

export const getters = {
  getCertificate: (state) => state.certificateInfo,
}
