import { ActionTree, MutationTree } from 'vuex'
import { ILeadership } from 'types/DTO/Leadership'

export const state = () => ({
  leadershipAllInfo: [] as ILeadership[],
  leadershipInfo: [] as ILeadership[],
})

export type stateT = ReturnType<typeof state>

export const actions: ActionTree<stateT, stateT> = {
  async fetchAllLeadership({ commit }) {
    const response = await this.$repositories.leadership.getAllLeadership()
    commit('setAllLeadership', response)
  },

  async fetchLeadership({ commit }, slug: string) {
    const response = await this.$repositories.leadership.getLeadership(slug)
    commit('setLeadership', response)
  },
}

export const mutations: MutationTree<stateT> = {
  setLeadership(state: stateT, payload: ILeadership[]) {
    state.leadershipInfo = payload
  },
  setAllLeadership(state: stateT, payload: ILeadership[]) {
    state.leadershipAllInfo = payload
  },
}

export const getters = {
  getLeadership: (state) => state.leadershipInfo,
  getAllLeadership: (state) => state.leadershipAllInfo,
}
