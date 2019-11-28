<template>
  <div class="gooddetails">
    <header>
      <div class="left" @click="handleclick">
        <i><</i>
      </div>
      <div class="center">

      </div>
      <div class="right">
        <van-icon name="more" color="#aaa" />
      </div>
    </header>

    <div class="content-nt">
      <van-swipe indicator-color="white" class="detailswipe" @change="onChange">
        <van-swipe-item class="detailswipe-item" v-for="(list,index) in imglist" :key="index">
          <img :src="list.imgSrc" alt="">
        </van-swipe-item>
        <div class="custom-indicator" slot="indicator">
          {{ current + 1 }}/{{length}}
        </div>
      </van-swipe>

      <div class="price-name">
        <div class="price-top">
          <div class="price-lab-collect">
            <div class="price">{{this.price}}</div>
            <div class="lab"></div>
            <div class="collect">
              <van-icon name="star-o" />
              <div class="word">收藏</div>
            </div>
          </div>
          <div class="self-support">
            自营
            <i class="morrow">次日达</i>
            <i class="express">深圳平湖仓</i>
          </div>
        </div>

        <div class="content-bottom">
          <div class="word">
            <p>{{goodsname}}&nbsp;&nbsp;&nbsp;&nbsp;{{slogan}}</p>
          </div>
        </div>
      </div>

      <div class="margin-bottom">
        <div class="column-name">时效</div>
        <div class="aging">
          <i data-v-718e2bd4="">
            当日16：00前下单，预计次日送达！
          </i>
          <div style="font-weight: bold;">
            预售商品按预设时间配送，不便之处，敬请谅解！
          </div>
        </div>
      </div>

      <div class="margin-bottom">
        <div class="column-name">已选</div>
        <div class="chosen">{{goodsStandard}}，1{{goodsUnit}}</div>
      </div>

      <div class="column">
        <div class="column-name">送至</div>
        <div class="check-delivery send-area">
          <div>
            <van-icon name="location-o" color="#ff0f0f" />
            <i>广东</i>
            <i>深圳市</i>
            <i>福田区</i>
          </div>
          <p>现货</p>
        </div>
      </div>

      <div class="column">
        <div class="column-name">重量</div>
        <div class="weight">{{grossWeight}}/{{goodsUnit}}</div>
      </div>

      <div class="margin-bottom">
        <div class="column-name">运费</div>
        <div class="send-fee">
          <div>根据地区计算</div>
          <div>全场满199元包邮（限深圳市），单笔不足运费8元起， 生鲜类仅限深圳同城！</div>
        </div>
      </div>

      <div class="margin-bottom">
        <div class="column-name">提示</div>
        <div class="receive-tips">
          <p>产品图片及其描述仅作参考，请您以收到的实物为准！</p>
          收货后商品如有损坏，请您当场拍下图片，并保留相关商品，
          在24小时之内及时联系售后客服，以便我们给您更换完好的
          商品！如非质量问题，概不退换！
        </div>
      </div>

      <van-tabs v-model="active">
        <van-tab title="商品介绍">
          <div class="content" v-html="bottomimgs">
          </div>
        </van-tab>
        <van-tab title="规格参数">
          <div class="card-view">
            <div>基本信息</div>
            <div>品牌：
              <i>{{goodsBrand}}</i>
            </div>
            <div>产地：
              <i>{{address}}</i>
            </div>
            <div>毛重：
              <i>{{grossWeight}}</i>
            </div>
          </div>
          <div class="card-view">
            <div>包装信息</div>
            <div>包装：
              <i>{{goodsUnit}}</i>
            </div>
            <div>规格：
              <i>{{goodsStandard}}</i>
            </div>
          </div>
          <div class="card-view">
            <div>配送方式</div>
            <div>
              自营：当日16点前下单，次日送达，仅限深圳市； 
            </div>
            <div>
              代发：当日16点前下单，1-3天发货。
            </div>
          </div>
          <div class="card-view">
            <div>存储方式</div>
            <div>存放：
              <i>{{param4}}</i>
            </div>
            <div>
              <i>{{param3}}</i>
            </div>
          </div>
        </van-tab>
        <van-tab title="售后保障">
          <div class="ability">
            <ul class="desc-slogan">
              <li>
                <div>
                  <img src="http://m.egu365.com/img/slogan_01.png" alt="">
                </div>
                <div><div>安全食品</div>官方实名认证</div>
              </li>
              <li>
                <div>
                  <img src="http://m.egu365.com/img/slogan_01.png" alt="">
                </div>
                <div><div>安全食品</div>官方实名认证</div>
              </li>
              <li>
                <div>
                  <img src="http://m.egu365.com/img/slogan_01.png" alt="">
                </div>
                <div><div>安全食品</div>官方实名认证</div>
              </li>
              <li>
                <div>
                  <img src="http://m.egu365.com/img/slogan_01.png" alt="">
                </div>
                <div><div>安全食品</div>官方实名认证</div>
              </li>
              <li>
                <div>
                  <img src="http://m.egu365.com/img/slogan_01.png" alt="">
                </div>
                <div><div>安全食品</div>官方实名认证</div>
              </li>
            </ul>

            <div class="desc-sa">
              <div class="exchange">商品退换货</div>
              <p>1、客户在收到商品后可享受“7日内无理由退货”，已标示不允许退货和鲜活易腐商品除外。</p><p data-v-fe08bc44="">2、因产品质量问题发生退换货时，所换商品将在约定的时间重新配送，免收物流费。</p><p data-v-fe08bc44="">3、因客户保存不善造成的商品损坏，我们将不予退换。</p><p data-v-fe08bc44="">4、如商品存在质量问题，请保留质量物品原物，依谷验货人员将在接到投诉后12小时内上门验货。您也可以登陆依谷网在会员管理处向依谷客服人员投诉，并上传质量问题图片。</p><p data-v-fe08bc44="">5、客户在收到商品（仅限干货类商品）48小时之内如需换货，请与依谷网客服联系，我们将在接收您的退换货请求24小时内处理，此类退换只限于没有被使用，且不损坏包装、不影响二次销售的商品，退换货所发生的路费/运费将由客户承担。</p><p data-v-fe08bc44="">6、水果类商品不能以外观瑕疵、个人口感为由提出退换，如因其它品质问题退货，则需提出退货理由并填写商品拒收单给送货员，所退货品交由送货员带回。您或您的委托收货人的签字表示您对商品质量及数量无异议，依谷网有权不接受以此为由的退换货。</p><p data-v-fe08bc44="">7、网上产品销售图片及信息仅供参照，因拍摄灯光及不同显示器色差等问题可能造成商品图片与实物有一定色差，一切以实物为准。 依谷网不接受以此为由的退换货。</p><p data-v-fe08bc44="">8、发生退货后，请联系我们的客服，经客服工作人员核实后会为您办理退款。我们会将货款24小时内退至您的依谷网个人帐户中，以便于下次订购时使用；对于网银支付或使用支付宝支付的客户如需将款项退至原支付账户，将在申请退款后7日内到账。</p>
              <p>以上规则最终解释权由依谷网所有。</p>
            </div>
          </div>
        </van-tab>
      </van-tabs>

    </div>

    <footer>
      <van-goods-action>
        <van-goods-action-icon icon="wap-home-o" text="首页" @click="onclickhome" />
        <van-goods-action-icon icon="apps-o" text="分类" @click="onClickIcon" />
        <van-goods-action-icon icon="shopping-cart" text="购物车" :info="infonum" @click="onclickcart" />
        <van-goods-action-button type="warning" text="加入购物车" @click="addcart" />
        <van-goods-action-button type="danger" text="立即购买" @click="buycart" />
      </van-goods-action>
    </footer>
  </div>
</template>

<script>
import store from 'store';
import Vue from 'vue';
import {get,get1,post} from 'utils/http';
import BScroll from 'better-scroll';
import axios from 'axios';
import _ from 'loadsh';
import qs from 'qs';
import {Tab, Tabs, Icon,GoodsAction,GoodsActionIcon,GoodsActionButton,Toast,Swipe, SwipeItem} from 'vant';

Vue.use(Tab).use(Tabs).use(Icon).use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton).use(Swipe).use(SwipeItem);

import {CARTNUM,ADDGOODS,ADDLIST} from '../../store/modules/action-type'
export default {
  props:{
    bscroll:Object
  },

  data () {
    return {
      imglist:[],
      current: 0,
      length:0,
      goodsname:'',
      slogan:'',
      active:0,
      bottomimgs:{},
      selected:'',
      goodsStandard:'',
      price:'',
      goodsUnit:'',
      grossWeight:'',
      param3:'',
      address:'',
      goodsBrand:'',
      param4:'',
      id:'',
      infonum:0,
      flag:0,
      d:{},
      c:{
        a:{
          b:'2'
        }
      }
    }
  },
  async mounted() {
    await this.detailsimg();
    this.id=this.$route.params.id;
    this.infonum=store.get('cartmessage').length;

    await this.bottomimg();
    await this.selects();
    await this.composite();
  },
  beforeRouteEnter (to, from, next) {
    next()
  },

  methods: {
    handleclick(){
      this.$router.back()
    },
    onclickhome() {
      store.set('active','')
      this.$router.push('/index/home/home0');
    },
    onclickcart() {
      this.$router.push('/cart');
      this.$store.dispatch('cart/'+ADDLIST);
      this.$forceUpdate(); 
    },
    buycart(){},
    onClickIcon(){},
    addcart(){
      let result= store.get('cartmessage');
      if(result.length!=0){
        for(var i=0;i<result.length;i++){
          if(result[i]!=this.id){
            this.flag++;
          }
        }
        if(this.flag==result.length){
          this.infonum++;
          result.push(this.id);
          store.set('cartmessage',result);
        }
      }else{
        this.infonum=1;
      }
      Toast({
        message:'加入购物车成功',
        position:'bottom'
      })
      this.$store.dispatch('goods/'+ADDGOODS,this.id)
      this.$store.dispatch('goods/'+CARTNUM)
    },
    onChange(index) {
      this.current = index;
    },
    async detailsimg(){
      let result= await get({
        url:`/api/goods/imgs?id=${this.$route.params.id}`
      })
      this.imglist=result.list;
      this.length=this.imglist.length;
    },
    async bottomimg(){
      let result=await get({
        url:`http://api.egu365.com/goods/desc?id=${this.$route.params.id}`
      })
      this.bottomimgs=result.obj.goodsDesc;
    },
    async selects(){
      let result=await get({
        url:`http://api.egu365.com/goods/specs?id=${this.$route.params.id}`
      })
      this.selected=result.list;
      for(var i=0;i<this.selected.length;i++){
          if(this.selected[i].id==this.$route.params.id){
            this.goodsStandard=this.selected[i].goodsStandard
          }
      }
    },
    async composite(){
      let result=await axios.post(
        '/api/goods/publish',
        `id=${this.$route.params.id}&memberId=1000011785&memberAccount=1000011785&memberName=EGU1000011785`,
      ).then((result) => {
        return result.data.obj
      })

      this.price=(~~result.mallPrice).toFixed(2);
      this.goodsUnit=result.bseGoodsEo.goodsUnit;
      this.grossWeight=result.bseGoodsEo.grossWeight;
      this.param3=result.bseGoodsEo.param3;
      this.address=result.bseGoodsEo.address;
      this.goodsBrand=result.bseGoodsEo.goodsBrand;
      this.param4=result.bseGoodsEo.param4;
      this.slogan=result.bseGoodsEo.param2;
      this.goodsname=result.goodsName;
    }
  }
}

</script>
<style lang='stylus' scoped>

@media screen and (min-width:1024px) {
  header {
    height .7975rem !important 
  }
  header .left {
    width  .7975rem !important 
    height .7975rem !important 
  }
  header .left i{
    width  .464rem !important 
    height .464rem !important 
    font-size .5rem !important 
  }
  header .right  {
    width  .7975rem !important 
    height .7975rem !important 
  }
  header .right .van-icon{
    font-size .464rem !important
  }

  header .right .van-icon-more{
    font-size .464rem !important
  }
}

.gooddetails
  width 100%
  margin-bottom .5rem
  display flex 
  justify-content center

  header 
    max-width 7.8rem;
    width 100%;
    height .385rem
    position fixed
    top 0
    display flex 
    justify-content center
    align-items center
    color #ffffff
    z-index 100
    .left
      width .385rem
      height 100%
      font-size .18rem
      display flex 
      justify-content center
      align-items center
      font-family "宋体"
      font-weight 900
      i 
        width .252rem
        height .252rem
        display flex 
        justify-content center
        align-items center
        border-radius 50%
        color #fff
        background-color #aaa
    .center
      flex 1
      height 100%
    .right
      width .385rem
      height 100%
      display flex 
      justify-content center
      align-items center
      font-weight 900
      .van-icon
        font-size .252rem
      .van-icon-more
        font-size .252rem

  .content-nt
    width 100%
    background #fcfcfc
    .detailswipe
      width 100%
      overflow hidden
      position relative
      .detailswipe-item
        width 100%
        img 
          width 100% !important 
    .custom-indicator
      color #acacad
      background #e9e9eb
      position absolute
      bottom .0556rem
      right .07rem
      font-size .1372rem
      border-radius .112rem
      padding 0 0.084rem
    .price-name
      width 100%
      background-color: #fff;
      padding: .14rem .12rem;
      border-bottom: 1px solid #dadada;
      .price-top
        width 100%
        .price-lab-collect
          width 100%
          height .309rem
          display flex
          .price
            color: #ec231b;
            height 100%
            font-size: .252rem;
            font-weight: 700;
            font-family: Microsoft YaHei, Arial, Helvetica, sans-serif;
          .price::before
            content "￥"
            width .168rem
            height .224rem
            font-size .16rem
          .lab
            flex 1
            height 100%
            margin-left .07rem
          .collect
            text-align center
            font-size .1006rem
            font-weight 400
            padding-left .05rem
            color #625e5f
            i   
              font-size .1414rem
        .self-support
          height: .5069rem;
          color: red;
          font-size: .12rem;
          display flex 
          justify-content flex-start
          align-items center
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
              font-size .112rem
      .content-bottom
        width 100%
        height .432rem
        .word
          width 100%
          height 100%
          p
            width 100%
            height 100%
            font-weight 900
            color #262626
            font-size .13rem
            line-height .21rem
    .margin-bottom
      background #ffffff
      padding .1064rem .12rem
      margin-bottom .12rem
      display flex
      justify-content flex-start
      .send-fee
        font-size .1176rem
        div:nth-child(1)
          color #ff0000
      .receive-tips
        color #525252
        font-size .1176rem
        p
          color #ff0000

      .column-name
        color #858585
        padding-right .07rem
        font-size .1176rem
        min-width .336rem
        display flex
      .aging
        color #1d1d1d
        font-size .1176rem
        div
          font-weight: bold;
      .chosen
        font-size .14rem
        color #ff0000
        font-weight bold

    .column
      background #fff
      padding .1rem .12rem
      display flex 
      justify-content flex-start
      .column-name
        padding-right .07rem
        color #858585
        font-size .1176rem
        min-width .336rem
      .send-area
        color #383838
        font-size .1176rem
        div
          i 
            padding-right .056rem
        p
          color #ff0f0f
          padding-top .028rem
          font-size .112rem
    .weight
      color #383838
      font-size .1176rem
    .card-view
      width: 96%;
      margin 3%
      background #fff
      padding .0868rem
      font-size .098rem
      line-height .168rem
      color #605e5e
      box-shadow 0 2px 2px rgba(207, 207, 207, 0.3)
      div:nth-child(1)
        font-size .126rem
        line-height .248rem
        color #030000
    .ability
      width 100%
      padding-top .08rem
      .desc-slogan
        width 100%
        display flex 
        flex-wrap wrap
        li
          width 50%
          padding .056rem .084rem
          display flex
          justify-content flex-start
          div:nth-child(1)
            width .392rem
            height .392rem
            margin-right .06rem
            img
              width 100%
              height 100%
          div:nth-child(2)
            width calc(50%-.392rem)
            height .392rem
            font-size .112rem
            color #666
            padding-top .028rem
            
            div
              width 100%
              height .192rem
              display flex
              justify-content center
              align-items center
              flex-direction column
              font-size .14rem
              color #ff0000

      .desc-sa
        margin .084rem
        div:nth-child(1)
          color #fd7400
          font-size .152rem
          margin .07rem
        p
          font-size .126rem
          color #666
          text-indent 2em

.van-goods-action
  width 100%
  height .5rem


.van-goods-action-button--last 
  margin-right: 0px;
  border-top-right-radius: 0px !important;
  border-bottom-right-radius:0px !important;

.van-goods-action-button--first
  margin-right: 0px;
  border-top-left-radius: 0px !important;
  border-bottom-left-radius:0px !important;

.van-goods-action-button 
    flex 1
    height .5rem
    font-weight 500
    font-size 14px
    line-height normal
    border 0


</style>
