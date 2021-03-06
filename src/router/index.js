import Vue from 'vue'
import Router from 'vue-router'
import FindMusic from '@/components/components/content/GFindMusic'
import PersonalFM from '@/components/components/content/GPersonalFM'
import RecommendSong from '@/components/components/findmusic/recommend/RecommendSong'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainView',
      component: FindMusic
    },
    {
      path: '/findmusic',
      name: 'FindMusic',
      component: FindMusic
    },
    {
      path: '/personalfm',
      name: 'PersonalFM',
      component: PersonalFM
    },
    {
      path: '/recommendsong',
      name: 'RecommendSong',
      component: RecommendSong
    }
  ]
})
