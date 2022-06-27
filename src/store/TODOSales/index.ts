// import { ActionTree, MutationTree } from 'vuex'
// import { ISales } from 'types/DTO/Sales'

// export const state = () => ({
//   salesInfo: [] as ISales[],
// })

// export type stateT = ReturnType<typeof state>

// export const actions: ActionTree<stateT, stateT> = {
//   async fetchSales({ commit }) {
//     const response = await this.$repositories.sales.getSales()
//     commit('setSales', response)
//   },
// }

// export const mutations: MutationTree<stateT> = {
//   setSales(state: stateT, payload: ISales[]) {
//     state.salesInfo = payload
//   },
// }

// export const getters = {
//   getSales: (state) => state.salesInfo,
// }
