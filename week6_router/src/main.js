import Vue from "vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import axios from "axios";
import VueAxios from "vue-axios";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
Vue.component("Loading", Loading);
Vue.use(VueAxios, axios);
// Vue.use(BootstrapVue)

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
