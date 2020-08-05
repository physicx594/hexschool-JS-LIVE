<template>
  <div>
    <h1>產品列表</h1>

    <table>
      <tr>
        <th>名稱</th>
        <th>價格</th>
        <th></th>
      </tr>
      <tr v-for="(item, index) in products" :key="index">
        <td>{{item.title}}</td>
        <td>{{item.price || item.origin_price}}</td>
        <td><router-link :to="`/product/${item.id}`">詳細資料</router-link></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: []
    };
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products`;
      this.axios.get(url).then(res => {
        this.products = res.data.data;
        console.log(res);
      });
    }
  },
  created() {
    this.getProducts();
  }
};
</script>
<style lang="scss">
table {
  tr {
    td {
      text-align: left;
    }
  }
}
</style>