<template>
    <div class="guess-you-like">
      <img src="http://m.egu365.com/img/guess_you_like.jpg" alt="">
     
        <gulitem></gulitem>
      
    </div>

</template>

<script>
import gulitem from './gul-item.vue'
export default {
  data () {
    return {
    }
  },
  components:{
    gulitem
  }
}

</script>
<style lang='stylus' scoped>
.guess-you-like
  width 100%
  max-width: 100%;
  background-color: #fefbfb;
  img 
    max-width: 100%;
    vertical-align: middle;
  


</style>
