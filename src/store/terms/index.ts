import { ActionTree, MutationTree } from 'vuex'
import { ITerms } from 'types/DTO/Terms'

export const state = () => ({
  termsInfo: [] as ITerms[],
})

export type stateT = ReturnType<typeof state>

export const actions: ActionTree<stateT, stateT> = {
  async fetchTerms({ commit }) {
    const response = await this.$repositories.terms.getTerms()
    commit('setTerms', response)
  },
}

export const mutations: MutationTree<stateT> = {
  setTerms(state: stateT, payload: ITerms[]) {
    state.termsInfo = payload
  },
}

export const getters = {
  getTerms: (state) => state.termsInfo,
}
