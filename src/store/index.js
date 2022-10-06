import { createStore } from 'vuex'

export default createStore({
  state: {
    sidebarVisible: '',
    sidebarUnfoldable: false,
  },
  mutations: {
    toggleSidebar(state) {
      document.getElementsByClassName("sidebar-fixed")[0].classList.toggle("hide");
      document.getElementsByClassName("sidebar-fixed")[1].classList.toggle("hide");
      console.log('header toggleSidebar')
    },
    toggleUnfoldable(state) {
      state.sidebarUnfoldable = !state.sidebarUnfoldable
      console.log('header toggleUnfoldable')
    },
    updateSidebarVisible(state, payload) {
      state.sidebarVisible = payload.value
      console.log('header updateSidebarVisible')
    },
  },
  actions: {},
  modules: {},
})
