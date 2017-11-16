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
    export default {
      components: {
        GTabbar,
        GCarousel,
        GNav,
        GSongLayout
      },
      data () {
        return {
          selected: 1,
          imglist: [
            { src: 'http://p1.music.126.net/gjKyr2a_9WJ_HC8G1Vm1aA==/19074327719103255.jpg',
              des: 'Item 1',
              id: 1
            },
            {
              src: 'http://p1.music.126.net/ggtUdi-FGrU9oaxrB1Qf7Q==/18786255674284900.jpg',
              des: 'Item 2',
              id: 2
            },
            {
              src: 'http://p1.music.126.net/A0hYH8uPDqFBsM78rwsDMw==/19132601835361336.jpg',
              des: 'Item 3',
              id: 3
            },
            {
              src: 'http://p1.music.126.net/vOE_Ks8N6SW1KYIv5oS9hA==/19077626253986537.jpg',
              des: 'Item 4',
              id: 4
            }
          ],
          recommend_song: '推荐歌单'
        }
      }
    }
</script>

<style scoped lang="scss">
  @import "../../styles/content/gfindmusic";
</style>
