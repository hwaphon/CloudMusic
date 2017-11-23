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
    <MusicPlayerProgress></MusicPlayerProgress>
    <MusicPlayerVolumn></MusicPlayerVolumn>
  </div>
</template>

<script>
    import { mapState } from 'vuex'
    import MusicPlayerProgress from './MusicPlayerProgress.vue'
    import MusicPlayerVolumn from './MusicPlayerVolumn.vue'
    import Type from '../../../const/Type'
    export default {
      computed: {
        ...mapState([
          'theme',
          'musicQueue',
          'music',
          'playing',
          'playingSettings'
        ]),
        totalTime () {
          return this.player.duration
        },
        currentTime () {
          return this.player.currentTime
        }
      },
      components: {
        MusicPlayerProgress,
        MusicPlayerVolumn
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
              if (!this.music.src) {
                this.play()
                return
              }
              this.$store.dispatch('updatePlaying', true)
              this.player.play()
            }
        },
        updateTotalTime () {
          this.$store.dispatch('updateMusic', { duration: this.player.duration })
        },
        endHandler () {
          console.log('end')
        },
        play () {
          this.playNextMusic()
          this.updateMusic(this.playingSettings.index)
          this.$store.dispatch('updatePlaying', true)
          this.player.addEventListener('canplay', () => {
            this.player.play()
            this.util.delay(this.updateTotalTime, 200)
          })
        },
        pause () {
          this.player.pause()
          this.$store.dispatch('updatePlaying', false)
        },
        timeupdate () {
          this.$store.dispatch('updateMusic', { currentTime: Math.round(this.player.currentTime) })
        },
        playNextMusic () {
          if (Type.ORDER === this.playingSettings.type) {
            if (this.playingSettings.index === this.musicQueue.length - 1) {
              this.$store.dispatch('updatePlaying', false)
            } else {
              this.updateIndex(this.playingSettings.index + 1)
            }
          } else if (Type.RANDOM === this.playingSettings.type) {
            let index = Math.floor(this.musicQueue.length * Math.random())
            this.updateIndex(index)
          } else if (Type.LOOP === this.playingSettings.type) {
            let index = this.playingSettings.index + 1
            if (index >= this.musicQueue.length) {
              index = 0
            }
            this.updateIndex(index)
          } else if (Type.SINGLE === this.playingSettings.type) {
          }
        },
        updateIndex (index) {
          this.$store.dispatch('updatePlayingSettings', { index })
        },
        updateMusic (index) {
          this.$store.dispatch('updateMusic', this.musicQueue[index])
        }
      },
      watch: {
        playing (value) {
          if (value) {
            this.play()
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
