<template>
  <div class="gfind-music">
    <GTabbar></GTabbar>
    <GCarousel :imglist="banners" class="gcarousel" v-model="selected"></GCarousel>
    <GNav :title="recommend_song">
      <div class="gsong-layout-container">
        <GSongLayout v-for="(item, index) in 10" :key="index" class="gsong-layout"></GSongLayout>
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
    import { mapState } from 'vuex'
    export default {
      components: {
        GTabbar,
        GCarousel,
        GNav,
        GSongLayout
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
          'recommendResource'
        ])
      },
      created () {
        // 获取 banners 数据
        if (this.util.isEmpty(this.banners)) {
          Api.banner(function (response) {
            if (response.data.code === 200) {
              let { banners } = response.data
              this.selected = banners[0].targetId
              this.$store.dispatch('updateBanners', banners)
            }
          })
        }

        // 获取每日推荐歌单
        if (this.util.isEmpty(this.recommendResource)) {
          Api.recommendResource(function (response) {
           if (response.data.code === 200) {
             this.$store.dispatch('updateResource', response.data.result)
           }
          })
        }
      }
    }
</script>

<style scoped lang="scss">
  @import "../../styles/content/gfindmusic";
</style>
