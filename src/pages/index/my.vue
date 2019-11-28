<template>
    
    <div class="mine">
      <header class="nav-t">
        <div class="nav-l"></div>
        <div class="nav-title"></div>
        <div class="nav-r">
           <van-icon name="setting-o" color="#fff" />
        </div>
      </header>
      <div class="my-box">
        <div class="content-nt">
          <div class="user-wrap">
            <img src="http://m.egu365.com/img/user_bg.png">
            <div class="user-ht flx">
              <img data-src="http://www.egu365.com/static/images/logo.png" src="http://www.egu365.com/static/images/logo.png" lazy="loaded">
              <div class="greet">晚上好</div>
              <div class="ellipsis">EGU1000011785</div>
            </div>
          </div>

          <ul class="card-view">
            <li>
              <img src="http://m.egu365.com/img/user_order_01.png">
              <div class="item-name">待收货</div>
            </li>
            <li>
              <img src="http://m.egu365.com/img/user_order_02.png">
              <div class="item-name">待付款</div>
            </li>
            <li>
              <img src="http://m.egu365.com/img/user_order_03.png">
              <div class="item-name">已完成</div>
            </li>
            <li>
              <img src="http://m.egu365.com/img/user_order_04.png">
              <div class="item-name">已取消</div>
            </li>
            <li>
              <img src="http://m.egu365.com/img/user_order_05.png">
              <div class="item-name">全部订单</div>
            </li>
          </ul>
          
          <ul class="card-view">
            <li>
              <img src="http://m.egu365.com/img/user_two_01.png">
              <div class="item-name">我的卡卷</div>
            </li>
            <li>
              <img src="http://m.egu365.com/img/user_two_02.png">
              <div class="item-name">我的宅配</div>
            </li>
            <li>
              <img src="http://m.egu365.com/img/user_two_03.png">
              <div class="item-name">我的收藏</div>
            </li>
            <li>
              <img src="http://m.egu365.com/img/user_two_04.png">
              <div class="item-name">我的余额</div>
            </li>
            <li>
              <img src="http://m.egu365.com/img/user_two_05.png">
              <div class="item-name">优惠券</div>
            </li>
          </ul>

          <ul class="card-view">
            <li>
              <img src="http://m.egu365.com/img/user_third_02.png">
              <div class="item-name">收货地址</div>
            </li>
            <li>
              <img src="http://m.egu365.com/img/user_third_03.png">
              <div class="item-name">绑定手机</div>
            </li>
            <li>
              <img src="http://m.egu365.com/img/user_third_04.png">
              <div class="item-name">修改密码</div>
            </li>
            <li>
              <img src="http://m.egu365.com/img/user_third_05.png">
              <div class="item-name">修改邮箱</div>
            </li>
            <li>
              <img src="http://m.egu365.com/img/service.png">
              <div class="item-name">在线客服</div>
            </li>
          </ul>
          <recommendlike></recommendlike>
        </div>
      </div>
    </div>
</template>

<script>
import recommendlike from 'components/home/recommend-like.vue'
export default {
  data () {
    return {
    }
  },
  components:{
    recommendlike
  }
}

</script>
<style lang='stylus' scoped>


.mine
  position absolute
  width 100%
  height 100%
  max-width 7.8rem

  .nav-t
    width 100%
    max-width 7.8rem
    height .385rem
    position fixed
    z-index 100
    top 0
    display flex

    .nav-l
      position relative
      width .385rem
      height 100%
      text-align center
      font-size 0.224rem
      display flex 
      justify-content center
      align-items center
    .nav-title
      flex 1
      height 100%
      display flex 
      align-items center
      justify-content center
      i 
        font-size .161rem
        color #444
    .nav-r
      width .385rem
      height 100%
      display flex 
      align-items center
      justify-content center
      i 
        font-size .224rem
  .my-box
    width 100%
    height 100%
    .content-nt
      width 100%
      background #f0f2f5
      .user-wrap
        width 100%
        height 1.33rem
        position: relative;

        img 
          width 100%
          max-width 100%
          vertical-align: middle;
        .user-ht
          width 100%
          height .6275rem
          padding-left .18rem
          position: absolute;
          top: calc(55% - .285rem);
          display flex
          justify-content flex-start
          align-items center
          img 
            width .6275rem
            height .6275rem
            background #fafafa
            border-radius 50%
          .greet
            min-width .5rem
            font-size .1376rem
          .ellipsis
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            width: 90%;
      .card-view
        width 93%
        margin 3%
        background #fff
        box-shadow 0 2px 2px rgba(207, 207, 207, 0.3)
        border-radius 2px
        li
          width 20%
          display inline-block
          padding .072rem 0
          height .75rem
          text-align center
          img 
            width .4rem
            height .4rem
          .item-name
            height .208rem
            font-size .1148rem
            color #282828

            



</style>
