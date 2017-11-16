<template>
  <div class="gcarousel">
    <img
      v-for="(item, index) in imglist"
      :src="item.src"
      :alt="item.des"
      :key="item.id"
      :class="{'selected': item.id === value, 'before': before(index), 'after': after(index) }">
    <div class="gcarousel-router">
      <span
        v-for="(item, index) in imglist"
        :key="item.id"
        :class="{ 'selected': findIndexByValue(value) === index }"
        @mouseover="routerIndex(index)">
      </span>
    </div>
    <div class="gcarousel-control">
      <i class="fa fa-chevron-left" aria-hidden="true" @click="routerBefore"></i>
      <i class="fa fa-chevron-right" aria-hidden="true" @click="routerAfter"></i>
    </div>
  </div>
</template>

<script>
    import Event from '../../../../const/Event'
    export default {
      props: {
        imglist: {
          type: Array,
          default () {
            return []
          }
        },
        value: {
          type: String | Number
        },
        time: {
          default: 5000
        }
      },
      data () {
        return {
          timeId: ''
        }
      },
      methods: {
        start () {
          let index = this.findIndexByValue(this.value)
          let length = this.imglist.length

          if (index === length - 1) {
            index = 0
          } else {
            index += 1
          }

          this.$emit('input', this.imglist[index].id)
          this.timeId = setTimeout(this.start, this.time)
        },

        findIndexByValue (value) {
          let valueIndex
          this.imglist.map((item, index) => {
            if (item.id === this.value) {
              valueIndex = index
            }
          })
          return valueIndex
        },

        after (index) {
          let cacheIndex = this.findIndexByValue(this.value)
          if (cacheIndex === 0) {
            return index === this.imglist.length - 1
          } else {
            return index === cacheIndex - 1
          }
        },
        before (index) {
          let cacheIndex = this.findIndexByValue(this.value)
          if (cacheIndex === this.imglist.length - 1) {
            return index === 0
          } else {
            return index === cacheIndex + 1
          }
        },
        reset () {
          clearTimeout(this.timeId)
          this.start()
        },
        routerBefore () {
          let index = this.findIndexByValue(this.value)
          let targetIndex = index === 0 ? this.imglist.length - 1 : index - 1
          this.routerIndex(targetIndex)
        },
        routerAfter () {
          let index = this.findIndexByValue(this.value)
          let targetIndex = index === this.imglist.length - 1 ? 0 : index + 1
          this.routerIndex(targetIndex)
        },
        routerIndex (index) {
          this.reset()
          this.$emit('input', this.imglist[index].id)
        }
      },
      created () {
        this.timeId = setTimeout(this.start, this.time)
      }
    }
</script>

<style scoped lang="scss">
  @import "../../../styles/content/carousel/gcarousel";
</style>
