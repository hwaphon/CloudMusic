<template>
  <div class="gsong-layout">
    <div class="gsong">
    </div>
    <span class="gsong-des">{{ des }}</span>
  </div>
</template>

<script>
    export default {
      props: {
        des: {
          type: String,
          default: 'Default'
        }
      }
    }
</script>

<style scoped lang="scss">
  @import "../../../styles/content/layout/gsonglayout";
</style>
