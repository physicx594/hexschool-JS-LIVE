export default {
  template: `      
    <div class="modal fade" tabindex="-1" role="dialog" id="deleteModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header bg-danger text-white">
                    <h5 class="modal-title">刪除產品</h5>
                        <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                </div>
                <div class="modal-body">
                    <p>是否刪除 <span class="font-weight-bold text-danger">{{tempProduct.title}}</span> 這個商品</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-dark" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-danger" @click="deleteItem">確認</button>
                </div>
            </div>
        </div>
    </div>`,
  props: ["tempProduct", "user"],
  data() {
    return {};
  },
  methods: {
    deleteItem() {
      const api = `${this.user.apiPath}${this.user.uuid}/admin/ec/product/${this.tempProduct.id}`;
      axios
        .delete(api, this.tempProduct)
        .then((res) => {
          this.$emit("update");
          $("#deleteModal").modal("hide");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
