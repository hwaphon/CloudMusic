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
    <audio v-show="false" id="player" preload="auto" :src="src">
    </audio>
    <MusicPlayerProgress :totalTime="totalTime" :currentTime="currentTime"></MusicPlayerProgress>
  </div>
</template>

<script>
    import { mapState } from 'vuex'
    import MusicPlayerProgress from './MusicPlayerProgress.vue'
    export default {
      computed: {
        ...mapState([
          'theme'
        ]),
        totalTime () {
          return this.player.duration
        },
        currentTime () {
          return this.player.currentTime
        }
      },
      components: {
        MusicPlayerProgress
      },
      data () {
        return {
          playing: false,
          src: 'http://ozg83iln2.bkt.clouddn.com/test.mp3',
          player: ''
        }
      },
      methods: {
        playHandler () {
          if (this.playing = !this.playing) {
            this.player.play()
          } else {
            this.player.pause()
          }
        }
      },
      mounted () {
        this.player = document.querySelector('#player')
      }
    }
</script>

<style scoped lang="scss">
  @import "../../styles/footer/musicplayer";
</style>
