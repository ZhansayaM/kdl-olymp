export const state = () => ({
  womanBodyData: [],
  womanBodyId: 0,
})

export const mutations = {
  changeWomanBody(state, item) {
    state.womanBodyData = item
  },
  changeWomanBodyId(state, id) {
    state.womanBodyId = id
  },
}
