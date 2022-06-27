import { ActionTree, MutationTree } from 'vuex'
import { INews } from 'types/DTO/News'

export const state = () => ({
  newsInfo: [] as INews[],
  newsAllInfo: [] as INews[],
})

export type stateT = ReturnType<typeof state>

export const actions: ActionTree<stateT, stateT> = {
  async fetchNews({ commit }, slug: string) {
    const response = await this.$repositories.news.getNews(slug)
    commit('setNews', response)
  },
  async fetchAllNews({ commit }) {
    const response = await this.$repositories.news.getAllNews()
    commit('setAllNews', response)
  },
}

export const mutations: MutationTree<stateT> = {
  setNews(state: stateT, payload: INews[]) {
    state.newsInfo = payload
  },
  setAllNews(state: stateT, payload: INews[]) {
    state.newsAllInfo = payload
  },
}

export const getters = {
  getNews: (state) => state.newsInfo,
  getAllNews: (state) => state.newsAllInfo,
}
