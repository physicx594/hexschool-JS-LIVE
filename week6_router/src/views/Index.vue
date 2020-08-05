<template>
  <div class="Index">
    <div id="nav">
      <router-link to="/">前台首頁</router-link> |
      <router-link to="/products">產品列表</router-link> |
      <router-link to="/cart">購物車</router-link> |
      <router-link to="/about">關於我們</router-link> |
      <router-link to="/admin">後台</router-link> 
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      isLoading: false,
      fullPage: true,
    };
  },

  created() {
    this.isLoading = true
    setTimeout(()=>{
    this.isLoading = false
    },1000)
  },
};
</script>
