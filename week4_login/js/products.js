export default {
    template: `        
      <div class="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myHugeModalLabel"
      aria-hidden="true" id="productModal"> 
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header bg-dark text-white">
              <h5 class="modal-title " id="exampleModalCenteredLabel" v-if="type=='add'">新增產品</h5>
              <h5 class="modal-title " id="exampleModalCenteredLabel" v-else>編輯產品</h5>
              <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-4">
                    <div class="form-group mb-0" v-for="(i, index) in 3" :key="index">
                      <label :for="'imageUrl'+[i-1]">圖片網址</label>
                      <input type="text" class="form-control " :id="'imageUrl'+[i-1]" placeholder="請輸入圖片網址" v-model="tempProduct.imageUrl[i-1]">
                    </div>
                    <div class="form-group">
                      <label for="customFile">
                        或 上傳圖片
                      </label>
                      <input id="customFile"  type="file" class="form-control" @change="uploadFile">
                    </div>
                    <img class="img-fluid" :src="tempProduct.imageUrl[0]" hight='100'/>
                </div>
                <div class="col-8">
                    <div class="form-group">
                      <label for="title">標題</label>
                      <input  type="text" class="form-control" id="title" placeholder="請輸入標題" v-model="tempProduct.title">
                    </div>
                  <div class="row">
                    <div class="form-group col">                    
                      <label for="category">分類</label>
                      <input type="text" id="category" class="form-control"  placeholder="請輸入分類" v-model="tempProduct.category">
                    </div>
                    <div class="form-group col">
                      <label for="unit">單位</label>
                      <input type="text" id="unit" class="form-control"  placeholder="請輸入單位" v-model="tempProduct.unit">
                    </div>
                    <div class="form-group col">
                      <label for="quantity">數量</label>
                      <input type="number" class="form-control" id="quantity" placeholder="請輸入數量" value=0 v-model="tempProduct.options.quantity" v-if="tempProduct.options">
                    </div>
                  </div>
                  <div class="row">
                    <div class="form-group col-4">                    
                      <label for="origin_price">原價</label>
                      <input type="number" id="origin_price" class="form-control"  placeholder="請輸入原價" v-model="tempProduct.origin_price">
                    </div>
                    <div class="form-group col">
                      <label for="price">售價</label>
                      <input type="number" id="price" class="form-control"  placeholder="請輸入售價" v-model="tempProduct.price">
                    </div>
                    <div class="form-group col">
                      <label for="coupon" >可用優惠券</label>
                        <select class="custom-select" v-model="tempProduct.options.coupon" v-if="tempProduct.options">
                        <option selected value="請選擇" disabled>請選擇</option>
                        <option  :value= true>Yes</option>
                        <option  :value= false>No</option>
                      </select>
                    </div>
                  </div>
                  <div class="row">
                    <div class="form-group col">
                      <label for="description">產品描述</label>
                      <textarea id="description"  class="form-control" placeholder="請輸入產品描述" v-model="tempProduct.description"></textarea>
                    </div>
                    <div class="form-group col">
                      <label for="content">說明內容</label>
                      <textarea id="content"  type="text" class="form-control"
                        placeholder="請輸入說明內容" v-model="tempProduct.content">
                      </textarea>
                    </div>
                  </div>
                    <div class="form-group">
                      <input type="checkbox" id="enabled" v-model="tempProduct.enabled">
                      <label for="enabled">是否上架
                      </label>
                    </div>
                  </div>
                </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-dark" data-dismiss="modal">取消</button>
              <button type="button" class="btn btn-success" @click="updateProduct">確認</button>
            </div>
          </div>
        </div>
        <loading :active.sync="isLoading"></loading>
      </div>`,
    props: ["user","tempProduct"],
    data(){
      return{
        type:{},
        isLoading: false
      }
    },
    components: {
      'loading': VueLoading
    },
    methods: {
      updateProduct() {
        this.isLoading = true
        //新增
        let api = `${this.user.apiPath}${this.user.uuid}/admin/ec/product`;
        let httpMethod = "post";
        //編輯
        if (this.type == "edit") {
          api = `${this.user.apiPath}${this.user.uuid}/admin/ec/product/${this.tempProduct.id}`;
          httpMethod = "patch";
        }
        axios[httpMethod](api, this.tempProduct)
          .then(() => {
            this.isLoading = false
            this.$emit("update");
            $("#productModal").modal("hide");
          })
          .catch((error) => {
            console.log(error);
          });
      },
      uploadFile() {
        // 選取 DOM 中的檔案資訊
        const uploadedFile = document.querySelector("#customFile").files[0];
        // 轉成 Form Data
        const formData = new FormData();
        formData.append("file", uploadedFile);
  
        // 路由、驗證
        const url = `${this.user.apiPath}${this.user.uuid}/admin/storage`;
        axios.defaults.headers.common.Authorization = `Bearer ${this.user.token}`;
  
        // 請自行完成 Ajax 範例
        axios
          .post(url, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            console.log(res);
            if (res.status === 200) {
              this.tempProduct.imageUrl.push(res.data.data.path);
            }
          })
          .catch((error) => {
            console.log(error);
            console.log("上傳不可超過 2 MB");
          });
      },
    },
}