import products from './products.js'
import product from './product.js'
import cart from './cart.js'
import zh_tw from './zh_tw.js'

Vue.component('products', products)
Vue.component('product', product)
Vue.component('cart', cart)
Vue.component('loading', VueLoading)
Vue.filter("filter", (num) => {
  var parts = num.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return "$" + parts.join(".");
});

Vue.component('ValidationObserver', VeeValidate.ValidationObserver);
Vue.component('ValidationProvider', VeeValidate.ValidationProvider);
VeeValidate.localize('tw', zh_tw);
VeeValidate.configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  }
});
Vue.prototype.$bus = new Vue();
var app = new Vue({
  el: '#app',
  data:{
    user:{
      uuid: "959cce3f-fa83-4b05-98f8-f72861d9cdc1",
      apiPath: "https://course-ec-api.hexschool.io/api/",
    },
  },
  methods: {
    openModal(){
      this.$refs.cart.getCart()
    },
    handleScroll(){
      var scrollTop = document.documentElement.scrollTop
      if(scrollTop >= 345){
        $('.fa-shopping-cart').css("color", "#de9e36");
      }else{
        $('.fa-shopping-cart').css("color", "black");
      }
    },
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
})

  