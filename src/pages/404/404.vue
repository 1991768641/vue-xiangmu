<template>
 <div class="notfind">
   <div class="findword">
     <h1>404 Page</h1>
     <div class="word">页面被吞了</div>
   </div>
   <img src="../../assets/images/404.jpg" alt="">
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}

</script>
<style lang='stylus' scoped>
.notfind
  width 100%
  height 100%
  display flex 
  flex-direction column
  justify-content center
  align-items center
  .findword
    width 100%
    font-size 50px
    h1
      display flex
      justify-content center
      align-items center
      font-size 40px
    .word
      font-size 30px
      display flex
      justify-content center
      align-items center
      margin-top 10%
  img 
    width 100%
    margin-top 20%
</style>
