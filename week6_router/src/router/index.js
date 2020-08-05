import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import('../views/Index.vue'),  
    children:[
      {
        path: "",
        component: () => import('../views/Home.vue'),  
      },
      {
        path: 'products',
        component: () => import('../views/Products.vue'),  
      },
      {
        path: 'product/:id',
        component: ()=> import('../views/Product.vue')

      },
      {
        path: 'cart',
        component: ()=> import("../views/Cart.vue")
      },
      {
        path: 'cart/checkout',
        component: ()=> import("../views/Checkout.vue")
      },
      {
        path: "about",
        component: ()=> import("../views/About.vue")
      },
    ]
  },
  {
    path: "/login",
    component: () => import('../views/Login.vue'),  
  }, 
  {
    path: '/admin',
    component: () => import('../views/dashboard/Home.vue'),
    children:[
      {
        path: "products",
        component: () => import('../views/dashboard/Products.vue'),
      },
      {
        path: "coupons",
        component: () => import('../views/dashboard/Coupons.vue'),
      },
      {
        path: 'order',
        component: ()=> import("../views/dashboard/Order.vue")
      },
      {
        path: 'image',
        component: ()=> import("../views/dashboard/Image.vue")
      },

    ]
  },
];

const router = new VueRouter({
  routes
});

export default router;
