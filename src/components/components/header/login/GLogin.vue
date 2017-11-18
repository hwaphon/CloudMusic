<template>
  <div class="glogin">
    <i class="fa fa-times glogin-close" aria-hidden="true" @click="closeLogin"></i>
    <div class="glogin-init" :class="{ 'active': init, 'hidden': !init }">
      <img :src="logosrc" alt="Netease Logo Image" class="glogin-logo">
      <div class="glogin-control">
        <button @click="loginPhone" class="glogin-control-button">{{ loginWithPhone }}</button>
        <button class="glogin-control-button">{{ register }}</button>
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

    <div class="glogin-phone" :class="{ 'active': !init, 'hidden': init }">
      <i class="fa fa-arrow-left glogin-back" aria-hidden="true" @click="phoneBack"></i>
      <img :src="phonesrc" alt="Phone src" class="glogin-logo">
      <div class="glogin-input-container">
        <img class="glogin-icon glogin-phone-icon" :src="phoneicon" alt="phone icon">
        <input type="text" class="glogin-phone-input glogin-input" placeholder="请输入手机号" v-model="phonenumber">
        <img class="glogin-icon glogin-password-icon" :src="lockicon" alt="password icon">
        <input type="password" class="glogin-password-input glogin-input" placeholder="请输入密码" v-model="password">
      </div>
      <button class="glogin-button" @click="login">登录</button>
    </div>
  </div>
</template>

<script>
    import IconList from '../../../../const/LoginIcon'
    import Api from '../../../../const/Api'
    import Event from '../../../../const/Event'
    import GLoginStyle from './GloginStyle.vue'
    export default {
      data () {
        return {
          logosrc: 'http://ozg83iln2.bkt.clouddn.com/Netease.png',
          loginWithPhone: '手机号登录',
          register: '注册',
          others: '其他登录方式',
          icons: IconList,
          init: true,
          phonesrc: 'http://ozg83iln2.bkt.clouddn.com/loginphone.png',
          phoneicon: 'http://ozg83iln2.bkt.clouddn.com/phone.png',
          lockicon: 'http://ozg83iln2.bkt.clouddn.com/lock.png',
          phoneback: '返回其他登录',
          phonenumber: '',
          password: ''
        }
      },
      components: {
        GLoginStyle
      },
      methods: {
        loginPhone () {
          this.init = false
        },
        closeLogin () {
          this.$emit(Event.CLOSE)
        },
        phoneBack () {
          this.init = true
        },
        login () {
          let that = this
          Api.cellphone({ phone: this.phonenumber, password: this.password}, function (response) {
            if (response.data.code == 200) {
              that.$store.dispatch('updateUser', response.data.profile)
              that.$emit(Event.CLOSE, true)
            }
          })
        }
      }
    }
</script>

<style scoped lang="scss">
  @import "../../../styles/header/login/glogin";
</style>
