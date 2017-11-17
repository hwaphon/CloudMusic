<template>
  <div class="glogin-style">
    <div class="glogin-style-circle">
      <img :src="icon" alt="icon">
    </div>
    <span>{{ name }}</span>
  </div>
</template>

<script>
    export default {
      props: {
        icon: String,
        name: String
      }
    }
</script>

<style scoped lang="scss">
  @import "../../../styles/header/login/gloginstyle";
</style>
