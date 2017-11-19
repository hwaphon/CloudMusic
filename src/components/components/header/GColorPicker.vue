<template>
  <div class="gcolorpicker" @click="changeColor" :style="{ backgroundColor: bgcolor }">
    <img :src="src" alt="cloud music icon">
    <transition name="fade">
      <div class="select-container" :style="{ backgroundColor: bgcolor }" v-if="select">
        <i class="fa fa-check" aria-hidden="true"></i>
      </div>
    </transition>
  </div>
</template>

<script>
    export default {
      props: {
        id: {
          type: String | Number
        },
        select: {
          type: Boolean,
          default: false
        },
        bgcolor: {
          type: String
        }
      },
      data () {
        return {
          src: 'http://ownp5gqo8.bkt.clouddn.com/colorpick.png'
        }
      },
      methods: {
        changeColor () {
          this.$store.dispatch('updateTheme', this.id)
        }
      }
    }
</script>

<style scoped lang="scss">
  @import "../../styles/header/gcolorpicker";
</style>
