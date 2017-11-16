<template>
  <div class="gcontent">
    <slot></slot>
  </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
      computed: {
        ...mapState([
          'menubar'
        ])
      }
    }
</script>

<style scoped lang="scss">
  @import "../../styles/content/gcontent";
</style>
