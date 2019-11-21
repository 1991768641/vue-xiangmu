<template>
 <div class="box">我是详情页
     <div class="box1">123</div>
     <div class="box2">456</div>
     <button @click="handleclick">回退</button>
     <div class="box3">789</div>
 </div>
</template>

<script>
import store from 'store';
export default {
  props:{
    bscroll:Object
  },

  data () {
    return {
    }
  },
  methods: {
    handleclick(){
      let pos=document.body.scrollTop||document.documentElement.scrollTop
      // console.log(this.$router.query.scrolly)
      this.$router.push({path:'/index/home/home0',query:{pos}})
    }
  }
}

</script>
<style lang='stylus' scoped>
.box
    width 100%
    height 2000px
    .box1
      width 100%
      height 600px
      background #f00
    .box2
      width 100%
      height 300px
      background #0f0
    .box3
      width 100%
      height 900px
      background #00f
</style>
