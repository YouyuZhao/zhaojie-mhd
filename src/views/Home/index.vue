<template>
  <div class='page-home'>
    <!-- 首页头部begin -->
    <header class="index-header">
      <a href="mine.html?cpid=0">
        <div class="header-user">
          <div class="user-btn"></div>
        </div>
      </a>
      <div class="header-logo"></div>
      <a href="search.html?cpid=0">
        <div class="header-search"></div>
      </a>
    </header>
    <!-- 首页头部end -->

    <!-- 轮播图begin -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!-- 轮播图end -->
  </div>
</template>

<script>
// 引入swiper核心与样式
import Swiper from 'swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Home',

  mounted () {
    new Swiper('.swiper-container', {  // eslint-disable-line
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>

<style lang='scss' scoped>
.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;

  .index-header {
    height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;

    .user-btn {
      width: 25px;
      height: 25px;
      background: url('../../assets/icon/userbtn.png');
      background-size: 100%;
    }

    .header-logo {
      width: 92px;
      height: 28px;
      background: url('../../assets/icon/header-logo.png') no-repeat;
      background-size: 100%;
    }

    .header-search {
      width: 25px;
      height: 25px;
      background: url('../../assets/icon/search.png');
      background-size: 100%;
    }
  }
}
</style>

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
    width: .53333333rem;
    height: .26666667rem;
    margin: 0;
    background: url('../../assets/icon/dot.png') no-repeat 50%;
    background-size: 100%
}
  }
</style>
