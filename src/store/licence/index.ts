import { ActionTree, MutationTree } from 'vuex'
import { ILicence } from 'types/DTO/Licence'

export const state = () => ({
  licenceInfo: [] as ILicence[],
})

export type stateT = ReturnType<typeof state>

export const actions: ActionTree<stateT, stateT> = {
  async fetchLicence({ commit }) {
    const response = await this.$repositories.licence.getLicence()
    commit('setLicence', response)
  },
}

export const mutations: MutationTree<stateT> = {
  setLicence(state: stateT, payload: ILicence[]) {
    state.licenceInfo = payload
  },
}

export const getters = {
  getLicence: (state) => state.licenceInfo,
}
