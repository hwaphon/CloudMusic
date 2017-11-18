<template>
  <div class="glogin-list">
    <GLoginListItem
      v-for="(item, index) in items"
      :key="index"
      :index="index"
      :iconsrc="item.icon"
      :text="item.text"
      :des="item.des"
      @onClick="clickHandler"></GLoginListItem>
  </div>
</template>

<script>
    import GLoginListItem from './GLoginListItem.vue'
    import Event from '../../../../const/Event'
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
      },
      methods: {
        clickHandler (index) {
          this.$emit(Event.CLICK, index)
        }
      }
    }
</script>

<style scoped lang="scss">
  @import "../../../styles/header/login/gloginlist";
</style>
