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
  },
  updateResource (context, resource) {
    context.commit('UPDATERECOMMENDRESOURCE', resource)
  },
  updateBanners (context, banners) {
    context.commit('UPDATEBANNERS', banners)
  },
  initUser (context) {
    context.commit('INITUSER')
  },
  updateSingle (context, value) {
    context.commit('UPDATESINGLE', value)
  },
  updateTheme (context, id) {
    context.commit('UPDATETHEME', id)
  },
  updateMusic (context, info) {
    context.commit('UPDATEMUSIC', info)
  },
  initMusic (context) {
    context.commit('INITMUSIC')
  },
  updatePlaying (context, value) {
    context.commit('UPDATEPLAYING', value)
  },
  updateMusicQueue (context, value) {
    context.commit('UPDATEMUSICQUEUE', value)
  },
  updatePlayingSettings (context, value) {
    context.commit('UPDATEPLAYINGSETTINGS', value)
  }
}

export default actions
