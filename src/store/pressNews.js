export const state = () => ({
  pressNewsData: [],
  pressNewsId: 0,
})

export const mutations = {
  changePressNews(state, item) {
    state.pressNewsData = item
  },
  changePressNewsId(state, id) {
    state.pressNewsId = id
  },
}
