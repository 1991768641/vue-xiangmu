<template>
  <div class="recomswipe">
    <div class="recomitem" v-for="(list,index) in recommendlist" @click="handleclick(list.id)" :key="index">
      <img :src="list.goodsImg"/>
      <div class="rem-pro ellipsis">{{list.goodsName}}</div>
      <div class="rem-cart">
        <div class="rem-pri">￥{{(~~list.mallPrice).toFixed(2).toString()}}</div>
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
  data() {
    return {
        recommendlist:[],
        keyword:'',
        num:1
    };
  },
  mounted() {
      this.recomswipe()
  },
  
  methods: {
    async recomswipe() {
        this.value=this.$route.params.word;
        this.keyword=encodeURI(this.$route.params.word);
        let result=await get({
            url:`/api/goods/list?sorts=hits+desc&key=${this.keyword}&pageNo=${this.num}`
        })
        this.recommendlist=[
            ...this.recommendlist,
            ...result.list
        ]
        if(result.list.length>0){
            this.num++;
            this.recomswipe();
        }
    },
    handleclick(id){
        this.$router.push({path:`/details/${id}`})
    }

  }
};
</script>
<style lang='stylus' scoped>

.recomswipe
    width 100%
    position absolute
    top .4rem

    .recomitem
        width 45%
        display inline-block
        height 2.5rem
        margin-left 3%
        margin-top  3%
        border-radius 0.052rem
        background #fff
        img 
            width 100%
            border-radius 0.052rem
            vertical-align middle
        .rem-pro
           
            text-align center
            color #535353
            padding 0 .064483rem
            font-size .126rem
        .rem-cart
            width 100%
           
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
