<template>
  <div class="gnav">
    <div class="gnav-header">
      <span class="gnav-title">{{ title }}</span>
      <div class="gnav-more" @click="moreHandler">
        <span class="gnav-more-text">更多</span>
        <i class="fa fa-angle-right" aria-hidden="true"></i>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
    import Event from '../../../../const/Event'
    export default {
      props: {
        title: {
          type: String,
          default: ''
        }
      },
      methods: {
        moreHandler () {
          this.$emit(Event.CLICK)
        }
      }
    }
</script>

<style scoped lang="scss">
  @import "../../../styles/content/nav/gnav";
</style>
