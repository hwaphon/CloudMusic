import Vue from 'vue'
import Vuex from 'vuex'
import Menu from '../const/Menu'
import Tab from '../const/Tab'
import _ from 'underscore'

Vue.use(Vuex)

const state = {
  menubar: Menu.FINDMUSIC.name,
  tabbar: Tab.RECOMMEND,
  user: {
    avatarUrl: 'http://ozg83iln2.bkt.clouddn.com/usered.png',
    nickname: '未登录'
  },
  validate: false
}

const getters = {
  getUserBasicInfo (state) {
    let result = []
    result.push(
      { type: "动态", value:  state.user.eventCount },
      { type: "关注", value: state.user.follows },
      { type: "粉丝", value: state.user.followeds }
    )
    return result
  },

  getUserVip (state) {
    if (state.user.vipType == 0) {
      return '未订购'
    }
  },

  getUserLevel (state) {
    return `LV.${state.user.level}`
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
    state.user = _.extend(state.user, user)
  },
  UPDATEVALIDATE (state, validate) {
    state.validate = validate
  },
  UPDATELEVEL (state, level) {
    state.user.level = level
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
  },
  updateValidate (context, validate) {
    context.commit('UPDATEVALIDATE', validate)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
