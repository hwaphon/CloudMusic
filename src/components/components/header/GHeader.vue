<template>
  <div class="gheader" :style="{ backgroundColor: theme}">
    <div class="gheader-logo">
      <img :src="logosrc" alt="cloud music logo">
      <h1>网易云音乐</h1>
    </div>
    <div class="gheader-router">
      <i class="fa fa-chevron-left" aria-hidden="true" @click="routerBefore"></i>
      <i class="fa fa-chevron-right" aria-hidden="true" @click="routerAfter"></i>
    </div>
    <GSearch></GSearch>
    <GLoginState></GLoginState>
    <div class="gheader-control">
      <div class="gheader-theme">
        <img :src="themesrc" alt="theme img" @click="toggleTheme">
        <transition name="model">
          <GModel class="gtheme-model" v-if="headerSingle === 2">
            <GColorPicker
              v-for="item in color"
              class="gtheme-colorpicker"
              :id="item.id"
              :key="item.id"
              :select="item.value === theme"
              :bgcolor="item.value"></GColorPicker>
          </GModel>
        </transition>
      </div>
      <img :src="mailsrc" alt="mail img" @click="openMail">
      <img :src="settingsrc" alt="setting img" @click="openSettings">
    </div>
  </div>
</template>

<script>
    import GSearch from './GSearch.vue'
    import GLoginState from './login/GLoginState.vue'
    import GModel from './GModel.vue'
    import GColorPicker from './GColorPicker.vue'
    import Color from '../../../const/Theme'
    import { mapState } from 'vuex'
    export default {
      data () {
        return {
          logosrc: 'http://ozg83iln2.bkt.clouddn.com/cloudmusic.png',
          themesrc: 'http://ozg83iln2.bkt.clouddn.com/theme.png',
          mailsrc: 'http://ozg83iln2.bkt.clouddn.com/mail.png',
          settingsrc: 'http://ozg83iln2.bkt.clouddn.com/settings.png',
          color: Color
        }
      },
      methods: {
        toggleTheme () {
          if (this.headerSingle === 2) {
            this.$store.dispatch('updateSingle', 0)
          } else {
            this.$store.dispatch('updateSingle', 2)
          }
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
        GSearch,
        GLoginState,
        GModel,
        GColorPicker
      },
      computed: {
        ...mapState([
          'headerSingle',
          'theme'
        ])
      },
      created () {
        console.log(this.theme)
      }
    }
</script>

<style scoped lang="scss">
  @import "../../styles/header/gheader";
</style>
