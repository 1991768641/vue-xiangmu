<template>
    <div class="nav-span" v-if="navlist.length>0"> 
      <van-tabs class="homevan" line-width="15%" v-model="active">
         <div class="homeinputbox">
            <div class="homeinput">
              <div class="home_interior">
                <van-icon name="search" color='#666'/>
                <input type="text" placeholder="红颜草莓" @click="searchclick">
              </div>
            </div>
          </div>
        <van-tab v-for="(list,index) in navlist" :key="list.tid" :title="list.tname+index" :class="`van_tab__pane_nav${index}`">
          <div class="tab-title" slot="title" :name="index"  :id="list.tid" @click="handleclick(index,$event)">{{ list.tname }}</div>
          <div class="tab-content">
            <router-view :routerid="titleid" :routerindex="titleindex" :navindex="index"></router-view>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <div class="home_loadding" v-else>
      <van-loading type="spinner" vertical size="50px">加载中,亲耐心点哦~~</van-loading>
    </div>
</template>

<script>
import {get} from 'utils/http';
import Vue from 'vue';
import store from 'store';
import { Tab, Tabs ,Field,Icon,Loading } from 'vant';
Vue.use(Tab).use(Tabs).use(Field).use(Loading);

export default {
  data () {
    return {
      active:0,
      homeindex:'1',
      navlist:[],
      titleid:'',
      titleindex:'',
      num:''
    }
  },
  components:{
    
  },
  async mounted() {
    this.active=~~store.get('active')||0;
    let result= await get({
      url:'/api/goods/classify'
    })
    var hot={
      "upId": "1",
      "idxkey": 1,
      "tname": "依谷热卖",
    }
    this.navlist=result.list;
    this.navlist.unshift(hot);
  },
  methods: {
    handleclick(index,e){
     this.titleid=e.currentTarget.id;
     this.titleindex=index.toString()||'1';
     this.$router.push('/index/home/home0');
     store.set('active',index.toString());
     store.set('publicid',this.titleid);
    },
    searchclick(){
      this.$router.push('/search');
    }
  }
}

</script>
<style lang='stylus' scoped>
@import '~assets/stylus/border.styl';

.tab-title
  filter contrast(9.74)


.homeinputbox
  background #fff
  position relative
  z-index 999

.home_loadding
  width 100%
  height 100%
  display flex 
  justify-content center
  align-items center

.nav-span
  height 100%
.homevan
  height 100%

.tab-content
  width 100%
  display flex 
  flex-direction column
.homeinputbox
  font-family Microsoft YaHei, Arial, Helvetica, sans-serif;
  width 100%
  height .385rem
  display flex 
  justify-content center
  $border(0 0 1px 0);
  .homeinput
    width 100%
    padding .0462rem .126rem
    height 100%
    display flex 
    .home_interior
      flex 1
      padding .04375rem .0875rem .04375rem 0
      display flex 
      justify-content center
      align-items center
      background #F7F8FA
      border-radius 15px
      i 
        margin-left .05rem
      input 
        flex 1
        height 20px
        display block
        border none
        color #666
        font-size .12rem
        margin-left .05rem
        background #F7F8FA !important
        
        
    
</style>
