import { MutationTree } from 'vuex/types/index'

export const state = () => ({
  /**
   * конечная цена со скидками
   */
  endPrice: 0 as Number,
})

type stateT = ReturnType<typeof state>

export const mutations: MutationTree<stateT> = {
  endPrice(state: stateT, price: number) {
    state.endPrice = price
  },
}
