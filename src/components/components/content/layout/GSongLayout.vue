<template>
  <div class="gsong-layout" @click="clickHandler">
    <div class="gsong" @mouseenter="mouseHandler" @mouseleave="mouseHandler">
      <slot></slot>
      <div class="gsong-listencount" v-show="!copyFlag && count > 0">
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
    import Event from '../../../../const/Event'
    export default {
      props: {
        des: {
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
        },
        clickHandler () {
          this.$emit(Event.CLICK)
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
