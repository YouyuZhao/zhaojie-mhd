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
    <Swiper
      @change='onChange'
      class='my-swiper'
    >
      <SwiperItem>
        <img
          src="https://img.manhuadao.cn/upload/AdGroup201906/9315f7dd68b346928219f29bd9c89e60.jpg"
          alt
        />
      </SwiperItem>
      <SwiperItem>
        <img
          src="https://img.manhuadao.cn/upload/AdGroup201903/22b43c03a0f943cda001c5338fe0ddd9.jpg"
          alt
        />
      </SwiperItem>
      <SwiperItem>
        <img
          src="https://img.manhuadao.cn/upload/AdGroup202003/dda50e4233e34186910fd490aea1cd91.jpg"
          alt
        />
      </SwiperItem>
    </Swiper>
    <!-- 轮播图end -->
  </div>
</template>

<script>
// import Swiper from '@/components/Swiper/Swiper'
// import SwiperItem from '@/components/Swiper/SwiperItem'
import { Swiper, SwiperItem } from '@/components/Swiper'

export default {
  name: 'Home',

  components: {
    Swiper,
    SwiperItem
  },

  methods: {
    onChange (index) {
      console.log('hello', index + 1)
    }
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

  .my-swiper img {
    width: 100%;
  }
}
</style>
