<template>
  <div class="gmenu">
    <span class="gmenu-title">{{ title }}</span>
    <GMenuItem
      v-for="(item, index) in items"
      :key="index"
      :iconsrc="item.src"
      :des="item.des"
      :index="item.index">
    </GMenuItem>
  </div>
</template>

<script>
    import GMenuItem from './GMenuItem.vue'
    export default {
      components: {
        GMenuItem
      },
      props: {
        title: '',
        items: {
          type: Array,
          default () {
            return []
          }
        }
      },
    }
</script>

<style scoped lang="scss">
  @import "../../../styles/content/menu/gmenu";
</style>
