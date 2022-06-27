import { ActionTree, MutationTree } from 'vuex'
import { IInfectiousDisease } from 'types/DTO/InfectiousDisease'

export const state = () => ({
  infectiousDiseaseInfo: [] as IInfectiousDisease[],
})

export type stateT = ReturnType<typeof state>

export const actions: ActionTree<stateT, stateT> = {
  async fetchInfectiousDisease({ commit }) {
    const response =
      await this.$repositories.infectiousDisease.getInfectiousDisease()
    commit('setInfectiousDisease', response)
  },
}

export const mutations: MutationTree<stateT> = {
  setInfectiousDisease(state: stateT, payload: IInfectiousDisease[]) {
    state.infectiousDiseaseInfo = payload
  },
}

export const getters = {
  getInfectiousDisease: (state) => state.infectiousDiseaseInfo,
}
