
<template>
  <div class="recomswipe">
    <div class="recomitem" v-for="(list,index) in recommendlist" :key="index">
      <img :src="list.bseGoodsEo.goodsImg" alt />
      <div class="rem-pro ellipsis">{{list.goodsName}}</div>
      <div class="rem-cart">
        <div class="rem-pri">￥{{list.mallPrice}}</div>
        <div class="rem-add">
            <van-icon name="shopping-cart-o" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

import {get,get1} from 'utils/http';

export default {
  props: ["ids"],
  data() {
    return {
        recommendlist:[]
    };
  },
  mounted() {
      this.recomswipe()
  },
  
  methods: {
    async recomswipe() {
        let result=await get({
            url:`/api/news/adviseGoods?seat=`+this.ids.toString()
        })
        this.recommendlist=result.list
    }

  }
};
</script>
<style lang='stylus' scoped>

.recommendlist
    width 100%
    .recommend-lump
        width 100%
        overflow hidden
        min-height 2.5879rem
        position relative
        .view-more
            width 100%
            color #fff
            top .476rem
            font-size .108rem
            text-align center
            position absolute
        img 
            vertical-align middle
        .recomswipe
            height 66%
            position absolute
            top .8rem
            display flex
            overflow-x auto
            .recomitem
                width 1.1344rem 
                height 100%
                margin-left 0.05rem
                border-radius 0.052rem
                background #fff
                img 
                    width 1.1344rem
                    height 66%
                    border-radius 0.052rem
                    vertical-align middle
                .rem-pro
                    height: 14.6%
                    text-align center
                    color #535353
                    padding 0 .064483rem
                    font-size .126rem
                .rem-cart
                    width 100%
                    height 19.2%
                    padding 0.038px 0 0.048px 0.048px
                    display flex 
                    justify-content space-between
                    align-items center
                    .rem-pri
                        height 100%
                        color red
                        font-size .16rem
                        padding-top .028rem
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

@media screen and (min-width: 747px) {
    .recomswipe .recomitem {
        width:2.35rem !important;
    }
    .recomswipe .recomitem img{
        width:2.35rem !important;
    }
    .recomswipe .recomitem .rem-pro{
        font-size:25.2px !important;
    }
    .recomswipe .recomitem .rem-pri{
        font-size:32.2px !important;
    }
    .recomswipe .recomitem .rem-add{
        width .476rem !important;
        height .476rem !important;
    }
}   
</style>
