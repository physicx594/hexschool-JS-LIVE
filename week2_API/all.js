var obj = {
  data: {
    uuid: "959cce3f-fa83-4b05-98f8-f72861d9cdc1",
    products: [],
  },
  getData: function () {
    var vm = this;
    var url = `https://course-ec-api.hexschool.io/api/${this.data.uuid}/ec/products`;

    axios.get(url).then(function (response) {
      console.log(response);
      vm.data.products = response.data.data;
      vm.render();
    });
  },
  render: function () {
    var productList = document.querySelector(".productList");
    var products = this.data.products;
    var str = "";
    products.forEach(function (item) {
      str += `
  <div class="card">
  <div class="card_img">
      <figure><img src="${item.imageUrl[0]}"></figure>
  </div>
  <div class="card_body"> 
     <div class="title">${item.title}</div>
     <p class="description">${item.content}</p>
      <div >$ <span class="price">${item.price}</span> </div> 
      <input type="button" value="Add to cart"></input>
  </div>
</div>
`;
    });
    productList.innerHTML = str;
  },
};

obj.getData();
