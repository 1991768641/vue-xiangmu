<template>
 <div class="gul-list">
  <div class="gul-item" v-for="li in gullist" :key="li">
    <img src="http://oss.egu365.com/upload/9adb8fbf8c43433e8538303a3a5b9443.jpg"/>
    <div data-v-e4a3ddbc class="goods-name ellipsis">傻老大原味瓜子216g*6礼盒装</div>
    <div data-v-e4a3ddbc class="price-cart flx">
      <i data-v-e4a3ddbc class="goods-price flx-1">￥168.00</i>
        <div class="rem-add">
            <van-icon name="shopping-cart-o" />
        </div>
    </div>
  </div>
  </div>
</template>

<script>
import Vue from 'vue';
import {get} from 'utils/http.js'

export default {
  data() {
    return {
        gullist:[]
    };
  },
  mounted() {
      this.gulitem()
  },
  methods: {
    async gulitem(){
        let result=await get({
            url:'/api/goods/list?sorts=hits+asc&pageNo=1'
        })
        console.log(result);
    }
  },


};
</script>
<style lang='stylus' scoped>

.gul-list
    width 100%
    padding-bottom .139rem
    .gul-item
        width: calc(50% - 0.16rem);
        display inline-block
        margin-left: 0.08rem;
        margin-top: 0.067rem;
        background-color: #fff;
        img 
            max-width 100%
        .goods-name
            height: .252rem;
            line-height .252rem;
            font-size: .126rem;
            padding: 0 0.048rem;
            color: #373737;
            
        .price-cart
            height 0.328rem
            padding 0.056rem 0 0.056rem 0.048rem
            color #ff0000
            display flex 
            justify-content space-between
            .rem-add
                color #fff
                width .238rem
                height .238rem
                margin-right .07rem
                text-align center
                border-radius 50%
                background-color red
                display flex 
                justify-content center
                align-items center

</style>
