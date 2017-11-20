<template>
  <div class="songlist">
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
      }
    }
</script>

<style scoped lang="scss">
  @import "../../../styles/findmusic/recommend/songlist";
</style>
