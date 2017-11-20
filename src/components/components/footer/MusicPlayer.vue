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
    <audio
      v-show="false"
      id="player"
      preload="auto"
      :src="music.src"
      @ended="endHandler"
      @timeupdate="timeupdate">
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
          'theme',
          'music',
          'playing'
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
          player: ''
        }
      },
      methods: {
        playHandler () {
          if (this.playing) {
            this.pause()
          } else {
            this.play()
          }
        },
        updateTotalTime () {
          this.$store.dispatch('updateUser', { duration: this.player.duration })
        },
        endHandler () {

        },
        play () {
          this.$store.dispatch('updatePlaying', true)
          this.player.play()
          this.util.delay(this.updateTotalTime, 500)
        },
        pause () {
          this.$store.dispatch('updatePlaying', false)
          this.player.pause()
        },
        timeupdate () {
          this.$store.dispatch('updateUser', { currentTime: Math.round(this.player.currentTime) })
        }
      },
      watch: {
        playing (value) {
          if (value) {
            this.player.play()
            this.util.delay(this.updateTotalTime, 500)
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
