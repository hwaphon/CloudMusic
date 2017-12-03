<template>
  <div class="musicplayer">
    <div class="player-control">
      <div class="player-backward control-container"
           @click="playBefore"
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
           @click="play"
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
    <MusicPlayerProgress @onUpdate="updateCurrentTime"></MusicPlayerProgress>
    <MusicPlayerVolumn @onUpdate="updateVolumn"></MusicPlayerVolumn>
    <div class="player-list">
      <img :src="PLAY[playingSettings.type - 1]" alt="" @click="togglePlayType" :title="playerTips">
      <img :src="LAYER" alt="">
      <i class="fa fa-file-text-o" aria-hidden="true" @click="showList = !showList"></i>
    </div>
    <MusicList v-if="showList"></MusicList>
  </div>
</template>

<script>
    import { mapState } from 'vuex'
    import MusicPlayerProgress from './MusicPlayerProgress.vue'
    import MusicPlayerVolumn from './MusicPlayerVolumn.vue'
    import MusicList from './MusicList.vue'
    import Type from '../../../const/Type'
    import { PLAY, LAYER } from '../../../const/Player'
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
        },
        playerTips () {
          if (this.playingSettings.type === Type.ORDER) {
            return '顺序播放'
          } else if (this.playingSettings.type === Type.RANDOM) {
            return '随机播放'
          } else if (this.playingSettings.type === Type.LOOP) {
            return '列表循环'
          } else if (this.playingSettings.type === Type.SINGLE) {
            return '单曲循环'
          }
        }
      },
      components: {
        MusicPlayerProgress,
        MusicPlayerVolumn,
        MusicList
      },
      data () {
        return {
          player: '',
          showList: false,
          PLAY: PLAY,
          LAYER: LAYER
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
          this.pause()
          this.$store.dispatch('initMusic')
          this.play()
        },
        play () {
          this.playNextMusic()
          this.preparePlay()
        },
        preparePlay () {
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
        playBefore () {
          let index
          if (this.playingSettings.index === 0) {
            index = this.musicQueue.length - 1
          } else {
            index = this.playingSettings.index - 1
          }
          this.updateIndex(index)
          this.preparePlay()
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
            this.updateCurrentTime(0)
            setTimeout(() => {
              this.player.play()
            }, 1500)
          }
        },
        updateIndex (index) {
          this.$store.dispatch('updatePlayingSettings', { index })
        },
        updateMusic (index) {
          this.$store.dispatch('updateMusic', this.musicQueue[index])
        },
        togglePlayType () {
          if (this.playingSettings.type === Type.ORDER) {
            this.changePlayType(Type.SINGLE)
          } else if (this.playingSettings.type === Type.SINGLE) {
            this.changePlayType(Type.LOOP)
          } else if (this.playingSettings.type === Type.LOOP) {
            this.changePlayType(Type.RANDOM)
          } else if (this.playingSettings.type === Type.RANDOM) {
            this.changePlayType(Type.ORDER)
          }
        },
        changePlayType (type) {
          this.$store.dispatch('updatePlayingSettings', { type })
        },
        updateCurrentTime (time) {
          this.player.currentTime = time
          this.$store.dispatch('updateMusic', { currentTime: time })
        },
        updateVolumn (volumn) {
          if (volumn <= 0.05) {
            volumn = 0
          }
          this.player.volume = volumn
          this.$store.dispatch('updateMusic', { volumn })
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
