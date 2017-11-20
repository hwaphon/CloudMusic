<template>
  <div class="musicplayer-progress">
    <span class="progress-time">{{ finalCurrentTime }}</span>
    <div class="progress">
      <span
        class="progress-timed"
        :style="{ backgroundColor: theme, width: progress + 'px' }"></span>
    </div>
    <span class="progress-total">{{ finalTime }}</span>
  </div>
</template>

<script>
    import { mapState } from 'vuex'
    import secondToTime from '../../../util/time'
    export default {
      props: {
        currentTime: { type: String | Number, default: 0},
        totalTime: {type: String | Number, default: 0 }
      },
      computed: {
        ...mapState([
          'theme',
          'user'
        ]),
        finalTime () {
          return secondToTime(this.user.duration)
        },
        finalCurrentTime () {
          return secondToTime(this.user.currentTime)
        },
        progress () {
          return Math.round(this.user.currentTime / this.user.duration * 778)
        }
      }
    }
</script>

<style scoped lang="scss">
  @import "../../styles/footer/musicplayerprogress";
</style>
