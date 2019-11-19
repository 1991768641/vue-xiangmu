<template>
  <div class="recommendlist">

    <div class="recommend-lump" v-for="(list,index) in imglist" :key="index">
      <div class="view-more">查看更多 》</div>
      <img :src="list.bgImg1"/>
      <recommendswipe :ids="list.id"></recommendswipe>
      
    </div>
  </div>
</template>

<script>
import {get,get1} from 'utils/http';
import Vue from 'vue';
import recommendswipe from 'components/home/recommend-swipe.vue';

import { Swipe, SwipeItem ,Lazyload,Icon } from 'vant';
Vue.use(Swipe).use(SwipeItem).use(Lazyload).use(Icon);

export default {
  data() {
    return {
        imglist:[],
        swipelist:[],
        idlist:[]
    };
  },
  components:{
    recommendswipe
  },
  mounted() {
      this.remimg()
    //this.remswipe()
  },
  methods: {
      async remimg(){
          let result=await get({
              url:'/api/news/adviseSeats?type=10'
          })
          for(var i=0;i<result.list.length;i++){
              this.idlist.push(result.list[i].id)
          }
          this.imglist=result.list;
          
      }/* ,
      async remswipe(){
          let result1=await get({
              
          })
      } */
  },

};
</script>
<style lang='stylus' scoped>
// @import '~assets/othercss/chunk-03f8b8c8.css';
// @import '~assets/othercss/chunk-5bd3b402.css';
// @import '~assets/othercss/chunk-aad3c5e0.css';
// @import '~assets/othercss/chunk-vendors.css';
// @import '~assets/othercss/common.css';
// @import '~assets/othercss/iconfont.css';
.recommendlist
    width 100%
    .recommend-lump
        width 100%
        min-height 2.5879rem
        position relative
        overflow hidden
        .view-more
            width 100%
            color #fff
            top .476rem
            font-size .108rem
            text-align center
            position absolute
        img 
            max-width 100%
            vertical-align middle
        
        







</style>
