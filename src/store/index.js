import Vue from 'vue'
import Vuex from 'vuex'
import Menu from '../const/Menu'

Vue.use(Vuex)

const state = {
  menubar: Menu.FINDMUSIC.name
}

const mutations = {
  UPDATEMENUBAR (state, text) {
    state.menubar = text
  }
}

const actions = {
  updateMenubar (context, text) {
    context.commit('UPDATEMENUBAR', text)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
