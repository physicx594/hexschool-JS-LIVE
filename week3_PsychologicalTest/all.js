var app = new Vue({
  el: "#App",
  data:{
      product:[]
  },
  methods: {
    render() {
      axios
        .get(
          "https://raw.githubusercontent.com/hexschool/js-training-task/master/api/BigFive.json"
        )
        .then((res) => {
          console.log(res);
          let data = res.data.problemList;
          this.product.push(data)
          console.log(this.product);
        });
    },
  },
});
app.render();
