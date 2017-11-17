import Vue from 'vue'
import Vuex from 'vuex'
import Menu from '../const/Menu'
import Tab from '../const/Tab'

Vue.use(Vuex)

const state = {
  menubar: Menu.FINDMUSIC.name,
  tabbar: Tab.RECOMMEND,
  user: {
    avatarUrl: 'http://ozg83iln2.bkt.clouddn.com/usered.png',
    nickname: '未登录'
  }
}

const mutations = {
  UPDATEMENUBAR (state, text) {
    state.menubar = text
  },
  UPDATERECOMMED (state, text) {
    state.tabbar = text
  },
  UPDATEUSER (state, user) {
    state.user = user
  }
}

const actions = {
  updateMenubar (context, text) {
    context.commit('UPDATEMENUBAR', text)
  },
  updateTabbar (context, text) {
    context.commit('UPDATERECOMMED', text)
  },
  updateUser (context, user) {
    context.commit('UPDATEUSER', user)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
