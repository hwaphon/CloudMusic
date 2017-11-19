<template>
  <div
    class="gmenu-item"
    @click="clickHandler"
    :class="{ 'selected': selected }"
    :style="{ borderLeftWidth: selected ? '3px' : '0px',
      borderLeftColor: selected ? theme : 'transparent' }">
    <img :src="iconsrc" alt="icon">
    <span>{{ des }}</span>
  </div>
</template>

<script>
    import { mapState } from 'vuex'
    import Event from '../../../../const/Event'
    export default {
      props: {
        iconsrc: {
          type: String,
          default: ''
        },
        des: '',
        index: ''
      },
      methods: {
        clickHandler () {
          if (!this.selected) {
            this.$store.dispatch('updateMenubar', this.index)
          }
          this.$emit(Event.CLICK)
        }
      },
      computed: {
        ...mapState([
          'menubar',
          'theme'
        ]),
        selected () {
          return this.menubar === this.index
        }
      }
    }
</script>

<style scoped lang="scss">
  @import "../../../styles/content/menu/gmenuitem";
</style>
