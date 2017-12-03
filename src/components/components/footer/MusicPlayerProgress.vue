<template>
  <div class="musicplayer-progress">
    <span class="progress-time">{{ finalCurrentTime }}</span>
    <div class="progress" @click="progressHandler">
      <div
        class="progress-timed"
        :style="{ backgroundColor: theme, width: progress + 'px' }">
        <span class="thumb" :style="{ backgroundColor: theme }"></span>
      </div>
    </div>
    <span class="progress-total">{{ finalTime }}</span>
  </div>
</template>

<script>
    import Event from '../../../const/Event'
    import { mapState } from 'vuex'
    import secondToTime from '../../../util/time'
    export default {
      computed: {
        ...mapState([
          'theme',
          'user',
          'music'
        ]),
        finalTime () {
          return secondToTime(this.music.duration)
        },
        finalCurrentTime () {
          return secondToTime(this.music.currentTime)
        },
        progress () {
          if (this.music.duration === 0) {
            return 0
          }
          return Math.round(this.music.currentTime / this.music.duration * 778) - 12
        }
      },
      methods: {
        progressHandler (e) {
          let result = Math.round(e.offsetX / 778 * this.music.duration)
          this.$emit(Event.UPDATE, result)
        }
      }
    }
</script>

<style scoped lang="scss">
  @import "../../styles/footer/musicplayerprogress";
</style>
