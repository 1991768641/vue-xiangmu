<template>
    <div class="hotbox">

      <div class="hotswiper">
        <van-swipe :autoplay="5000" indicator-color="#abcd05">
          <van-swipe-item v-for="(list, index) in imglist" :key="index" :to="list.link">
            <img :src="list.img"/>
          </van-swipe-item>
        </van-swipe>
      </div>

      <div class="ulmenu">
        <ul>
            <li v-for="(list,index) in ulmenulist" :key="index" @click="menuhandleclick(list.link)">
              <div class="menu-img">
                <img :src="list.img" alt="">
              </div>
              <div class="menu-txt">
                {{list.name}}
              </div>
            </li>
        </ul>
      </div>

      <ul class="classify-flx">
        <li v-for="(list,index) in classifylist" :key="index" >
          <div class="classify-img">
            <img :src="list.timage" alt="">
          </div>
          <div class="classify-txt">
            {{list.tname}}
          </div>
        </li>
      </ul>

      <div class="notice-wrap">
        <div class="notice-flx">
          <img src="http://m.egu365.com/img/notice_bg.jpg" alt="">
          <van-icon name="volume-o" color="#f44"/>
          <van-swipe vertical class="hotswip" :show-indicators="false" :autoplay="3000" >
            <van-swipe-item v-for="(list,index) in namelist" :key="index">
              {{list.name}}
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>

      <div class="luck">
        <van-swipe :autoplay="3500" indicator-color="white" :show-indicators="false">
          <van-swipe-item v-for="(list,index) in lucklist" :key="index" class="banner">
            <img :src="list.img" alt="">
          </van-swipe-item>
        </van-swipe>
      </div>

      <div class="early">
        <img src="http://m.egu365.com/img/hot_sale_bg.jpg" alt="">
        <div class="early-wrap">
          <img src="http://oss.egu365.com/upload/8ba1dd73510e4832a34e191556700d80.png">
          <div class="early-more">查看更多</div>
          <div class="early-goods-wrap">
            <img src="http://m.egu365.com/img/new.png" class="early-new-lab">
            <img src="http://m.egu365.com/img/strawberry.png" class="early-sb-lab">
            <div class="early-goods-head">
              <div class="early-head-title">尝鲜季</div>
              <div class="early-head-desc">购鲜，每月一次的舌尖之旅</div>
            </div>
            <ul class="early-goods-list">
              <li v-for="(list,index) in earlylist" :key="index">
                <img :src="list.bseGoodsEo.goodsImg" alt="" width="100%">
                <div class="early-goods-name ellipsis">
                  {{list.goodsName}}
                </div>
              </li>
            </ul>

          </div>
        </div>
      </div>
      
      <div class="sell-well">
        <img src="http://oss.egu365.com/upload/d24d9576242647f69a935b6c5fdee2b4.png" alt="">
        <div class="sell-well-wrap">
          <img src="http://m.egu365.com/img/top_sale.png" alt="" class="sell-new-lab"> 
          <div class="sell-goods-head">
            <div data-v-c9017720="" class="sell-head-title">热销榜</div>
            <div data-v-c9017720="" class="sell-head-desc">热卖，单品销量名次排行榜</div>
          </div>
          <ul class="sell-goods-list">
            <li class="" v-for="(list,index) in selllist" :key="index">
              <img :src="list.bseGoodsEo.goodsImg" alt="" width="100%">
              <div class="sell-goods-name ellipsis">
                {{list.goodsName}}
              </div>
              <div class="sell-goods-price">
                ￥{{list.mallPrice}}.00
              </div>
            </li> 
          </ul>
        </div>
      </div>

      <img src="http://m.egu365.com/img/today_advise.jpg" width="100%">
      
      <recommend></recommend>

      <recommendlike></recommendlike>
    </div>

</template>

<script>
import recommend from 'components/home/recommend.vue'
import recommendlike from 'components/home/recommend-like.vue';
import {get,get1} from 'utils/http';
import Vue from 'vue';
import { Swipe, SwipeItem ,Lazyload,Icon } from 'vant';

Vue.use(Swipe).use(SwipeItem).use(Lazyload).use(Icon);
export default {

  data () {
    return {
      imglist:[],
      ulmenulist:[],
      classifylist:[],
      namelist:[],
      lucklist:[],
      earlylist:[],
      selllist:[]
    }
  },
  components:{
    recommend,
    recommendlike
  },
  async mounted() {
    this.hotswiper()
    this.ulmenu()
    this.classify()
    this.noticewrap()
    this.luck()
    this.early()
    this.sell()
  },
  methods: {
    menuhandleclick(value){
      this.$router.push(value.toString());
    },
    async hotswiper(){
      let result=await get({
        url:'/api/news/adviseImg?seat=90'
      })
      this.imglist=result.list;
    },
    async ulmenu(){
      let result=await get({
        url:'/api/news/adviseImg?seat=91'
      })
      this.ulmenulist=result.list;
    },
    async classify(){
      let result=await get({
        url:'/api/goods/classify'
      })
      var newlist={
        timage:'http://oss.egu365.com/upload/mobile-all-categories.jpg',
        tname:'全部分类'
      }
      this.classifylist=result.list;
      this.classifylist.push(newlist);
    },
    async noticewrap(){
      let result=await get({
        url:'/api/news/adviseImg?seat=92'
      })
      this.namelist=result.list
    },
    async luck(){
      let result=await get({
        url:'/api/news/adviseImg?seat=93'
      })
      this.lucklist=result.list
    },
    async early(){
      let result=await get1({
        url:'/api/news/adviseAll?id=94&pageSize=4'
      })
      this.earlylist=result.bcPublishedGoodsEos
    },
    async sell(){
      let result=await get1({
        url:'/api/news/adviseAll?id=95&pageSize=4'
      })
      this.selllist=result.bcPublishedGoodsEos
    }
  },
}

</script>
<style lang='stylus' scoped>
@import '~~assets/stylus/border.styl';
.hotbox
  width 100%

  .hotswiper
    width 100%
    img 
      width 100%
  .ulmenu
    width 100%
    height .9993rem
    background #ffffff
    padding-top 0.212412rem;
    display flex
    
    ul
      width 100%
      height 100%
      display flex
      flex-wrap wrap
      li
        width 20%
        height 100%
        color #555
        display flex
        flex-direction column
        .menu-img
          width 100%
          height 61.4%
          display flex
          flex-direction column
          justify-content center
          align-items center
          img 
            max-height 100%
            vertical-align: bottom
        .menu-txt
          width 100%
          font-size 0.0984rem
          height 38.6%
          display flex
          justify-content center
          align-items center
  .classify-flx
    width 100%
    height 1.5rem;
    display flex
    justify-content center
    align-items center
    flex-wrap wrap
    li
      width 20%
      height 50%
      color #555
      display flex
      justify-content flex-start
      flex-direction column
      .classify-img
        width 100%
        height 68.3%
        display flex
        justify-content center
        align-items center
        img 
          max-height: 100%;
          vertical-align: bottom;
      .classify-txt
          width 100%
          height 32.7%
          font-size 0.0984rem
          display flex
          justify-content center
          align-items center
          padding-bottom: .041379rem;


  .notice-wrap
    width 100%
    height 0.416rem
    background-color #fff
    padding .05862rem .1rem
    .notice-flx
      width 100%
      height .252rem
      font-size .068rem
      padding .04rem
      $border(1px 1px 1px 1px);
      display flex
      justify-content flex-start
      align-items center
      img 
        border-radius .03rem
        max-height: 100%
      i 
        font-size .12rem
      .hotswip
        flex 1
        margin-left .05rem
        height 100%
      
        
        

  .luck
    width 100%
  
    padding .081228rem .1204rem
    .banner
      width 100%
      height 100%
      display flex 
      justify-content center
      align-items center
      img 
        max-width: 100%;
        vertical-align: middle;
  .early
    width 100%
    min-height 3.0064rem
    position relative
    img 
      margin 0
      padding 0
      border 0
      font inherit
      max-width 100%
      vertical-align middle
    .early-wrap
      width 100%
      height 100%
      position absolute
      left 0
      bottom 0
      z-index 999
      img 
        max-width 100%
        vertical-align middle
      .early-more
        color #788976
        position absolute
        right 0
        top 30%
        font-size .126rem
        padding-right .126rem
      .early-goods-wrap
        width calc(100% - 0.126834rem)
        height 57%
        background-color #fff
        position absolute
        left 0
        bottom 0
        text-align center
        z-index 2
        margin-left: .064484rem;
        margin-right: .064484rem;
        margin-bottom: .064484rem;
        border-radius: .034rem;
        .early-new-lab
          position absolute
          z-index 999
          max-width 100%
          vertical-align middle
          width 12%
          position absolute
          z-index 3
          top 0
          left 0
        .early-sb-lab
          width 8%
          position absolute
          z-index 3
          top -8%
          right -0.55%
          max-width 100%
          vertical-align middle
        .early-goods-head
          width 100%
          height 28%
          .early-head-title
            width 100%
            height 59%
            display flex
            justify-content center
            align-items center
            color #42e32f
            font-size .16rem
          .early-head-desc
            width 100%
            height 41%
            display flex
            justify-content center
            align-items center
            color #394b37
        .early-goods-list
          padding 0 .018rem 0 .018rem
          height 68%
          width 100%
          display flex
          justify-content space-between
          li
            width 20%
            flex 1
            height 100%
            border .014rem solid #f4f3f3
            border-radius .0510345rem
            img 
              max-width 100%
              border-radius .0510345rem
              vertical-align middle
            .early-goods-name
              width 100%
              color #222
              font-size .126rem
              height 19.7%
              margin-top 5%
              border-radius .014rem
              background-color #f4f4f4
  .sell-well
    width 100%
    position relative
    min-height 1.9963rem
    img 
      max-width 100%
      vertical-align middle
      margin 0
      padding 0
      border 0
      font inherit
    .sell-well-wrap
      width calc(100% - .128968rem)
      height 87.2%
      background-color #fff
      position absolute
      left 0
      bottom 0
      z-index 2
      text-align center
      margin-left .064484rem
      margin-right .064484rem
      margin-bottom .064484rem
      border-radius .084rem
      .sell-new-lab
        vertical-align middle
        position absolute
        z-index 999
        max-width 100%
        vertical-align middle
        width 12%
        position absolute
        z-index 3
        top 0
        left 0


      .sell-goods-head
        color #f50202
        width 100%
        height 28%
        .sell-head-title
          width 100%
          height 59%
          color #f50202
          display flex
          justify-content center
          align-items center
          font-size .16rem
        .sell-head-desc
          width 100%
          height 41%
          display flex
          justify-content center
          align-items center
          color #394b37
      .sell-goods-list
        padding 0 .018rem 0 .018rem
        height 68%
        width 100%
        display flex
        justify-content space-between
        li
          width 20%
          flex 1
          height 100%
          border .014rem solid #f4f3f3
          border-radius .0510345rem
          display flex 
          justify-content center
          align-items center
          flex-direction column
          img 
            width 69%
            border-radius .0510345rem
            vertical-align middle
          .sell-ranking
            position absolute
            top 0
            right .052rem
            color #fff
            font-size .096rem
            padding .2rem
            background-color #f50202
            border-bottom-left-radius .025rem
            border-bottom-right-radius .025rem
          .sell-goods-name
            width 100%
            color #222
            font-size .126rem
            height 14%
            border-radius .014rem
            background-color #f4f4f4
          .sell-goods-price
            width 100%
            height 16%
            color #f50202
</style>
