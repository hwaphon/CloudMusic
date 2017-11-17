<template>
  <div class="gfind-music">
    <GTabbar></GTabbar>
    <GCarousel :imglist="imglist" class="gcarousel" v-model="selected"></GCarousel>
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
          imglist: [],
          recommend_song: '推荐歌单'
        }
      },
      created () {
        let that = this
        this.$http.get(Api.banner())
          .then(function (response) {
            if (response.data.code === 200) {
              let { banners } = response.data
              banners.forEach(function (item) {
                that.imglist.push({
                  src: item.pic,
                  des: item.typeTitle,
                  id: item.targetId
                })
              })
              that.selected = that.imglist[0].id
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
</script>

<style scoped lang="scss">
  @import "../../styles/content/gfindmusic";
</style>
