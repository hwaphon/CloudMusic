import Menu from '../const/Menu'
import Tab from '../const/Tab'

const state = {
  menubar: Menu.FINDMUSIC.name,
  tabbar: Tab.RECOMMEND,
  user: {
    avatarUrl: 'http://ozg83iln2.bkt.clouddn.com/usered.png',
    nickname: '未登录'
  },
  validate: false,
  recommendResource: [],
  banners: []
}

export default state
