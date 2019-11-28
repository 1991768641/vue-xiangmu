<template>
  <div class="recommendlist"  ref="lumps">
    <div :class="`recommend-lump lump${index}`" v-for="(list,index) in imglist" :key="index">
      <recommendswipe :ids="list.id"></recommendswipe>
      <div class="view-more">查看更多 》</div>
      <img :src="list.bgImg1"/>
      
    </div>
  </div>
</template>

<script>
import {get,get1} from 'utils/http';
import Vue from 'vue';
import recommendswipe from 'components/home/recommend-swipe.vue';
import BScroll from 'better-scroll';
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
  async mounted() {
    await this.remimg()
    // console.log(this.imglist);
    for(var i=0;i<9;i++){
      new BScroll('.lump'+i,{
          pullUpLoad: true,
          scrollX:true,
          probeType :2
      })
    }
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
      }
  },

};
</script>
<style lang='stylus' scoped>

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
