<template>
  <div class="search-box">
    <form>
      <van-search
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
        shape="round"
        background="#fff"
        @input="handleinput($event)"
      />
    </form>

    <div class="search-list">
      <div class="seg">
        <div class="seg-tl">热门搜索</div>
        <ul class="seg-item">
          <li v-for="(li,index) in hotlist" :key="li+index">{{li}}</li>
        </ul>
      </div>
      <div class="seg">
        <div class="seg-tl">历史记录</div>
        <ul class="seg-item"></ul>
        <div class="cls-bt">清空历史记录</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Search } from "vant";
import {get,get1} from 'utils/http.js'

Vue.use(Search);
export default {
  data() {
    return {
      value: "请输入搜索关键词",
      hotlist:[],
      content:'',
      flag:false
    };
  },
  mounted() {
    this.init();
    this.onSearch();
  },
  methods: {
    onSearch() {
      if(this.flag==true){
        this.$router.push({
          path:`/searchlist/${this.content}`
        })
      }
    },
    onCancel() {
      this.$router.push('/index');
    },
    async init(){
      let result=await get({
        url:'/api/goods/hotWords?seat=109'
      })
      this.hotlist=result.list
    },
    handleinput(e){
      this.content=e;
      this.flag=true;
    }
  }
};
</script>
<style lang='stylus' scoped>
.van-icon-search {
  color: #666;
}

.van-search 
  height 0.48rem
  font-size .1225rem
  filter:blur(5.74);


.van-search--show-action
  height: 0.48rem;
  font-size .1225rem
  filter:blur(5.74);


.van-cell__value {
  color: #666;
}

.van-cell__value--alone {
  color: #666;
}

.van-field__control {
  border: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  resize: none;
  display: block;
  color: #666;
  box-sizing: border-box;
  background-color: transparent;
}

.van-search__action {
  padding: 0 8px;
  color: #666;
  font-size: 14px;
  line-height: 34px;
}

.search-box 
  height 100%
  background #fff
  .search-list
    width 100%
    height calc(100% - .48rem)
    overflow-y scroll
    .seg
        text-align left
        width 100%
        margin-bottom 2%
        color #888
        .seg-tl
            width 100%
            font-size .14rem
            padding .14rem .14rem .07rem .14rem
        .seg-item
            width 100%
            padding 0 .14rem
            display flex
            flex-wrap wrap
            li
                color #777
                background #f6f6f6
                border-radius: .14rem
                padding 0 .14rem;
                line-height: .25rem;
                height: .25rem;
                margin: .07rem .07rem 0 .07rem;
                font-size: .1223rem;
        .cls-bt
            margin: 10% 30%;
            width: 38%;
            height: .28rem;
            line-height: .28rem;
            font-size: .14rem;
            border: 1px solid #d9d9d9;
            border-radius: .14rem;
            text-align: center;
</style>
