import { ActionTree, MutationTree } from 'vuex'
import { IAnalysisPrepare } from 'types/DTO/Prepare'

export const state = () => ({
  analysisPrepare: [] as IAnalysisPrepare[],
})

export type stateT = ReturnType<typeof state>

export const actions: ActionTree<stateT, stateT> = {
  async fetchAnalysisPrepare({ commit }) {
    const response =
      await this.$repositories.analysisPrepare.getAnalysisPrepare()
    commit('setAnalysisPrepare', response)
  },
}

export const mutations: MutationTree<stateT> = {
  setAnalysisPrepare(state: stateT, payload: IAnalysisPrepare[]) {
    state.analysisPrepare = payload
  },
}

export const getters = {
  getAnalysisPrepare: (state) => state.analysisPrepare,
}
