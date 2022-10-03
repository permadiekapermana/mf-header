import { createStore } from 'vuex'

export default createStore({
  state: {
    sidebarVisible: '',
    sidebarUnfoldable: false,
  },
  mutations: {
    toggleSidebar(state) {
      coreui.Sidebar.getInstance(document.querySelector('#sidebar')).toggle();    
      document.querySelector('#SidebarToggler').click();  
      if(state.sidebarVisible){
        
      }
      state.sidebarVisible = !state.sidebarVisible;
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
