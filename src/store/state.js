import Menu from '../const/Menu'
import Tab from '../const/Tab'
import Color from '../const/Theme'

const state = {
  menubar: Menu.FINDMUSIC.name,
  tabbar: Tab.RECOMMEND,
  user: {
    avatarUrl: 'http://ozg83iln2.bkt.clouddn.com/usered.png',
    nickname: '未登录'
  },
  validate: false,
  recommendResource: [],
  banners: [],
  // 0 表示二者都关闭，1表示个人信息面板开启，2表示主题信息打开
  headerSingle: 0,
  theme: Color[0].value,
  music: {},
  playing: false
}

export default state
