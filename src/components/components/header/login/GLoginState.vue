<template>
  <div class="glogin-state">
    <div class="glogin-state-avatar" @click="avatarClick">
      <img :src="avatarsrc" alt="avatar img">
    </div>
    <div class="glogin-state-nick" @click="nickClick">
      <span class="glogin-state-nickname">{{ nickname }}</span>
    </div>
    <transition name="login">
      <GLogin v-if="showLogin"></GLogin>
    </transition>
  </div>
</template>

<script>
    import GLogin from './GLogin.vue'
    export default {
      props: {
        avatarsrc: {
          type: String,
          default: 'http://ozg83iln2.bkt.clouddn.com/usered.png'
        },
        nickname: {
          type: String,
          default: '未登录'
        },
        validate: {
          type: Boolean,
          default: false
        }
      },
      data () {
        return {
          showLogin: false
        }
      },
      methods: {
        avatarClick () {
          this.login()
        },
        nickClick () {
          this.login()
        },
        login () {
          if (!this.validate) {
            this.showLogin = true
          }
        }
      },
      components: {
        GLogin
      }
    }
</script>

<style scoped lang="scss">
  @import "../../../styles/header/login/gloginstate";
</style>
