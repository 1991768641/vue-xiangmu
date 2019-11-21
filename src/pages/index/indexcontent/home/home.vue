<template>
  <div class="home_box">
    <homenav></homenav>
  </div>
</template>

<script>
import homenav from './nav.vue'
export default {
  components:{
    homenav
  }
}

</script>
<style lang='stylus' scoped>
  .home_box
    height 100%
</style>
