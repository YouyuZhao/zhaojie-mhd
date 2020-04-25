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
// 引入公用的mixins: scss;
@import '@/assets/styles/mixins.scss';

.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;

  .index-header {
    @include border-bottom;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 44px;
    box-sizing: border-box;
    background-color: #fff;
    // border-bottom: 5px solid #3a3a3a;

    .user-btn {
      width: 25px;
      height: 25px;
      background: url('../../assets/icon/user-btn.png') no-repeat;
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
      background: url('../../assets/icon/search.png') no-repeat;
      background-size: 100%;
    }
  }

  .index-main {
    flex: 1;
    overflow-y: auto;
  }

  .index-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 100px;
    .nav-item {
      .iconfont {
        font-size: 52px;
        line-height: 1.2;
      }
      .nav-text {
        color: #8d8d8d;
        font-weight: 500;
        text-align: center;
      }
    }
  }

  .index-recommend {
    .recommend-divide {
      height: 10px;
      background-color: #f4f4f4;
    }
    .recommend-title {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      margin-top: 20px;
      margin-bottom: 18px;
      .title-group {
        display: flex;
        align-items: center;
        .title-icon {
          width: 22px;
          height: 22px;
          margin-right: 5px;
        }
        .title-text {
          color: #3a3a3a;
          font-weight: 500;
        }
      }
      .title-more {
        color: #b0b0b0;
        position: absolute;
        right: 18px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .recommend-type-1 {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      box-sizing: border-box;
      .item {
        width: 174px;
        height: 218px;
        margin-bottom: 16px;
        .item-pic {
          width: 174px;
          height: 174px;
          margin-bottom: 4px;
          position: relative;
        }
        .item-name {
          max-width: 100%;
          margin-bottom: 2px;
          color: #3a3a3a;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        .item-text {
          max-width: 100%;
          color: #8d8d8d;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
    }
    .recommend-type-3 {
      padding: 0 10px;
      box-sizing: border-box;
      .item {
        display: flex;
        align-items: center;
        width: 100%;
        margin-bottom: 16px;
        position: relative;
        .item-pic {
          width: 154px;
          height: 90px;
        }
        .text-group {
          width: 158px;
          margin-left: 42px;
          .item-name {
            margin-bottom: 4px;
            color: #3a3a3a;
            font-weight: 500;
          }
          .item-hot {
            color: #b0b0b0;
            margin-bottom: 15px;
            .hot-hot {
              color: red;
            }
          }
          .item-text {
            color: #8d8d8d;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
        }
        .ranking-group {
          .item-ranking {
            width: 25px;
            height: 25px;
            background-repeat: no-repeat;
            background-position: top;
            background-size: 100%;
            position: absolute;
            top: 4px;
            left: 168px;
          }
          .item-ranking-other {
            width: 25px;
            height: 25px;
            background-repeat: no-repeat;
            background-position: top;
            background-size: 100%;
            position: absolute;
            top: 6px;
            left: 168px;
          }
          .item-ranking-1 {
            background-image: url('../../assets/icon/rank-1.png');
          }
          .item-ranking-2 {
            background-image: url('../../assets/icon/rank-2.png');
          }
          .item-ranking-3 {
            background-image: url('../../assets/icon/rank-3.png');
          }
          .item-ranking-4 {
            background-image: url('../../assets/icon/rank-4.png');
          }
          .item-ranking-5 {
            background-image: url('../../assets/icon/rank-5.png');
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
.swiper-container {
  width: 100%;
  height: 180px;
  img {
    width: 100%;
  }
  .swiper-pagination-bullet {
    opacity: 1;
    vertical-align: middle;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: hsla(0, 0%, 100%, 0.7);
  }

  .swiper-pagination-bullet-active {
    width: 20px;
    height: 10px;
    background: url('../../assets/icon/dot.png') no-repeat;
    background-size: 100%;
  }
}

.my-icp {
  padding: 5px 0;
  font-size: 12px;
  .record {
    display: flex;
    align-items: center;
    justify-content: center;
    .img {
      width: 15px;
      height: 15px;
      margin-right: 4px;
    }
  }
  .licence {
    margin-top: 4px;
    text-align: center;
  }
}

.go-top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  text-align: center;
  position: fixed;
  z-index: 999;
  bottom: 50px;
  right: 5px;
  color: #fff;
  .icon-arrow-up {
    width: 16px;
    height: 10px;
    margin-bottom: 4px;
    background: url('../../assets/icon/icon-arrow-up.png') no-repeat;
    background-size: 100%;
  }
}
</style>
