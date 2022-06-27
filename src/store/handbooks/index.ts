import { ActionTree, MutationTree } from 'vuex'
import { IHandbooks } from 'types/DTO/Handbooks'

export const state = () => ({
  handbooksInfo: [] as IHandbooks[],
})

export type stateT = ReturnType<typeof state>

export const actions: ActionTree<stateT, stateT> = {
  async fetchHandbooks({ commit }) {
    const response = await this.$repositories.handbooks.getHandbooks()
    commit('setHandbooks', response)
  },
}

export const mutations: MutationTree<stateT> = {
  setHandbooks(state: stateT, payload: IHandbooks[]) {
    state.handbooksInfo = payload
  },
}

export const getters = {
  getHandbooks: (state) => state.handbooksInfo,
}
