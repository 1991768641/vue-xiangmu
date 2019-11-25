<template>
  <div class="genre-list">
    <header class="nav nav-t" style="background: rgb(255, 255, 255);">
      <div class="nav-l" @click="back">
        <van-icon name="arrow-left" />
      </div>
      <div class="nav-title">
        <i>购物车</i>
      </div>
      <div class="nav-r">
        <van-icon name="more" />
      </div>
    </header>
    <div class="content-scroll">
      <div class="detail-content">
        <div class="content">
            <div class="vant-list" >
              <div class="nolist" v-if="cartlist==''">
                <img src="http://m.egu365.com/img/cart.svg" alt="">
                <van-button round type="info" size="small" @click="toclick" :plain="true" to="/index">去逛逛</van-button>
              </div>

              <div class="item-content" v-else>
                <van-checkbox name="a" class="item-blk" v-model="checked" checked-color="#e90101">
                  自营商品
                </van-checkbox>
                <div class="item">
                  <van-checkbox name="a" class="item-blk2" v-model="checked" checked-color="#e90101"></van-checkbox>
                  <div class="right">
                    <div class="itemimg">
                      <img src="http://oss.egu365.com/upload/9adb8fbf8c43433e8538303a3a5b9443.jpg" alt="">
                    </div>
                    <div class="item-info">
                      <div class="w100">
                        <div class="item-tl">傻老大原味瓜子216g*6礼盒装</div>
                        <van-icon name="delete" size="16.8px"/>
                      </div>
                      <div class="item-spec">
                        <div class="item-spec">
                          <van-tag round color="rgb(227, 4, 8)" >次日达</van-tag>
                          <van-tag round color="rgb(204, 204, 204);">1296g</van-tag>
                        </div>
                      </div>
                      <div class="item-ps">
                        <div class="item-price">￥168.00</div>
                        <van-stepper v-model="value" />
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
        </div>
        <recommendlike></recommendlike>
      </div>
    </div>

    <van-submit-bar :price="0" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked" checked-color="#e90101">全选</van-checkbox>
    </van-submit-bar>

    <van-popup v-model="show">
      <img src="../../assets/images/erweima.png" alt="">
    </van-popup>
  </div>
</template>

<script>
import Vue from 'vue';
import { Icon,Button,Checkbox,CheckboxGroup,SubmitBar,Popup,Toast,Tag,Stepper} from 'vant';
import BScroll from 'better-scroll';
import {get,get1} from 'utils/http.js';
import store from 'store';
import recommendlike from 'components/home/recommend-like.vue';

Vue.use(Icon).use(Button).use(Checkbox).use(CheckboxGroup).use(SubmitBar).use(Popup).use(Toast).use(Tag).use(Stepper);

export default {
  data() {
    return {
        gullist:[],
        num:1,
        cartlist:['1'],
        result: ['a'],
        checked:true,
        show: false,
        value: 1
    };
  },
  components:{
    recommendlike
  },
  mounted() {
      this.gulitem()
      let bscroll=new BScroll('.genre-list',{
          pullUpLoad: true,
          probeType :2,
          click:true
      })

      bscroll.on('pullingUp',async ()=>{
          this.num++;
          let result=await get({
              url:`/api/goods/list?sorts=hits+asc&pageNo=${this.num}`,
          })
          this.gullist=[
              ...this.gullist,
              ...result.list
          ]
          await this.$nextTick();
          bscroll.refresh();
          bscroll.finishPullUp();
      })
  },
  methods: {
    async gulitem(){
        let result=await get({
            url:'/api/goods/list?sorts=hits+asc&pageNo=1'
        })
        this.gullist=result.list;
    },
    toggleAll() {
      this.$refs.checkboxGroup.toggleAll();
    },
    back(){
      this.$router.push('/index')
    },
    onSubmit(){
      this.show=true
      Toast({
        message:'没买东西点啥啊你！',
        position:'bottom'
      });
    },
    toclick(){
      store.set("active","");
    }
  },
};
</script>
<style lang='stylus' scoped>

.van-popup--center
  img 
    width 100px
    height 100px


.van-button--large
  height .4375rem
  line-height .4375rem
  background-color #f44

.van-submit-bar__bar
  height .4375rem
  padding-left .14rem


.content-scroll
  width 100%
  height 100%


.genre-list
  position relative
  width 100%
  height 100%
  padding-top .385rem

  top 0
  .nav-t
    width 100%
    height .385rem
    position fixed
    z-index 100
    top 0
    display flex
    box-shadow: 0 1px 2px #ccc;
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


  .content
    width 100%
    .vant-list
      width 100%
      min-height 2.8rem;
      background #f0f2f5
      
      .nolist
        width 100%
        margin: 40% auto;
        text-align: center;
        display flex 
        flex-direction column
        align-items center
        justify-content center
        img 
          width 25%
        .van-button--small 
          width 10%
          color #444
          background #fff
          border-color #fff
          height .224rem
          line-height .224rem
          margin-top .3rem
      .item-blk
        color: #232323;
        height .448rem
        font-size: .168rem;
        font-weight: 700;
        padding: .11.2rem .07rem;
        background-color: #fff;
        padding-left .14rem
      .item-blk2
        color: #232323;
        width .375rem
        height 1.0275rem
        font-size: .168rem;
        font-weight: 700;
        padding: .11.2rem .07rem;
        background-color: #fff;
        padding-left .14rem
    .item
      height 1.1395rem
      background #fff
      display flex
      padding .056rem .056rem .056rem 0px
      .right
        flex 1
        height 100%
        display flex
        .itemimg
          margin-right .056rem
          text-align center
          width 1.0275rem
          height 100%
          img 
            max-width 100%
            vertical-align middle
        .item-info
          flex 1
          .w100
            width 100%
            display flex
            justify-content space-between
            .item-tl
              height .3667rem
              color #323232
              font-size .1372rem
          .item-spec
            margin-top .056rem
            .van-tag 
              margin-right  0.048rem
          .item-ps
            display flex 
            justify-content space-between
            align-items center
            margin-top .056rem
            .item-price
              color #f00200
              font-size .152rem

            


        


        


</style>
