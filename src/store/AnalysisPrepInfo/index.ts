import { ActionTree, MutationTree } from 'vuex'
import { IAnalysisPrepInfo } from 'types/DTO/AnalysisPrepInfo'

export const state = () => ({
  analysisInfo: [] as IAnalysisPrepInfo[],
})

export type stateT = ReturnType<typeof state>

export const actions: ActionTree<stateT, stateT> = {
  async fetchAnalysisPrepInfo({ commit }) {
    const response =
      await this.$repositories.analysisPrepInfo.getAnalysisPrepInfo()
    commit('setAnalysisPrepInfo', response)
  },
}

export const mutations: MutationTree<stateT> = {
  setAnalysisPrepInfo(state: stateT, payload: IAnalysisPrepInfo[]) {
    state.analysisInfo = payload
  },
}

export const getters = {
  getAnalysisPrepInfo: (state) => state.analysisInfo,
}
