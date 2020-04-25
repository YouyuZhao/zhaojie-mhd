<template>
  <div class="swiper-container" ref='swiper'>
    <div class="swiper-wrapper">
      <!-- <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div> -->
      <slot></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Swiper',

  props: {
    autoplay: {
      type: Number,
      default: 0
    },
    loop: {
      type: Boolean,
      default: true
    }
  },

  mounted () {
    // console.log(this.$refs.swiper)
    // 还可以使用this.$el
    const that = this
    new Swiper(this.$refs.swiper, {  // eslint-disable-line
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      },

      loop: this.loop, // 循环模式选项

      autoplay: this.autoplay ? {
        delay: this.autoplay,
        stopOnLastSlide: false,
        disableOnInteraction: true
      } : false,

      on: {
        slideChangeTransitionEnd: function () {
          // console.log(this.realIndex) // 切换结束时，告诉我现在是第几个slide
          that.$emit('change', this.realIndex)
        }
      }
    })
  }
}
</script>

<style lang='scss'>
.swiper-container {
  width: 100%;
  height: 180px;
  .swiper-pagination-bullet {
    opacity: 1;
    vertical-align: middle;
    width: 6px;
    height: 6px;
    margin: 0 5px;
    border-radius: 50%;
    background-color: hsla(0, 0%, 100%, 0.7);
  }
  .swiper-pagination-bullet-active {
    width: 0.53333333rem;
    height: 0.26666667rem;
    margin: 0;
    background: url('../../assets/icon/dot.png') no-repeat 50%;
    background-size: 100%;
  }
}
</style>
