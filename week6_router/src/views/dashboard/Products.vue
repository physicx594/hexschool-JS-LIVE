<template>
  <div>
    <h1>產品列表</h1>
  </div>
</template>

<script>
export default {
  props:['token'],
  data() {
    return {
      products:[]
    }
  },
  created(){
    const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/products`
    this.axios.get(api)
    .then(res=>{
      this.products = res.data.data
    })
  },
}
</script>

<style>

</style>