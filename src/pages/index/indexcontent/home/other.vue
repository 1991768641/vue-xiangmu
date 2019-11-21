<template>
  <hot v-if="navindex==0"></hot>
  <publicon :pubid="this.routerid" :pubindex="this.routerindex" v-else></publicon>
</template>

<script>
import publicon from 'components/home/publicon.vue';
import hot from 'components/home/hot.vue';

export default {
  props:['routerid','routerindex','routerimg','navindex'],
  components:{
    publicon,
    hot
  }
};

</script>
<style lang='stylus' scoped>
</style>
