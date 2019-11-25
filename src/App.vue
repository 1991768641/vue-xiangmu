<template>
    <router-view @getdata="getdata"></router-view>
</template>

<script>
import store from 'store';
export default {

  data () {
    return {
      message:''
    }
  },
  methods: {
   getdata(msg){
     this.message=msg;
     console.log(this.message);
   }
  }
}

</script>
<style lang='' scoped>
</style>
