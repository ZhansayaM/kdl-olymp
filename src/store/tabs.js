export const state = () => ({
  tabsData: [],
  tabsActive: '',
})

export const mutations = {
  changeTabs(state, item) {
    state.tabsData = item
  },
  changeTabsActive(state, item) {
    state.tabsActive = item
  },
}
