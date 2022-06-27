import { ActionTree, MutationTree } from 'vuex'
import { IPages } from 'types/DTO/Pages'

export const state = () => ({
  pagesInfo: [] as IPages[],
  pagesAllInfo: [] as IPages[],
})

export type stateT = ReturnType<typeof state>

export const actions: ActionTree<stateT, stateT> = {
  async fetchPages({ commit }, slug: string) {
    const response = await this.$repositories.pages.getPages(slug)
    commit('setPages', response)
  },
  async fetchAllPages({ commit }) {
    const response = await this.$repositories.pages.getAllPages()
    commit('setAllPages', response)
  },
}

export const mutations: MutationTree<stateT> = {
  setPages(state: stateT, payload: IPages[]) {
    state.pagesInfo = payload
  },
  setAllPages(state: stateT, payload: IPages[]) {
    state.pagesAllInfo = payload
  },
}

export const getters = {
  getPages: (state) => state.pagesInfo,
  getAllPages: (state) => state.pagesAllInfo,
}
