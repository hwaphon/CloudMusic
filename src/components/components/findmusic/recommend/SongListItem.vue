<template>
  <div class="songlist-item"
       :class="{ 'dark': index % 2 !== 0 }"
       @click="clickHandler">
    <div class="songlist-item-header">
      <span>{{ finalIndex }}</span>
      <i class="fa fa-heart-o" aria-hidden="true"></i>
      <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>
    </div>
    <div class="songlist-item-info">
      <span class="songlist-item-info-song">{{ song }}</span>
      <span class="songlist-item-info-songer">{{ finalSonger }}</span>
      <span class="songlist-item-info-album">{{ album }}</span>
      <span class="songlist-item-info-time">{{ finalTime }}</span>
    </div>
  </div>
</template>

<script>
    import getMusicById from '../../../../util/music'
    import secondToTime from '../../../../util/time'
    export default {
      props: {
        id: { type: String | Number },
        index: { type: Number | String, default: '' },
        song: { type: String, default: '' },
        songer: { type: Array, default () { return [] } },
        album: { type: String, default: '' },
        time: { type: Number | String, default: '' }
      },
      computed: {
        finalIndex () {
          let indexS = this.index.toString()
          return indexS.length > 1 ? indexS : `0${indexS}`
        },
        finalSonger () {
          let t = this.util.pluck(this.songer, 'name')
          return t.join('/')
        },
        finalTime () {
          let total = Math.floor(this.time / 1000)
          return secondToTime(total)
        }
      },
      methods: {
        clickHandler () {
          this.$store.dispatch('updateMusic', { src: getMusicById(this.id) })
          this.$store.dispatch('updatePlaying', false)
        }
      }
    }
</script>

<style scoped lang="scss">
  @import "../../../styles/findmusic/recommend/songlistitem";
</style>
