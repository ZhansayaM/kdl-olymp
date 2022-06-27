import { ActionTree, MutationTree } from 'vuex'
import { IDiscountSystem } from 'types/DTO/DiscountSystem'

export const state = () => ({
  discountSystemInfo: [] as IDiscountSystem[],
})

export type stateT = ReturnType<typeof state>

export const actions: ActionTree<stateT, stateT> = {
  async fetchDiscountSystem({ commit }) {
    const response = await this.$repositories.discountSystem.getDiscountSystem()
    commit('setDiscountSystem', response)
  },
}

export const mutations: MutationTree<stateT> = {
  setDiscountSystem(state: stateT, payload: IDiscountSystem[]) {
    state.discountSystemInfo = payload
  },
}

export const getters = {
  getDiscountSystem: (state) => state.discountSystemInfo,
}
