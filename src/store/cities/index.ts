import { ActionTree, MutationTree, GetterTree } from 'vuex/types/index'
import citiesMock from './mock'

export const state = () => ({
  cities: citiesMock,
  city: { ...citiesMock[0] },
})

type stateT = ReturnType<typeof state>

export const mutations: MutationTree<stateT> = {
  setCity(state: stateT, payload) {
    state.city = payload
  },
}

export const getters: GetterTree<stateT, stateT> = {
  getCity(state) {
    return state.city
  },
}

export const actions: ActionTree<stateT, stateT> = {}
