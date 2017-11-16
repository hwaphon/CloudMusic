<template>
  <div class="gsearch">
    <input type="text" :placeholder="placeholder" v-model="value" @keyup.enter="searchHandler">
    <i class="fa fa-search" aria-hidden="true" @click="searchHandler"></i>
  </div>
</template>

<script>
    export default {
      data () {
        return {
          placeholder: '搜索音乐，视频，歌词，电台',
          value: ''
        }
      },
      methods: {
        searchHandler () {
        }
      }
    }
</script>

<style scoped lang="scss">
  @import "../../styles/header/gsearch";
</style>
