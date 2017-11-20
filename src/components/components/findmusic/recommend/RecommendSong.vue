<template>
  <div class="recommendsong">
    <div class="recommendsong-header">
      <div class="gsong-layout">
        <div class="gsong-layout-recommend">
          <span class="gsong-layout-week">{{ todayDate.week }}</span>
          <span class="gsong-layout-date" :style="{ color: theme }">{{ todayDate.day }}</span>
        </div>
      </div>
      <div class="recommendsong-header-des">
        <span>每日歌曲推荐</span>
        <span>根据你的音乐口味生成，每天6:00更新</span>
      </div>
    </div>
    <SongList :list="recommends"></SongList>
  </div>
</template>

<script>
    import SongList from './SongList.vue'
    import toWeek from '../../../../util/date'
    import Api from '../../../../const/Api'
    import { mapState } from 'vuex'
    export default {
      data () {
        return {
          recommends: []
        }
      },
      computed: {
        ...mapState([
          'theme'
        ]),
        todayDate () {
          let date = new Date()
          return {
            day: date.getDate(),
            week: toWeek(date.getDay())
          }
        }
      },
      created () {
        let that = this
        Api.recommendSongs(function (response) {
          if (response.data.code === 200) {
            that.recommends = response.data.recommend
          }
        })
      },
      components: {
        SongList
      }
    }
</script>

<style scoped lang="scss">
  @import "../../../styles/findmusic/recommend/recommendsong";
</style>
