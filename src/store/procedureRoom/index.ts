import { ActionTree, MutationTree } from 'vuex/types/index'
import mockProcedureRooms from './mock'
import { IProcedureRoom } from '~/src/models/procedure_room'

export const state = () => ({
  items: [] as IProcedureRoom[],
})

type stateT = ReturnType<typeof state>

export const mutations: MutationTree<stateT> = {
  setProcedureRooms(state: stateT, rooms: IProcedureRoom[]) {
    state.items = rooms
  },
}

export const actions: ActionTree<stateT, stateT> = {
  fetchProcedureRooms({ commit }) {
    commit('setProcedureRooms', mockProcedureRooms)
  },
}
