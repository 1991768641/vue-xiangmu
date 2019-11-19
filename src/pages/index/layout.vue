<template>
  <div class="index-wrap">
    <main>
      <transition
        enter-active-class="animated slideInLeft"
        leave-active-class="animated slideOutLeft"
      >
        <router-view></router-view>
      </transition>
    </main>

    <nav>
      <van-tabbar v-model="active" class="tablebar" active-color="#e54748" route>
        <van-tabbar-item 
          to="/index/home" 
        >
          <span>首页</span>
          <img slot="icon" slot-scope="props" :src="props.active?icon.home_light:icon.home" />
        </van-tabbar-item>

        <van-tabbar-item
          to="/index/classify" 
        >
          <span>分类</span>
          <img slot="icon" slot-scope="props" :src="props.active?icon.cascsde_light:icon.cascsde" />
        </van-tabbar-item>
         <van-tabbar-item
          to="/index/vipcard" 
        >
          <span>卡兑换</span>
          <img slot="icon" slot-scope="props" :src="props.active?icon.vipcard_light:icon.vipcard" />
        </van-tabbar-item>
         <van-tabbar-item
          to="/index/cart" 
        >
          <span>购物车</span>
          <img slot="icon" slot-scope="props" :src="props.active?icon.cart_light:icon.cart" />
        </van-tabbar-item>
         <van-tabbar-item
          to="/index/my" 
        >
          <span>我的</span>
          <img slot="icon" slot-scope="props" :src="props.active?icon.my_light:icon.my" />
        </van-tabbar-item>

      </van-tabbar>
    </nav>

  </div>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem,Icon  } from "vant";
Vue.use(Tabbar).use(TabbarItem).use(Icon);


import home from 'assets/images/home.png'
import home_light from 'assets/images/home_light.png'
import cascsde from 'assets/images/cascades.png'
import cascsde_light from 'assets/images/cascades_light.png'
import cart from 'assets/images/cart.png'
import cart_light from 'assets/images/cart_light.png'
import my from 'assets/images/my.png'
import my_light from 'assets/images/my_light.png'
import vipcard from 'assets/images/vipcard.png'
import vipcard_light from 'assets/images/vipcard_light.png'


export default {
  data() {
    return {
      active: 0,
      icon: 
      {
        home_light,
        home,
        cascsde,
        cascsde_light,
        cart,
        cart_light,
        my,
        my_light,
        vipcard,
        vipcard_light
      }

    };
  }
};
</script>

<style lang='stylus' scoped>
main
  position relative



.index-wrap 
  width 100%
  height: 100%;
  display: flex;
  flex-direction: column;

  main 
    flex: 1;
    overflow-y hidden
    background #fff
  nav 
    width 100%
    height .5rem
    margin  auto !important
    .tablebar
      height .5rem
      img 
        width .224rem
        height .224rem
      span 
        font-size .1176rem
  

</style>
