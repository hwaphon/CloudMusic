<template>
  <div class="musicplayer">
    <div class="player-control">
      <div class="player-backward control-container"
           :style="{ backgroundColor: theme }">
        <i class="fa fa-step-backward" aria-hidden="true"></i>
      </div>
      <div class="player-ps control-container"
           :style="{ backgroundColor: theme }"
           @click="playHandler">
        <i class="fa fa-pause" aria-hidden="true" v-if="playing"></i>
        <i class="fa fa-play" aria-hidden="true" v-if="!playing"></i>
      </div>
      <div class="player-forward control-container"
           :style="{ backgroundColor: theme }">
        <i class="fa fa-step-forward" aria-hidden="true"></i>
      </div>
    </div>
    <MusicPlayerProgress></MusicPlayerProgress>
    <audio v-show="false" ref="player"></audio>
  </div>
</template>

<script>
    import { mapState } from 'vuex'
    import MusicPlayerProgress from './MusicPlayerProgress.vue'
    export default {
      data () {
        return {
          src: 'http://m10.music.126.net/20171120124503/2c8586c140378373c1767d1d41a98c15/ymusic/1e04/8fec/3d96/7222f10ddce6facc33a520640eb2efa1.mp3'
        }
      },
      computed: {
        ...mapState([
          'theme'
        ])
      },
      components: {
        MusicPlayerProgress
      },
      data () {
        return {
          playing: false
        }
      },
      methods: {
        playHandler () {
          this.playing = !this.playing
        }
      }
    }
</script>

<style scoped lang="scss">
  @import "../../styles/footer/musicplayer";
</style>
