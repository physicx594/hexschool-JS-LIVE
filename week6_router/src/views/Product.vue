<template>
  <div>
    <h1>單一產品頁面</h1>
    <div>{{product.title}}</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      product:{}
    }
  },
  created() {
    const id = this.$route.params.id
    const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/product/${id}`;
      this.axios.get(url)
        .then(res => {
        this.product = res.data.data;
      });

    console.log(this.$route.params.id)
  }
}
</script>

<style>

</style>