import Vue from 'vue'
import Vuex from 'vuex'
import Menu from '../const/Menu'
import Tab from '../const/Tab'

Vue.use(Vuex)

const state = {
  menubar: Menu.FINDMUSIC.name,
  tabbar: Tab.RECOMMEND
}

const mutations = {
  UPDATEMENUBAR (state, text) {
    state.menubar = text
  },
  UPDATERECOMMED (state, text) {
    state.tabbar = text
  }
}

const actions = {
  updateMenubar (context, text) {
    context.commit('UPDATEMENUBAR', text)
  },
  updateTabbar (context, text) {
    context.commit('UPDATERECOMMED', text)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
