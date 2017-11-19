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
      <GModel class="glogin-model" v-if="headerSingle === 1">
        <div class="glogin-state-model-panel" @blur="blurHandler">
          <div class="glogin-state-model-panel-header">
            <div class="glogin-state-model-panel-header-imgcontainer">
              <img :src="user.avatarUrl" alt="avatar image">
              <span>{{ user.nickname }}</span>
            </div>
            <button :style="{ backgroundColor: theme }">签到</button>
          </div>
          <div class="glogin-state-model-panel-info-container">
            <div class="glogin-state-model-panel-info" v-for="item in getUserBasicInfo">
              <span>{{ item.value }}</span>
              <span>{{ item.type }}</span>
            </div>
          </div>
          <GLoginList :items="userList"></GLoginList>
          <GLoginList :items="userListTwo"></GLoginList>
          <GLoginList :items="userListThree" @onClick="exitClick"></GLoginList>
        </div>
      </GModel>
    </transition>
  </div>
</template>

<script>
    import GLogin from './GLogin.vue'
    import GModel from '../GModel.vue'
    import { mapState, mapGetters } from 'vuex'
    import Api from "../../../../const/Api";
    import GLoginList from './GLoginList.vue'
    export default {
      data () {
        return {
          showLogin: false
        }
      },
      methods: {
        avatarClick () {
          if (!this.validate) {
            this.showLogin = true
            return
          }
        },
        blurHandler (){
          this.controlModel(false)
        },
        nickClick () {
          if (!this.validate) {
            this.showLogin = true
            return
          } else {
            if (this.headerSingle !== 1) {
              this.controlModel(1)
            } else {
              this.controlModel(0)
            }
          }
        },
        closeLogin (validate) {
          this.showLogin = false
          let that = this
          if (validate) {
            this.$store.dispatch('updateValidate', true)
            Api.detail({ uid: this.user.userId }, function(response) {
              if (response.data.code === 200) {
                let others = that.util.pick(response.data, 'level')
                that.$store.dispatch('updateUser', that.util.extend(response.data.profile, others))
              }
            })
          }
        },
        exitClick (index) {
          localStorage.removeItem('vuex')
          this.$store.dispatch('initUser')
          this.controlModel(0)
        },
        controlModel (value) {
          this.$store.dispatch('updateSingle', value)
        }
      },
      components: {
        GLogin,
        GModel,
        GLoginList
      },
      computed: {
        ...mapState([
          'user',
          'validate',
          'headerSingle',
          'theme'
        ]),
        ...mapGetters([
          'getUserBasicInfo',
          'getUserVip',
          'getUserLevel'
        ]),
        userList () {
          let result = []
          result.push(
            { text: '会员中心', icon: 'http://ozg83iln2.bkt.clouddn.com/user_vip.png', des: this.getUserVip },
            { text: '等级', icon: 'http://ozg83iln2.bkt.clouddn.com/user_level.png', des: this.getUserLevel },
            { text: '商城', icon: 'http://ozg83iln2.bkt.clouddn.com/user_shop.png' }
          )
          return result
        },
        userListTwo () {
          let result = []
          result.push(
            { text: '个人信息设置', icon: 'http://ozg83iln2.bkt.clouddn.com/user_settings.png' },
            { text: '绑定社交账号', icon: 'http://ozg83iln2.bkt.clouddn.com/user_phone.png' },
          )
          return result
        },
        userListThree () {
          return [
            { text: '退出', icon: 'http://ozg83iln2.bkt.clouddn.com/user_exit.png' }
          ]
        }
      }
    }
</script>

<style scoped lang="scss">
  @import "../../../styles/header/login/gloginstate";
</style>
