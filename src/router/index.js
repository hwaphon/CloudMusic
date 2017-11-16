import Vue from 'vue'
import Router from 'vue-router'
import FindMusic from '@/components/components/content/GFindMusic'
import PeronalFM from '@/components/components/content/GPersonalFM'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainView',
      components: {
        findmusic: FindMusic,
        personalfm: PeronalFM
      }
    }
  ]
})
