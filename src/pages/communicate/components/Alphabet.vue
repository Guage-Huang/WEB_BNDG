<template>
  <ul class="list">
    <li
      class="item" :class="{current:active === index}"
      v-for="(item,index) of letters"
      :key="item"
      :ref="item"
      :data-index="index"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @click.prevent="handleLetterClick"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object,
    current: Number,
  },
  data () {
    return {
      touch:{},
      active:0,
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  updated () {
    //this.startY = this.$refs[this.letters[0]][0].offsetTop
  },
  watch: {
      current(){
        this.active = this.current
      }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart (e) {
      // 获取到绑定的 index
      let index = e.target.getAttribute('data-index')
      this.active = parseInt(index)
      this.$emit('change', this.letters[index])
      // 记录一下点击时候的 Y坐标 和 index
      let firstTouch = e.touches[0].pageY
      this.touch.y1 = firstTouch
      this.touch.anchorIndex = index
    },
    handleTouchMove (e) {
      // 再记录一下移动时候的 Y坐标，然后计算出移动了几个索引
        let touchMove = e.touches[0].pageY
        this.touch.y2 = touchMove
        
        // 这里的 16.7 是索引元素的高度
        let delta = Math.floor((this.touch.y2 - this.touch.y1) / 18)
    
        // 计算最后的位置
        // * 1 是因为 this.touch.anchorIndex 是字符串，用 * 1 偷懒的转化一下
        let index = this.touch.anchorIndex * 1 + delta
            index < 0 ? index = 0 : index
            index > this.letters.length - 1 ? index = this.letters.length - 1 : index

        this.active = parseInt(index)
        this.$emit('change', this.letters[index])
    },
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 93px;
    right: 0;
    bottom: 53px;
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: #333
    .current
      color:#ff8712;

</style>
