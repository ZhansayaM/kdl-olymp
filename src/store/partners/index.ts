import { ActionTree, MutationTree } from 'vuex'
import { IPartners } from 'types/DTO/Partners'

export const state = () => ({
  partnersInfo: [] as IPartners[],
})

export type stateT = ReturnType<typeof state>

export const actions: ActionTree<stateT, stateT> = {
  async fetchPartners({ commit }) {
    const response = await this.$repositories.partners.getPartners()
    commit('setPartners', response)
  },
}

export const mutations: MutationTree<stateT> = {
  setPartners(state: stateT, payload: IPartners[]) {
    state.partnersInfo = payload
  },
}

export const getters = {
  getPartners: (state) => state.partnersInfo,
}
