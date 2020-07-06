var app = new Vue({
  el: "#app",
  data: {
    isReverse: false,
    sortType: "",
    products: [
      {
        id: 1586934917210,
        unit: "門",
        category: "課程",
        title: "傳統硬舉",
        origin_price: 21700,
        price: 8880,
        description: "健力三項",
        content: "手把手帶你訓練，三人及滿團",
        is_enabled: true,
        imageUrl:
          "https://images.unsplash.com/photo-1582443242920-f6dd3b476827?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        options: {
          currentNumber: 2,
          maxNumber: 3,
          coupon: true,
        },
      },
      {
        id: 1196934915910,
        unit: "門",
        category: "講座",
        title: "健身怎麼吃?",
        origin_price: "2000",
        description: "好的飲食吃出好的身材",
        content: "增肌減脂看過來",
        price: 555,
        is_enabled: true,
        imageUrl:
          "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        options: {
          currentNumber: 15,
          maxNumber: 30,
          coupon: false,
        },
      },
      {
        id: 1196134917910,
        unit: "門",
        category: "課程",
        title: "基礎啞鈴",
        origin_price: "4600",
        description: "觀念、動作的專業教學",
        content: "上肢訓練",
        price: 999,
        is_enabled: false,
        imageUrl:
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        options: {
          currentNumber: 0,
          maxNumber: 10,
          coupon: true,
        },
      },
      {
        id: 1296934917910,
        unit: "團體",
        category: "課程",
        title: "肌耐力養成",
        origin_price: "5555",
        description: "觀念、動作的專業教學",
        content: "新手入門好選擇",
        price: 1111,
        is_enabled: true,
        imageUrl:
          "https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        options: {
          currentNumber: 12,
          maxNumber: 20,
          coupon: true,
        },
      },
      {
        id: 1196933917910,
        unit: "門",
        category: "講座",
        title: "素食及純素食者如何增肌？",
        origin_price: "2333",
        description: "觀念、動作的專業教學",
        content: "不吃肉也可以增肌",
        price: 1111,
        is_enabled: true,
        imageUrl:
          "https://images.unsplash.com/photo-1540914124281-342587941389?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
        options: {
          currentNumber: 5,
          maxNumber: 10,
          coupon: false,
        },
      },
    ],
    tempProduct: {
      options: {
      },
    },
  },
  methods: {
    openModal(type, item) {
      switch (type) {
        case "add":
          $("#productModal").modal("show");
          this.tempProduct = {
            options: {
              currentNumber: 0,
              maxNumber: 0,
              coupon: '請選擇',
            },
          };
          break;
        case "edit":
          $("#productModal").modal("show");
          this.tempProduct = Object.assign({}, item);
          break;
        case "delete":
          $("#deleteModal").modal("show");
          this.tempProduct = Object.assign({}, item);
      }
    },
    updateItem() {
      if (this.tempProduct.id) {
        this.products.forEach((item, index) => {
          if (item.id === this.tempProduct.id)
          this.products[index] = this.tempProduct;
        });
      } else {
        this.tempProduct.id = new Date().getTime();
        this.products.push(this.tempProduct);

      }
      $("#productModal").modal("hide");
      this.tempProduct = {
        options: {
        },
      };
    },
    deleteItem() {
      if (this.tempProduct.id) {
        this.products.forEach((item, index) => {
          if (item.id === this.tempProduct.id) this.products.splice(index, 1);
        });
      }
      $("#deleteModal").modal("hide");
    },
    //開關
    state(type,stateItem){
      switch(type){
        case 'enabled':
          this.products.forEach((item)=>{
            if(item.id === stateItem.id){
              item.is_enabled = !item.is_enabled
            }
          })
        break;
        case 'coupon':
          this.products.forEach((item)=>{
            if(item.id === stateItem.id){
              item.options.coupon = !item.options.coupon
            }
          })
        break;
      }
    }
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

