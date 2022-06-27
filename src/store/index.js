export const state = () => ({
  service: {},
  analysesType: [],
})

export const mutations = {
  storeArray(state, arr) {
    state.analysesType = arr
  },
  changeService(state, item) {
    state.service = item
  },
}
