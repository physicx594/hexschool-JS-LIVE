export default {
  template: `
        <!-- Cart Modal -->
  <div>
    <div class="modal fade" id="cart" tabindex="-1" role="dialog" aria-labelledby="exampleModal3Label" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header border-bottom-0">
            <h5 class="modal-title" id="exampleModal3Label">購物車</h5>
            <button type="button" class="btn btn-outline-danger text-right" @click="deleteAllCart">清空購物車</button>
          </div>
          <div class="modal-body p-0">
            <table class="table mb-0">
              <thead class="table">
                <tr scope="row">
                  <th width="10%"></th>
                  <th width="40%">品名</th>
                  <th width="35%">數量</th>
                  <th width="15%">單價</th>
                </tr>
              </thead>
              <tbody>
                <tr scope="row" v-for="(item, index) in tempProduct" :key="index">
                  <td><button type="button" class="btn btn-outline-danger" @click="deleteItem(item.product.id)"><i class="far fa-trash-alt fa-1x"></i></button>
                  </td>
                  <td>{{item.product.title}}</td>
                  <td>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <button type="button" class="btn btn-outline-dark"  @click="item.quantity--;changeQuantity(item)" 
                        :disabled="item.quantity === 1 || cart.loading === true">-</button>
                      </div>
                      <input type="text" class="form-control col-4 quantity text-center" min="1"  v-model="item.quantity" @change="changeQuantity(item)">
                      <div class="input-group-append">
                        <button type="button" class="btn btn-outline-dark" @click="item.quantity+=1;changeQuantity(item)" :disabled="cart.loading === true">+</button>
                      </div>  
                    </div>
                  </td>
                  <td v-if="!item.product.price">{{item.product.origin_price | filter}}</td>
                  <td v-else>{{item.product.price | filter}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer justify-content-end py-1 px-3">
            <td>總計:</td>
            <td class=" text-danger font-weight-bolder" v-if="cart.loading === false">{{cart.totalPrice | filter}}</td>
            <td class="spinner-border spinner-border-sm text-danger" v-else ></td>
          </div>
          <div class="text-center p-1"><button type="button" class="btn btn-dark Checkout" @click="Checkout">前往結帳</button></div>
        </div>
      </div>
    </div>

    <!-- Order Modal -->
    <div class="modal fade" id="orderModal" tabindex="-1" role="dialog" aria-labelledby="exampleModal3Label" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title col-12 text-center" >訂購人資料</h5>
          </div>
          <Validation-Observer  v-slot="{ invalid }">
            <div class="modal-body px-5">
              <form>
                <div class="form-row">
                  <div class="form-group col">
                    <Validation-Provider rules="required" v-slot="{ errors, classes }">
                      <label for="name">姓名</label>
                      <input type="text" class="form-control" id="name" name="姓名" placeholder="請輸入姓名" v-model="form.name" :class="classes">
                      <span class="invalid-feedback">{{ errors[0] }}</span>
                    </Validation-Provider>
                  </div>
                  <div class="form-group col">
                    <Validation-Provider rules="required|min:10" v-slot="{ errors, classes }">
                      <label for="tel">電話</label>
                      <input type="tel" class="form-control" id="tel" name="電話" placeholder="請輸入電話" v-model="form.tel" :class="classes">
                      <span class="invalid-feedback">{{ errors[0] }}</span>
                    </Validation-Provider>  
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col">
                    <Validation-Provider rules="required|email" v-slot="{ errors, classes }">
                      <label for="email">電子信箱</label>
                      <input type="email" class="form-control" id="email" name='電子信箱' placeholder="請輸入信箱" v-model="form.email" :class="classes">
                      <span class="invalid-feedback">{{ errors[0] }}</span>
                    </Validation-Provider>
                  </div>
                  <div class="form-group col">
                    <label for="payment">付款方式</label>
                    <select  v-model="form.payment" id="payment" class="form-control" required>
                      <option  disabled selected>
                        請選擇付款方式
                      </option>
                      <option value="WebATM">
                        WebATM
                      </option>
                      <option value="ATM">
                        ATM
                      </option>
                      <option value="CVS">
                        CVS
                      </option>
                      <option value="Barcode">
                        Barcode
                      </option>
                      <option value="Credit">
                        Credit
                      </option>
                      <option value="ApplePay">
                        ApplePay
                      </option>
                      <option value="GooglePay">
                        GooglePay
                      </option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <Validation-Provider rules="required" v-slot="{ errors, classes }">
                    <label for="address">地址</label>
                    <input type="text" class="form-control" id="address" name="地址" placeholder="請輸入地址" v-model="form.address" :class="classes">
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                  </Validation-Provider>
                </div>
                <div class="form-group">
                  <label for="message">備註</label>
                  <textarea  class="form-control" id="message" v-model="form.message"></textarea>
                </div>
              </form>
            </div>
            <div class="text-center p-1">
              <button class="btn btn-dark Checkout" @click="addOrder" :disabled="invalid">送出訂單</button>
            </div>
          </Validation-Observer>
        </div>
      </div>
    </div>
    <!-- Message Modal -->

    <div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog"
        aria-labelledby="mySmallModalLabel" aria-hidden="true" id="messageModal">
        <div class="modal-dialog modal-sm ">
            <div class="modal-content p-3 ">
                <span  style="lineHeight: 16px" class="text-center">
                  <i class="spinner-grow spinner-grow-sm text-success"></i>
                    已清空購物車
                </span>
            </div>
        </div>
    </div>
  </div>`,
  props: ["user"],
  data() {
    return {
      form: {
        name: "",
        email: "",
        tel: "",
        address: "",
        payment: "",
        message: "",
      },
      tempProduct: {},
      cart:{
        totalPrice: 0,
        loading: false,
      }
    };
  },
  methods: {
    getCart() {
      const api = `${this.user.apiPath}${this.user.uuid}/ec/shopping`;
      axios.get(api)
      .then((res) => {
        this.tempProduct = res.data.data;
        this.updateTotal()
        this.cart.loading = false
        $("#cart").modal("show");
      });
    },
    updateTotal(){
      this.cart.totalPrice = 0;
      this.tempProduct.forEach((item) => {
        this.cart.totalPrice += Number(
          item.product.price * item.quantity ||
            item.product.origin_price * item.quantity
        );
      });
    },
    changeQuantity(item) {
      this.cart.loading = true
      const api = `${this.user.apiPath}${this.user.uuid}/ec/shopping`;
      const cart = {
        product: item.product.id,
        quantity: item.quantity,
      };
      axios.patch(api, cart)
        .then((res) => {
          this.getCart();
        })
    },
    deleteItem(item){
      const api = `${this.user.apiPath}${this.user.uuid}/ec/shopping/${item}`;
      axios.delete(api)
      .then((res) => {
        this.getCart();
      });
    },
    deleteAllCart() {
      const api = `${this.user.apiPath}${this.user.uuid}/ec/shopping/all/product`;
      axios.delete(api)
      .then((res) => {
        $("#cart").modal("hide");
        $("#messageModal").modal("show");
        setTimeout(()=>{
          $("#messageModal").modal("hide");
        },1000)
      });
    },
    Checkout() {
      $("#cart").modal("hide");
      setTimeout(() => {
        $("#orderModal").modal("show");
      }, 1000);
    },
    addOrder(){
      console.log('已送出訂單')
    }
  },
};
