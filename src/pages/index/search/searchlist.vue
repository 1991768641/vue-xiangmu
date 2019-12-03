<template>
    <div class="homesearch">
      <header class="nav-t">
        <div class="nav-l" @click="searchbackclick">
            <van-icon name="arrow-left" />
        </div>
        <div class="nav-title">
            <van-search :placeholder="value" shape="round" @click="backsearch"/>
        </div>
        <div class="nav-r">
           <van-icon name="ellipsis" />
        </div>
      </header>

      <van-tabs v-model="active" line-height="0px">
        <van-tab title="默认">
            <searchitem1></searchitem1>
        </van-tab>
        <van-tab title="销量">
            <searchitem2></searchitem2>
        </van-tab>
        <van-tab title="价格▲">
            <searchitem3></searchitem3>
        </van-tab>
        <van-tab title="价格▼">
            <searchitem4></searchitem4>
        </van-tab>
        <van-tab>
            <div slot="title">
                <van-icon name="apps-o" class="slotvan-ellipsis"  />
            </div>
            内容5
        </van-tab>
      </van-tabs>
    
    </div>
</template>

<script>
import Vue from "vue";
import { Search,Icon } from "vant";
import { get, get1 } from "utils/http.js";
import searchitem1 from 'components/home/searchitem1.vue'
import searchitem2 from 'components/home/searchitem2.vue'
import searchitem3 from 'components/home/searchitem3.vue'
import searchitem4 from 'components/home/searchitem4.vue'

Vue.use(Icon).use(Search);
export default {
  data() {
    return {
        resultlist:[],
        keyword:'',
        num:1,
        flagresult:[],
        value:'',
        active: 0,
        flag:false
    };
  },
  mounted() {
    this.value=this.$route.params.word;
  },
  methods: {
    searchbackclick(){
        this.$router.push('/search')
    },
    backsearch(){
        this.$router.push('/search')
    }
  },
  components:{
      searchitem1,
      searchitem2,
      searchitem3,
      searchitem4
  }
};
</script>
<style lang='stylus' scoped>
.van-search .van-cell{
    height .3rem
}


.van-search 
  height 0.355rem
  font-size .1225rem
  filter:blur(5.74);


.van-search--show-action
  height: 0.355rem;
  font-size .1225rem
  filter:blur(5.74);


.van-tabs--line 
    height 100% !important
.van-tabs--line .van-tabs__wrap {
    height:.35rem !important
}
.van-tab
    height 100% !important


.homesearch
    width 100%
    padding-top .365rem
    height 100%
    
    .nav-t
        width 100%
        max-width 7.8rem
        height .385rem
        position fixed
        z-index 100
        top 0
        display flex
        background #fff
        border-bottom 2px solid #ccc
        box-shadow: 0 2px #ccc;
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

            i 
                font-size .161rem
                color #444
        .nav-r
            width .385rem
            height 100%
            display flex 
            align-items center
            justify-content center
            i 
                font-size .224rem
</style>
