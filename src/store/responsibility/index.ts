import { ActionTree, MutationTree } from 'vuex'
import { IResponsibility } from 'types/DTO/Responsibility'

export const state = () => ({
  responsibilityInfo: [] as IResponsibility[],
})

export type stateT = ReturnType<typeof state>

export const actions: ActionTree<stateT, stateT> = {
  async fetchResponsibility({ commit }) {
    const response = await this.$repositories.responsibility.getResponsibility()
    commit('setResponsibility', response)
  },
}

export const mutations: MutationTree<stateT> = {
  setResponsibility(state: stateT, payload: IResponsibility[]) {
    state.responsibilityInfo = payload
  },
}

export const getters = {
  getResponsibility: (state) => state.responsibilityInfo,
}
