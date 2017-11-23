import Type from '../const/Type'

const getters = {
  getUserBasicInfo (state) {
    let result = []
    result.push(
      {type: "动态", value: state.user.eventCount},
      {type: "关注", value: state.user.follows},
      {type: "粉丝", value: state.user.followeds}
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

export default getters
