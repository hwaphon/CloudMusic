import _ from 'underscore'
import Color from '../const/Theme'

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
  },
  UPDATERECOMMENDRESOURCE (state, resource) {
    state.recommendResource = resource
  },
  UPDATEBANNERS (state, banner) {
    state.banners = banner
  },
  INITUSER (state) {
    state.validate = false
    state.user = {
      avatarUrl: 'http://ozg83iln2.bkt.clouddn.com/usered.png',
      nickname: '未登录'
    }
  },
  UPDATESINGLE (state, value) {
    state.headerSingle = value
  },
  UPDATETHEME (state, id) {
    let index = _.findIndex(Color, { id })
    state.theme = Color[index].value
  }
}

export default mutations
