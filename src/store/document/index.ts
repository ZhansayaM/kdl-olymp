import { ActionTree, MutationTree } from 'vuex'
import { IDocument } from 'types/DTO/Document'

export const state = () => ({
  documentInfo: [] as IDocument[],
})

export type stateT = ReturnType<typeof state>

export const actions: ActionTree<stateT, stateT> = {
  async fetchDocument({ commit }) {
    const response = await this.$repositories.document.getDocument()
    commit('setDocument', response)
  },
}

export const mutations: MutationTree<stateT> = {
  setDocument(state: stateT, payload: IDocument[]) {
    state.documentInfo = payload
  },
}

export const getters = {
  getDocument: (state) => state.documentInfo,
}
