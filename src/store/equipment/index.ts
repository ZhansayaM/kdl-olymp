import { ActionTree, MutationTree } from 'vuex'
import { IEquipment } from 'types/DTO/Equipment'

export const state = () => ({
  equipmentInfo: [] as IEquipment[],
  equipmentAllInfo: [] as IEquipment[],
})

export type stateT = ReturnType<typeof state>

export const actions: ActionTree<stateT, stateT> = {
  async fetchEquipment({ commit }, slug: string) {
    const response = await this.$repositories.equipment.getEquipment(slug)
    commit('setEquipment', response)
  },
  async fetchAllEquipment({ commit }) {
    const response = await this.$repositories.equipment.getAllEquipment()
    commit('setAllEquipment', response)
  },
}

export const mutations: MutationTree<stateT> = {
  setEquipment(state: stateT, payload: IEquipment[]) {
    state.equipmentInfo = payload
  },
  setAllEquipment(state: stateT, payload: IEquipment[]) {
    state.equipmentAllInfo = payload
  },
}

export const getters = {
  getEquipment: (state) => state.equipmentInfo,
  getAllEquipment: (state) => state.equipmentAllInfo,
}
