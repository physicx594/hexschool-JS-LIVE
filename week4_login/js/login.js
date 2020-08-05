// UUID
const uuid = "959cce3f-fa83-4b05-98f8-f72861d9cdc1"; // 請加入個人的 UUID
const apiPath = "https://course-ec-api.hexschool.io/api/";
new Vue({
  el: "#app",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      token: "",
    };
  },
  methods: {
    signin() {
      const api = `${apiPath}auth/login`;
      axios.post(api, this.user)
        .then((res) => {
          const token = res.data.token;
          const expired = res.data.expired;
          document.cookie = `token=${token}; expires=${new Date(expired * 1000)}; path=/`;
          window.location = 'products.html'
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getData() {
      // 取得 token 的 cookies（注意取得的時間點）
      // 詳情請見：https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,"$1");
      const api = `${apiPath}${uuid}/admin/ec/products`;
      // 將 Token 加入到 Headers 內
      axios.defaults.headers.common.Authorization = `Bearer ${this.token}`;
      axios.get(api).then(res => {
        console.log(res);
      });
    },
  },
});
