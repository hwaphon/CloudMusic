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
        <div class="glogin-state-model-panel">
          <div class="glogin-state-model-panel-header">
            <div class="glogin-state-model-panel-header-imgcontainer">
              <img :src="user.avatarUrl" alt="avatar image">
              <span>{{ user.nickname }}</span>
            </div>
            <button @click="print">签到</button>
          </div>
          <div class="glogin-state-model-panel-info-container">
            <div class="glogin-state-model-panel-info" v-for="item in imgList">
              <span>{{ item.value }}</span>
              <span>{{ item.type }}</span>
            </div>
          </div>
        </div>
      </GModel>
    </transition>
  </div>
</template>

<script>
    import GLogin from './GLogin.vue'
    import GModel from '../GModel.vue'
    import { mapState } from 'vuex'
    import Api from "../../../../const/Api";
    export default {
      data () {
        return {
          showLogin: false,
          validate: false,
          showModel: false,
          level: 0,
          imgList: []
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
        },
        print () {
        }
      },
      components: {
        GLogin,
        GModel
      },
      computed: {
        ...mapState([
          'user'
        ]),
      },
      watch: {
        validate (newValue) {
          if (newValue) {
            let that = this
            let result = []
            this.$http.get(Api.detail(this.user.userId))
              .then(function(response) {
                let { data } = response
                that.level = data.level
                let { profile } = data
                result.push({
                  type: '动态',
                  value: profile.eventCount
                })

                result.push({
                  type: '关注',
                  value: profile.follows
                })

                result.push({
                  type: '粉丝',
                  value: profile.followeds
                })
              })
            this.imgList = result
          }
        }
      }
    }
</script>

<style scoped lang="scss">
  @import "../../../styles/header/login/gloginstate";
</style>
