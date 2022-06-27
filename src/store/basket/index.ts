import { ActionTree, MutationTree } from 'vuex/types/index'
import mockBasketProducts from './mock'
import { IBasketItem } from '~/src/models/basket'

export const state = () => ({
  /**
   * Список покупок в корзине
   */
  products: [] as IBasketItem[],
})

type stateT = ReturnType<typeof state>

export const mutations: MutationTree<stateT> = {
  /**
   * Добавить в корзину
   */
  addToBasket(state: stateT, item: IBasketItem) {
    state.products.push(item)
  },
  /**
   * Удаление из корзины
   * */
  deleteFromBasket(state: stateT, id: number) {
    state.products = state.products.filter(
      (listItem: IBasketItem) => listItem.id !== id
    )
  },
  /**
   * Инициализация корзины при входе
   * */
  initBasket(state: stateT, newList: IBasketItem[]) {
    state.products = newList
  },
}

export const actions: ActionTree<stateT, stateT> = {
  /**
   * Получить список товаров
   */
  fetchBasket({ commit }) {
    commit('initBasket', mockBasketProducts)
  },
  /**
   * Добавить в Корзину
   * @property {any} item - товар
   */
  addToBasket({ commit, state }, item: IBasketItem) {
    /* if a product already exists, increase count */
    const product = state.products.find((p) => p.id === item.id)
    if (product) {
      commit('deleteFromBasket', item.id)
      product.count = product.count ? +product.count + 1 : 2
      commit('addToBasket', product)
    } else commit('addToBasket', item)
  },
  /**
   * Удалить из Корзины
   * @property {any} item - товар
   */
  removeFromBasket({ commit, state }, itemId: number) {
    const product = state.products.find((p) => p.id === itemId)
    if (product && product.count && product.count > 1) {
      commit('deleteFromBasket', itemId)
      product.count = +product.count - 1
      commit('addToBasket', product)
    } else commit('deleteFromBasket', itemId)
  },
  /**
   * Очистка корзины
   */
  clearBasket({ commit }) {
    commit('initBasket', [])
  },
}
