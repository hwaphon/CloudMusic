<template>
  <div class="gsong-layout">
    <div class="gsong" @mouseenter="mouseHandler" @mouseleave="mouseHandler">
      <img :src="src" :alt="des">
      <div class="gsong-listencount" v-show="!copyFlag">
        <img :src="listencountsrc" alt="listen count img">
        <span class="gsong-count">{{ playCount }}</span>
      </div>
      <transition name="copy">
        <div class="gsong-copywrite" v-show="copyFlag">{{ copywriter }}</div>
      </transition>
    </div>
    <span class="gsong-des">{{ des }}</span>
  </div>
</template>

<script>
    export default {
      props: {
        des: {
          type: String,
          default: ''
        },
        src: {
          type: String,
          default: ''
        },
        count: {
          type: Number | String,
          default: 0
        },
        copywriter: {
          type: String,
          default: ''
        }
      },
      data () {
        return {
          listencountsrc: 'http://ozg83iln2.bkt.clouddn.com/listen_erji.png',
          copyFlag: false
        }
      },
      methods: {
        mouseHandler () {
          this.copyFlag = !this.copyFlag
        }
      },
      computed: {
        playCount () {
          if (this.count >= 100000) {
            return Math.floor(this.count / 10000) + '万'
          }
          return this.count
        }
      }
    }
</script>

<style scoped lang="scss">
  @import "../../../styles/content/layout/gsonglayout";
</style>
