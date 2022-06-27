import { ActionTree, MutationTree } from 'vuex'
import { IAbout } from 'types/DTO/About'

export const state = () => ({
  aboutInfo: [] as IAbout[],
})

export type stateT = ReturnType<typeof state>

export const actions: ActionTree<stateT, stateT> = {
  async fetchAbout({ commit }) {
    const response = await this.$repositories.about.getAbout()
    commit('setAbout', response)
  },
}

export const mutations: MutationTree<stateT> = {
  setAbout(state: stateT, payload: IAbout[]) {
    state.aboutInfo = payload
  },
}

export const getters = {
  getAbout: (state) => state.aboutInfo,
}
