<template>
  <div class="gfind-music">
    <GTabbar></GTabbar>
    <GCarousel :imglist="banners" class="gcarousel" v-model="selected"></GCarousel>
    <GNav :title="recommend_song">
      <div class="gsong-layout-container">
        <GSongLayout
          des="每日歌曲推荐"
          copywriter="根据你的音乐口味生成每日推荐"
          @onClick="routerToRecommendSong">
          <div class="gsong-layout-recommend">
            <span class="gsong-layout-week">{{ todayDate.week }}</span>
            <span class="gsong-layout-date" :style="{ color: theme }">{{ todayDate.day }}</span>
          </div>
        </GSongLayout>
        <GSongLayout
          v-for="(item, index) in recommendResource"
          :key="index"
          :des="item.name"
          :count="item.playCount"
          :copywriter="item.copywriter"
          class="gsong-layout">
          <img :src="item.picUrl" :alt="item.des" class="gsong-layout-img">
        </GSongLayout>
      </div>
    </GNav>
  </div>
</template>

<script>
    import GTabbar from './tab/GTabbar.vue'
    import GCarousel from './carousel/GCarousel.vue'
    import GNav from './nav/GNav.vue'
    import GSongLayout from './layout/GSongLayout.vue'
    import Api from '../../../const/Api'
    import toWeek from '../../../util/date'
    import { mapState } from 'vuex'
    export default {
      components: {
        GTabbar,
        GCarousel,
        GNav,
        GSongLayout
      },
      methods: {
        routerToRecommendSong () {
          this.$router.push('/recommendsong')
        }
      },
      data () {
        return {
          selected: 0,
          recommend_song: '推荐歌单'
        }
      },
      computed: {
        ...mapState([
          'banners',
          'user',
          'recommendResource',
          'theme'
        ]),
        todayDate () {
          let date = new Date()
          return {
            day: date.getDate(),
            week: toWeek(date.getDay())
          }
        }
      },
      created () {
        let that = this
        // 获取 banners 数据
        if (this.util.isEmpty(this.banners)) {
          Api.banner(function (response) {
            if (response.data.code === 200) {
              let { banners } = response.data
              that.selected = banners[0].targetId
              that.$store.dispatch('updateBanners', banners)
            }
          })
        }
        // 获取每日推荐歌单
        if (this.util.isEmpty(this.recommendResource)) {
          Api.recommendResource(function (response) {
           if (response.data.code === 200) {
             that.$store.dispatch('updateResource', response.data.result)
           }
          })
        }
      }
    }
</script>

<style scoped lang="scss">
  @import "../../styles/content/gfindmusic";
</style>
