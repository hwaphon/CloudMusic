<template>
  <div class="gnow-music">
    <img :src="music.picUrl" alt="">
    <div class="gnow-music-info">
      <span class="gnow-music-song">{{ music.name }}</span>
      <span class="gnow-music-songer">{{ music.songer }}</span>
    </div>
    <div class="gnow-music-icon">
      <i class="fa fa-heart-o" aria-hidden="true"></i>
      <i class="fa fa-share-square-o" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
      computed: {
        ...mapState([
          'music'
        ])
      }
    }
</script>

<style scoped lang="scss">
  @import "../../styles/content/gnowmusic";
</style>
