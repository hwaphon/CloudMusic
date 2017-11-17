<template>
  <div class="glogin">
    <img :src="logosrc" alt="Netease Logo Image" class="glogin-logo">
    <div class="glogin-control">
      <button>{{ loginWithPhone }}</button>
      <button>{{ register }}</button>
    </div>
    <div class="glogin-others">
      <GLoginStyle
        v-for="(item, index) in icons"
        :key="index"
        :icon="item.icon"
        :name="item.name">
      </GLoginStyle>
    </div>
  </div>
</template>

<script>
    import IconList from '../../../../const/LoginIcon'
    import GLoginStyle from './GloginStyle.vue'
    export default {
      data () {
        return {
          logosrc: 'http://ozg83iln2.bkt.clouddn.com/Netease.png',
          loginWithPhone: '手机号登录',
          register: '注册',
          others: '其他登录方式',
          icons: IconList
        }
      },
      components: {
        GLoginStyle
      }
    }
</script>

<style scoped lang="scss">
  @import "../../../styles/header/login/glogin";
</style>
