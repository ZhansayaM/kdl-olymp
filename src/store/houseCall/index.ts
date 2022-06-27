import { ActionTree, MutationTree, GetterTree } from 'vuex/types/index'
import { routeCoords, routeMarkers } from './mock'

export const state = () => ({
  routeCoords: [] as any[],
  routeMarkers: [] as any[],
})

type stateT = ReturnType<typeof state>

export const mutations: MutationTree<stateT> = {
  setRouteCoords(state: stateT, coords) {
    state.routeCoords = coords
  },
  setRouteMarkers(state: stateT, markers) {
    state.routeMarkers = markers
  },
}

export const getters: GetterTree<stateT, stateT> = {}

export const actions: ActionTree<stateT, stateT> = {
  initRoute({ commit }) {
    commit('setRouteCoords', routeCoords)
    commit('setRouteMarkers', routeMarkers)
  },
}
