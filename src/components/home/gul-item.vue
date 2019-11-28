<template>
 <div class="gul-list">
  <div class="gul-item" v-for="list in gullist" :key="list.id" :id="list.id" @click="handleclick(list.id)">
    <img :src="list.bigImg"/>
    <div data-v-e4a3ddbc class="goods-name ellipsis">{{list.goodsName}}</div>
    <div data-v-e4a3ddbc class="price-cart flx">
      <i data-v-e4a3ddbc class="goods-price flx-1">￥{{(~~list.salePrice).toFixed(2).toString()}}</i>
        <div class="rem-add">
            <van-icon name="shopping-cart-o" />
        </div>
    </div>
  </div>
  </div>
</template>

<script>
import Vue from 'vue';
import BScroll from 'better-scroll';
import {get,get1} from 'utils/http.js';

export default {
  data() {
    return {
        gullist:[],
        num:1,
        bscroll:null
    };
  },
  async mounted() {
      this.gulitem()
      if(this.$route.fullPath=='/index/home/home0'){
          this.bscroll=new BScroll('.van_tab__pane_nav0',{
              pullUpLoad: true,
              probeType :2,
              click:true
          })
      }else if(this.$route.fullPath=='/index/my'){
          this.bscroll=new BScroll('.my-box',{
              pullUpLoad: true,
              probeType :2,
              click:true
          })
      }else{
         this.bscroll=new BScroll('.content-scroll',{
              pullUpLoad: true,
              probeType :2,
              click:true
          })
      }

      this.bscroll.on('pullingUp',async ()=>{
          this.num++;
          let result=await get({
              url:`/api/goods/list?sorts=hits+asc&pageNo=${this.num}`,
          })
          this.gullist=[
              ...this.gullist,
              ...result.list
          ]
          await this.$nextTick();
          this.bscroll.refresh();
          this.bscroll.finishPullUp();
      })
  },
  methods: {
    async gulitem(){
        let result=await get({
            url:'/api/goods/list?sorts=hits+asc&pageNo=1'
        })
        this.gullist=result.list;
    },
    handleclick(id){
        this.$router.push({
          path:`/details/${id}`
        });
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
