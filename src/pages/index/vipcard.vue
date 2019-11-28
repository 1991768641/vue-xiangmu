<template>

  <section id="city-list" class="city-list-container" style="display: block;">
    <div id="locate" class="city-title">定位城市</div>
    <div class="city-list city-list-inline clearfix">
      <div class="location-city">定位失败，请点击重试</div>
    </div>

    <section>
      <div id="hot" class="city-title">热门城市</div>
      <div class="city-list city-list-inline clearfix">
        <div class="city-item" data-nm="上海" data-id="10">上海</div>
        <div class="city-item" data-nm="北京" data-id="1">北京</div>
        <div class="city-item" data-nm="广州" data-id="20">广州</div>
        <div class="city-item" data-nm="深圳" data-id="30">深圳</div>
        <div class="city-item" data-nm="武汉" data-id="57">武汉</div>
        <div class="city-item" data-nm="天津" data-id="40">天津</div>
        <div class="city-item" data-nm="西安" data-id="42">西安</div>
        <div class="city-item" data-nm="南京" data-id="55">南京</div>
        <div class="city-item" data-nm="杭州" data-id="50">杭州</div>
        <div class="city-item" data-nm="成都" data-id="59">成都</div>
        <div class="city-item" data-nm="重庆" data-id="45">重庆</div>
      </div>
    </section>

    <van-index-bar :index-list="indexList">
      <van-index-anchor index="1">标题1</van-index-anchor>
      <van-cell title="文本" />

    </van-index-bar>

    
  </section>
  
</template>

<script>
import Vue from 'vue';
import { IndexBar, IndexAnchor,cell } from 'vant';
import city from 'assets/cities.json';
import _ from 'loadsh';

Vue.use(IndexBar).use(IndexAnchor).use(cell);

export default {
  data() {
    return {
      indexList: [
        '定位',
        '最近',
        '热门',
        'A'
      ]

    };
  },
  mounted() {
    this.citylist()
  },
  methods: {
    citylist(){
      let result=_.groupBy(city.cts,(value)=>{
        return value.py.substr(0,1).toUpperCase()
      })
      console.log(result)
    }
  },
};
</script>

<style lang='stylus' scoped>
.van-index-bar_sidebar{
  top:75px !important
}

.van-index-bar_index {
  display:block 
  height:.2rem
  margin-bottom:1rem !important
  color:red 
}

.nav {
  position: fixed;
  top: 75px;
  top: 11vh;
  right: 0;
  width: 35px;
  z-index: 10;
  text-align: center;
  font-size: 12px;
}

.nav .nav-item {
  height: 22.73px;
}

.city-list-container {
  display: none;
  background-color: #ebebeb;
  font-size: 14px;
  color: #333;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1000;
  overflow-y: auto;
}

section {
  display: block;
}

.city-title {
  padding-left: 15px;
  line-height: 30px;
}

.city-list-inline {
  background-color: #f5f5f5;
  padding-bottom: 8px;
}

.city-list {
  padding-right: 30px;
}

.city-list-inline .location-city {
  width 2rem !important
  padding: 0 20px;
}

.city-list-inline .city-item, .city-list-inline .location-city {
  float: left;
  background: #fff;
  width: 29%;
  height: 33px;
  margin-top: 15px;
  margin-left: 4%;
  padding: 0 4px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  line-height: 33px;
  text-align: center;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.clearfix:after {
  content: ' ';
  display: table;
  clear: both;
}

.city-title-letter {
  padding-left: 25px;
}

.city-title {
  padding-left: 15px;
  line-height: 30px;
}

.city-list-block {
  background-color: #f5f5f5;
}

.city-list {
  padding-right: 30px;
}

.city-list-block .city-item {
  height: 44px;
  line-height: 44px;
  margin-left: 15px;
  border-bottom: 1px solid #c8c7cc;
}
</style>