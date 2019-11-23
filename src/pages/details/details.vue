<template>
  <div class="gooddetails">
    <header>
      <div class="left" @click="handleclick">
        <i><</i>
      </div>
      <div class="center">

      </div>
      <div class="right">
        <van-icon name="more" color="#aaa" />
      </div>
    </header>

    <div class="content-nt">
      <van-swipe indicator-color="white">
        <van-swipe-item  heigth="300px">
          <img src="http://oss.egu365.com/upload/490aaa651e5044e3821e7db98d535741.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="http://oss.egu365.com/upload/7a3b34ac1ad441729893b5ea91132688.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="http://oss.egu365.com/upload/7a3b34ac1ad441729893b5ea91132688.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="http://oss.egu365.com/upload/490aaa651e5044e3821e7db98d535741.jpg" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>

    <footer>
      <van-goods-action>
        <van-goods-action-icon icon="wap-home-o" text="首页" @click="onClickIcon" />
        <van-goods-action-icon icon="apps-o" text="分类" @click="onClickIcon" />
        <van-goods-action-icon icon="shopping-cart" text="购物车" @click="onClickIcon" />
        <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
        <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
      </van-goods-action>
    </footer>
  </div>
</template>

<script>
import store from 'store';

import Vue from 'vue';
import { Icon,GoodsAction,GoodsActionIcon,GoodsActionButton,Toast,Swipe, SwipeItem} from 'vant';

Vue.use(Icon).use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton).use(Swipe).use(SwipeItem);

export default {
  props:{
    bscroll:Object
  },

  data () {
    return {
    }
  },
  mounted() {

  },
  methods: {
    handleclick(){
      this.$router.push({path:'/index/home/home0'}) 
    },
    onClickIcon() {
      Toast('点击图标');
    },
    onClickButton() {
      Toast('点击按钮');
    }
  }
}

</script>
<style lang='stylus' scoped>

@media screen and (min-width:1024px) {
  header {
    height .7975rem !important 
  }
  header .left {
    width  .7975rem !important 
    height .7975rem !important 
  }
  header .left i{
    width  .464rem !important 
    height .464rem !important 
    font-size .5rem !important 
  }
  header .right  {
    width  .7975rem !important 
    height .7975rem !important 
  }
  header .right .van-icon{
    font-size .464rem !important
  }

  header .right .van-icon-more{
    font-size .464rem !important
  }
}

.gooddetails
  width 100%
  height 100%
  display flex 
  justify-content center
  header 
    max-width 7.8rem;
    width 100%;
    height .385rem
    position fixed
    top 0
    display flex 
    justify-content center
    align-items center
    color #ffffff
    z-index 100
    .left
      width .385rem
      height 100%
      font-size .18rem
      display flex 
      justify-content center
      align-items center
      font-family "宋体"
      font-weight 900
      background #fff
      i 
        width .252rem
        height .252rem
        display flex 
        justify-content center
        align-items center
        border-radius 50%
        color #fff
        background-color #aaa
    .center
      flex 1
      height 100%
      background #fff
    .right
      width .385rem
      height 100%
      display flex 
      justify-content center
      align-items center
      font-weight 900
      background #fff
      .van-icon
        font-size .252rem
      .van-icon-more
        font-size .252rem

  .content-nt
    width 100%

</style>
