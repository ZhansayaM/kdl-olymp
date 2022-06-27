export const state = () => ({
  manBodyData: [],
  manBodyId: 0,
})

export const mutations = {
  changeManBody(state, item) {
    state.manBodyData = item
  },
  changeManBodyId(state, id) {
    state.manBodyId = id
  },
}
