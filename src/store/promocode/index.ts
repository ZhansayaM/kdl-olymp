import { ActionTree, MutationTree } from 'vuex'
import { IPromocode } from 'types/DTO/Promocode'

export const state = () => ({
  promocodeInfo: [] as IPromocode[],
})

export type stateT = ReturnType<typeof state>

export const actions: ActionTree<stateT, stateT> = {
  async fetchPromocode({ commit }) {
    const response = await this.$repositories.promocode.getPromocode()
    commit('setPromocode', response)
  },
}

export const mutations: MutationTree<stateT> = {
  setPromocode(state: stateT, payload: IPromocode[]) {
    state.promocodeInfo = payload
  },
}

export const getters = {
  getPromocode: (state) => state.promocodeInfo,
}
