<template>
  <div>
      <button @click="handleclick">回退</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
      handleclick(){
          this.$router.push('/details?pos='+this.$route.query.pos)
      }
  }
}

</script>
<style lang='stylus' scoped>
</style>
