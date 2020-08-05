<template>
  <div>
    <div v-if="!isLoading">
      <h1>後台管理頁面</h1>
        <div id="nav">
            <router-link to="/admin">首頁</router-link> |
            <router-link to="/admin/products">產品</router-link> |
            <router-link to="/admin/coupons">優惠券</router-link> |
            <router-link to="/admin/order">訂單</router-link> |
            <router-link to="/admin/image">圖片儲存</router-link> | 
            <router-link to="/">回前台</router-link> |
            <a href="" @click.prevent="signOut">登出</a>
        </div>
        <router-view :token="token"  v-if="checkSuccess"/>
    </div>
    <loading :active.sync="isLoading"></loading>
  </div>
</template>

<script>
export default {
  data(){
    return{
      token:'',
      checkSuccess: false,
      isLoading: false
    }
  },
  created() {
    this.isLoading = true
    this.checkLogin()
  },
  methods: {
    checkLogin(){
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
      this.axios.defaults.headers.common.Authorization = `Bearer ${this.token}`;
      const api = `${process.env.VUE_APP_APIPATH}/auth/check`;
      this.axios.post(api, {
        api_token: this.token
      })
      .then(res=>{
        this.isLoading = false
        this.checkSuccess= true,
        console.log(res)
      })
      .catch(error=>{
        this.$router.push('/login')
        console.log(error)
      })
    },
    signOut(){
      document.cookie = `token=; expires=; path=/`;
      setTimeout(() => {
        this.$router.push('/')
      }, 1000);
    }
  },
}
</script>

<style>

</style>