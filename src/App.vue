<template>
  <div class="main">
    <GHeader></GHeader>
    <div class="main-content">
      <GLeftNavbar class="main-content-cell"></GLeftNavbar>
      <GContent class="main-content-cell">
        <router-view />
      </GContent>
    </div>
  </div>
</template>

<script>
  import GHeader from './components/components/header/GHeader.vue'
  import GLeftNavbar from './components/components/content/GLeftNavBar.vue'
  import GContent from './components/components/content/GContent.vue'
  export default {
    name: 'MainView',
    data () {
      return {
      }
    },
    components: {
      GHeader,
      GLeftNavbar,
      GContent
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "./components/styles/main";
</style>

