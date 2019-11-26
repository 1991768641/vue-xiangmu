<template>

  <div class="recommendfruits-list" :style="publicstyle" v-if="publiclist!=''">
    <div class="publicgood" v-for="(list,index) in publiclist" :key="index"  @click="handclick(pubindex,list.id,list.goodsName,list.slogan,list.salePrice)" :bscroll="bscroll">
      <div class="goods-img" >
        <img
          :src="list.goodsImg"
        />
      </div>
      <div class="goods-name ellipsis">{{list.goodsName}}</div>
      <div class="goods-slogan ellipsis">{{list.slogan}}</div>
      <div class="self-support">
        自营
        <i class="morrow">次日达</i>
        <i class="express">深圳平湖仓</i>
      </div>
      <div class="price-cart flx">
        <i class="goods-price flx-1">￥{{(~~list.salePrice).toFixed(2).toString()}}</i>
        <div class="rem-add">
            <van-icon name="shopping-cart-o" />
        </div>
      </div>
    </div>
  </div>

  <van-skeleton
    title
    avatar
    :row="3"
    :loading="true"
    v-else
  >
  </van-skeleton>

  
</template>

<script>
import Vue from 'vue';
import store from 'store';
import {Icon,Toast,Skeleton} from 'vant';
import {get,get1} from 'utils/http';
import BScroll from 'better-scroll';
Vue.use(Icon).use(Toast).use(Skeleton);

export default {
  props:['pubid','pubindex','pubimg'],
  data() {
    return {
        publiclist:'',
        num:this.$store.state.scroll.page,
        testlist:[],
        publicimg:'',
        publicstyle:'',
        bscroll:null,
        newpublic:store.get('publicid')||'',
        goodsid:''
    };
  },
  
  async mounted() {
      let storeimg=store.get('active')||'1';
      let bgimg=(~~storeimg-1).toString();
      await this.titleimg(bgimg)
      await this.publicdatas(this.num)

      this.bscroll=new BScroll(`.van_tab__pane_nav${storeimg}`,{
          pullUpLoad: true,
          probeType :2,
          click:true
      })
      this.bscroll.scrollTo(0,this.$store.state.scroll.position);

      this.bscroll.on('pullingUp',async ()=>{
        if(this.testlist.length>0){
          this.num++;
          let result=await get({
            url:`/api/goods/list?tid=${this.newpublic}&sorts=hits+asc&seat=96&pageNo=${this.num}`,
          })
          this.testlist=result.list;
          this.publiclist=[
              ...this.publiclist,
              ...result.list
          ]
          await this.$nextTick();
          this.bscroll.refresh();
          this.$store.commit('scroll/setpage',{
            page:this.num
          })

        }else{
          Toast(
            {
              message: '到底了~',
              position: 'bottom',
              duration: 1000
            }
          );
        }
        this.bscroll.finishPullUp();
      })
      await this.$nextTick();

      this.bscroll.on('scrollEnd',()=>{
         this.$store.commit('scroll/setposition',{
            position:this.bscroll.y
         })
      })

      
  },
  methods: {
      async publicdatas(value){
        for(var i=1;i<=value;i++){
          let result=await get({
              url:`/api/goods/list?tid=${this.newpublic}&sorts=hits+asc&seat=96&pageNo=${i}`
          })
          this.publiclist=[  
            ...this.publiclist,
            ...result.list
          ];

          this.testlist=result.list;
        }
      },
      async titleimg(value){
        let result=await get({
            url:'/api/news/adviseSeats?type=10'
        })
        let values=value||0
        this.publicimg=result.list[values].bgImg2;
        this.publicstyle=this.filter(this.publicimg);
      },
      filter(value){
        return "background-image:url('"+value+"')";
      },
      handclick(activeindex,id,names,slogan,price){
        
        this.$router.push({
          path:`/details/${id}`
        });
        let newstore=store.get('active');
        store.set('active',newstore);
        store.set('publicid',this.newpublic);
        store.set('goodsname',names);
        store.set('slogan',slogan);
      },
      
  },
};
</script>
<style lang='stylus' scoped>

.recommendfruits-list
    width: 100%;
    padding-top: .94rem;
    background: #f9f5f6 no-repeat 0 .071724rem;
    background-size:100%;
    margin 0
    .publicgood
        display inline-block 
        width 45%
        margin-left 3%
        margin-bottom 3%
        border-radius: .052rem;
        background-color: #fff;
        .goods-img
            padding 0 0.072rem 0.041rem 0.072rem
            img 
                max-width: 100%;
                vertical-align: middle;
        .goods-name
            color: #4f4f4f;
            height: .1931rem;
            font-size: .13rem;
            padding: 0 .068966rem;
            filter contrast(8.9)
        .goods-slogan
            color: #939393;
            font-size: .1036rem;
            height: .1931rem;
            display flex 
            align-items center
            padding: 0 .068966rem;
        .self-support
            height: .1931rem;
            color: red;
            font-size: .098rem;
            padding: 0 .068966rem;
            filter contrast(4)
            .morrow
                color #fff
                background-color red
                border-radius .06rem
                padding 0 .064rem
                margin 0 .052rem
                font-size .098rem
            .express
                color #af52ef
                margin 0 .052rem
                font-size .098rem
        .price-cart
            padding-left 0.076rem
            display flex
            justify-content space-between
            align-items center
            .goods-price
                color red
                font-size .16rem
                margin 0.025rem
                text-align left 
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
