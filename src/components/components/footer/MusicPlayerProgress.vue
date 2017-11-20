<template>
  <div class="musicplayer-progress">
    <span class="progress-time">00:24</span>
    <div class="progress">
      <span class="progress-timed" :style="{ backgroundColor: theme }"></span>
    </div>
    <span class="progress-total">03:40</span>
  </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
      props: {
        currentTime: { type: String | Number, default: 0},
        totalTime: {type: String | Number, default: 0 }
      },
      computed: {
        ...mapState([
          'theme'
        ])
      }
    }
</script>

<style scoped lang="scss">
  @import "../../styles/footer/musicplayerprogress";
</style>
