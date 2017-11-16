<template>
  <div class="gtabbar">
    <span
      v-for="item in items"
      :key="item.key"
      @click="$store.dispatch('updateTabbar', item.key)"
      :class="{ 'selected': tabbar === item.key }">
      {{ item.des }}
    </span>
  </div>
</template>

<script>
    import Tab from '../../../../const/Tab'
    import { mapState } from 'vuex'
    export default {
      data () {
        return {
          items: [
            { key: Tab.RECOMMEND, des: '个性推荐' },
            { key: Tab.SONG, des: '歌单' },
            { key: Tab.RADIO, des: '主播电台' },
            { key: Tab.RADNKING, des: '排行榜' },
            { key: Tab.SONGER, des: '歌手' },
            { key: Tab.NEWEST, des: '最新音乐' }
          ]
        }
      },
      computed: {
        ...mapState([
          'tabbar'
        ])
      }
    }
</script>

<style scoped lang="scss">
  @import "../../../styles/content/tab/gtabbar";
</style>
