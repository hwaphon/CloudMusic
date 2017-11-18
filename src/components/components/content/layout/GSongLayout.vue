<template>
  <div class="gsong-layout">
    <div class="gsong">
      <img :src="src" :alt="des">
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
        }
      }
    }
</script>

<style scoped lang="scss">
  @import "../../../styles/content/layout/gsonglayout";
</style>
