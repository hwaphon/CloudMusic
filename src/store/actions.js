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
  }
}

export default actions
