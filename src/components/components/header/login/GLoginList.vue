<template>
  <div class="glogin-list">
    <GLoginListItem
      v-for="(item, index) in items"
      :key="index"
      :index="index"
      :iconsrc="item.icon"
      :text="item.text"
      :des="item.des"></GLoginListItem>
  </div>
</template>

<script>
    import GLoginListItem from './GLoginListItem.vue'
    export default {
      components: {
        GLoginListItem
      },
      props: {
        items: {
          type: Array,
          default () {
            return []
          }
        }
      }
    }
</script>

<style scoped lang="scss">
  @import "../../../styles/header/login/gloginlist";
</style>
