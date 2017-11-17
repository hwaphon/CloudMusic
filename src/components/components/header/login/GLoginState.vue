<template>
  <div class="glogin-state">
    <div class="glogin-state-avatar" @click="avatarClick">
      <img :src="user.avatarUrl" alt="avatar img">
    </div>
    <div class="glogin-state-nick" @click="nickClick">
      <span class="glogin-state-nickname">{{ user.nickname }}</span>
    </div>
    <transition name="login">
      <GLogin v-if="showLogin" @onClose="closeLogin"></GLogin>
    </transition>
    <transition name="model">
      <GModel class="glogin-state-model" v-if="showModel">
        <div class="glogin-state-model-panel"></div>
      </GModel>
    </transition>
  </div>
</template>

<script>
    import GLogin from './GLogin.vue'
    import GModel from '../GModel.vue'
    import { mapState } from 'vuex'
    export default {
      data () {
        return {
          showLogin: false,
          validate: false,
          showModel: false
        }
      },
      methods: {
        avatarClick () {
          if (!this.validate) {
            this.showLogin = true
            return
          }
        },
        nickClick () {
          if (!this.validate) {
            this.showLogin = true
            return
          } else {
            this.showModel = !this.showModel
          }
        },
        closeLogin (validate) {
          this.showLogin = false
          if (validate) {
            this.validate = true
          }
        }
      },
      components: {
        GLogin,
        GModel
      },
      computed: {
        ...mapState([
          'user'
        ])
      }
    }
</script>

<style scoped lang="scss">
  @import "../../../styles/header/login/gloginstate";
</style>
