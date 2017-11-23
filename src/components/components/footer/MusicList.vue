<template>
  <div class="musiclist">
    <div class="musiclist-item"
         v-for="item in musicQueue"
         :key="item.id">
      <i
        class="fa fa-play playing"
        aria-hidden="true"
        :style="{ color: theme }"
        v-if="music.id === item.id"></i>
      <span class="name">{{ item.name }}</span>
      <span class="songer">{{ item.songer }}</span>
      <span class="time">{{ item.time }}</span>
    </div>
  </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
      computed: {
        ...mapState([
          'musicQueue',
          'theme',
          'music'
        ])
      }
    }
</script>

<style scoped lang="scss">
  @import "../../styles/footer/musiclist";
</style>
