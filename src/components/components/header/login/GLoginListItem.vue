<template>
  <div class="glogin-listitem" @click="clickHandler">
    <div class="glogin-listitem-left">
      <img :src="iconsrc" alt="icon src">
      <span>{{ text }}</span>
    </div>
    <div class="glogin-listitem-right">
      <span class="glogin-listitem-right-des">{{ des }}</span>
      <i class="fa fa-angle-right" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>
    import Event from '../../../../const/Event'
    export default {
      props: {
        iconsrc: {
          type: String,
          default: ''
        },
        text: {
          type: String | Number,
          default: ''
        },
        index: {
          type: String | Number
        },
        des: {
          type: String,
          default: ''
        }
      },
      methods: {
        clickHandler () {
          this.$emit(Event.CLICK, this.index)
        }
      }
    }
</script>

<style scoped lang="scss">
  @import "../../../styles/header/login/gloginlistitem";
</style>
