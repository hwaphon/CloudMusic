<template>
  <div class="music-volumn">
    <i class="fa fa-volume-up" aria-hidden="true" v-if="!off" @click="offHandler"></i>
    <i class="fa fa-volume-off" aria-hidden="true" v-else></i>
    <div class="volumn-progress" @click="progressHandler">
      <div
        v-if="!off"
        class="volumn-progress-timed"
        :style="{ backgroundColor: theme, width: progress + 'px' }">
        <span class="thumb" :style="{ backgroundColor: theme }"></span>
      </div>
    </div>
  </div>
</template>

<script>
    import Event from '../../../const/Event'
    import { mapState } from 'vuex'
    export default {
      computed: {
        ...mapState([
          'theme',
          'music'
        ]),
        progress () {
          return Math.round(this.music.volumn / 1 * 90)
        },
        off () {
          return this.music.volumn <= 0.05
        }
      },
      methods: {
        offHandler () {
          this.$emit(Event.UPDATE, 0)
        },
        progressHandler (e) {
          let result = Math.round(e.offsetX * 100 / 90) / 100
          this.$emit(Event.UPDATE, result)
        }
      }
    }
</script>

<style scoped lang="scss">
  @import "../../styles/footer/musicplayervolumn";
</style>
