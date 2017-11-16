<template>
  <div class="gheader">
    <div class="gheader-logo">
      <img :src="logosrc" alt="cloud music logo">
      <h1>网易云音乐</h1>
    </div>

    <div class="gheader-control">
      <img :src="themesrc" alt="theme img" @click="openTheme">
      <img :src="mailsrc" alt="mail img" @click="openMail">
      <img :src="settingsrc" alt="setting img" @click="openSettings">
    </div>

    <div class="gheader-router">
      <i class="fa fa-chevron-left" aria-hidden="true" @click="routerBefore"></i>
      <i class="fa fa-chevron-right" aria-hidden="true" @click="routerAfter"></i>
    </div>

    <GSearch></GSearch>
  </div>
</template>

<script>
    import GSearch from './GSearch.vue'
    export default {
      data () {
        return {
          logosrc: 'http://ozg83iln2.bkt.clouddn.com/cloudmusic.png',
          themesrc: 'http://ozg83iln2.bkt.clouddn.com/theme.png',
          mailsrc: 'http://ozg83iln2.bkt.clouddn.com/mail.png',
          settingsrc: 'http://ozg83iln2.bkt.clouddn.com/settings.png'
        }
      },
      methods: {
        openTheme () {
        },
        openMail () {
        },
        openSettings () {
        },
        routerBefore () {
        },
        routerAfter () {
        }
      },
      components: {
        GSearch
      }
    }
</script>

<style scoped lang="scss">
  @import "../../styles/header/gheader";
</style>
