<template>
  <div class="gleft-navbar">
    <GMenu :title="recommend_title" :items="recommend_items"></GMenu>
    <GMenu :title="music_title" :items="music_items" class="gmusic-menu"></GMenu>
  </div>
</template>

<script>
    import GMenu from './menu/GMenu.vue'
    import Menu from '../../../const/Menu'
    export default {
      components: {
        GMenu
      },
      data () {
        return {
          recommend_title: '推荐',
          recommend_items: [
            { src: Menu.FINDMUSIC.icon, des: '发现音乐', index: Menu.FINDMUSIC.name },
            { src: Menu.PERSONALFM.icon, des: '私人FM', index: Menu.PERSONALFM.name },
            { src: Menu.MV.icon, des: 'MV', index: Menu.MV.name },
            { src: Menu.FRIENDS.icon, des: '朋友', index: Menu.FRIENDS.name }
          ],
          music_title: '我的音乐',
          music_items: [
            { src: Menu.LOCALMUSIC.icon, des: '本地音乐', index: Menu.LOCALMUSIC.name },
            { src: Menu.DOWNLOADMUSIC.icon, des: '下载管理', index: Menu.DOWNLOADMUSIC.name },
            { src: Menu.MYMUSICPAN.icon, des: '我的音乐云盘', index: Menu.MYMUSICPAN.name },
            { src: Menu.MYFM.icon, des: '我的电台', index: Menu.MYFM.name },
            { src: Menu.MYFAVORITE.icon, des: '我的收藏', index: Menu.MYFAVORITE.name }
          ]
        }
      }
    }
</script>

<style scoped lang="scss">
  @import "../../styles/content/gleftnavbar";
</style>
