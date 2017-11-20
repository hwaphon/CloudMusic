<template>
  <div class="songlist">
    <div class="songlist-header">
      <div class="songlist-playall" :style="{ borderColor: theme, color: theme }">
        <div class="songlist-playall-left">
          <i class="fa fa-play-circle-o" aria-hidden="true"></i>
          <span>播放全部</span>
        </div>
        <div class="songlist-playall-right">
          <i class="fa fa-plus" aria-hidden="true"></i>
        </div>
      </div>
      <div class="songlist-collection">
        <i class="fa fa-plus-square-o" aria-hidden="true"></i>
        <span>收藏全部</span>
      </div>
    </div>
    <SongListItem
      v-for="(item, index) in list"
      :key="item.id"
      :song="item.name"
      :index="index + 1"
      :id="item.id"
      :album="item.album.name"
      :time="item.duration"
      :songer="item.artists"></SongListItem>
  </div>
</template>

<script>
    import SongListItem from './SongListItem.vue'
    import { mapState } from 'vuex'
    export default {
      props: {
        list: {
          type: Array,
          default () {
            return []
          }
        }
      },
      components: {
        SongListItem
      },
      computed: {
        ...mapState([
          'theme'
        ])
      }
    }
</script>

<style scoped lang="scss">
  @import "../../../styles/findmusic/recommend/songlist";
</style>
