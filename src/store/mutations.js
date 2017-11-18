import _ from 'underscore'

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
  }
}

export default mutations
