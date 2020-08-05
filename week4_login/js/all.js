import pagination from "./pagination.js";
import products from "./products.js";
import deleteItem from "./deleteItem.js";

Vue.component("pagination", pagination);
Vue.component("products", products);
Vue.component("deleteItem", deleteItem);
Vue.filter("money", (num) => {
  var parts = num.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return "$" + parts.join(".");
});
var app = new Vue({
  el: "#app",
  data: {
    isReverse: false,
    sortType: "",
    products: [],
    pagination: {},
    tempProduct: {
      enabled: true,
      imageUrl: [],
      options: {},
    },
    user: {
      token: "",
      uuid: "959cce3f-fa83-4b05-98f8-f72861d9cdc1",
      apiPath: "https://course-ec-api.hexschool.io/api/",
    },
  },
  created() {
    this.user.token = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    axios.defaults.headers.common.Authorization = `Bearer ${this.user.token}`;

    if (this.user.token === "") {
      window.location = "login.html";
    }
    this.getProducts();
  },
  methods: {
    getProducts(page = 1) {
      const api = `${this.user.apiPath}${this.user.uuid}/admin/ec/products?page=${page}`;
      axios.get(api).then((res) => {
        console.log(res);
        this.products = res.data.data;
        this.pagination = res.data.meta.pagination;
      });
    },
    openModal(type, item) {
      switch (type) {
        case "add":
          this.$refs.products.type = "add";
          this.tempProduct = {
            enabled: true,
            imageUrl: [],
            options: {
              currentNumber: 0,
              coupon: false,
            },
          };
          $("#productModal").modal("show");
          break;
        case "edit":
          this.$refs.products.type = "edit";
          const api = `${this.user.apiPath}${this.user.uuid}/admin/ec/product/${item.id}`;
          axios
            .get(api)
            .then((res) => {
              this.tempProduct = res.data.data;
              $("#productModal").modal("show");
            })
            .catch((error) => {
              console.log(error);
            });
          break;
        case "delete":
          $("#deleteModal").modal("show");
          this.tempProduct = Object.assign({}, item);
          break;
        default:
          break;
      }
    },
    signout() {
      document.cookie = `token=; expires=; path=/`;
      setTimeout(() => {
        window.location = "login.html";
      }, 1000);
    },
    //開關
    state(type, stateItem) {
      switch (type) {
        case "enabled":
          this.products.forEach((item) => {
            if (item.id === stateItem.id) {
              this.tempProduct = stateItem;
              this.tempProduct.enabled = !this.tempProduct.enabled;
            }
          });
          break;
        case "coupon":
          this.products.forEach((item) => {
            if (item.id === stateItem.id) {
              this.tempProduct = stateItem;
              this.tempProduct.options.coupon = !this.tempProduct.options
                .coupon;
            }
          });
          break;
      }
      let api = `${this.user.apiPath}${this.user.uuid}/admin/ec/product/${this.tempProduct.id}`;
      axios
        .patch(api, this.tempProduct)
        .then(() => {
          this.getProducts();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  // 排序
  computed: {
    sortData() {
      return this.products.sort((a, b) => {
        a = a[this.sortType];
        b = b[this.sortType];
        if (this.isReverse) {
          return a - b;
        } else {
          return b - a;
        }
      });
    },
  },
});
