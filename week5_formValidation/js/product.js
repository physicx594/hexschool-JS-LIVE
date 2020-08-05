export default{
    template:`
    <!-- Modal -->
    <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header ">
            <h5 class="modal-title col-12 text-center" id="exampleModalLabel">{{tempProduct.title}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
                <div class="mb-1 text-center"><img :src="tempProduct.imageUrl"  class="img-fluid "></div>
            <div class="d-flex flex-column">
                <div>
                    <h5 class="text-right"><span class="category badge badge-pill badge-secondary text-white">{{tempProduct.category}}</span></h5>
                    <div class="mb-1">{{tempProduct.content}}</div>
                    <div class="">{{tempProduct.description}}</div>
                </div>
                <div class="money text-right">
                    <div class="price text-danger" v-if="tempProduct.origin_price">{{tempProduct.price||tempProduct.origin_price | filter}}</div>
                </div>
            </div>
          </div>
          <div class="modal-footer row">
            <div class="input-group col-5">
                <button type="button" class="btn btn-outline-dark" @click="tempProduct.quantity--" :disabled="tempProduct.quantity == 1" min='1'>-</button>
                <input type="text" class="form-control col-6 quantity text-center"  v-model="tempProduct.quantity">
                <button type="button" class="btn btn-outline-dark" @click="tempProduct.quantity++" >+</button>  
            </div>
            <div class="col-6 justify-content-end d-flex">
                <button type="button" class="btn favorites ">收藏</button>
                <button type="button" class="btn btn-dark" @click="addToCart(tempProduct)">加入購物車</button>
            </div>
          </div>
        </div>
      </div>
    </div>`,
    props:['user'],
    data(){
        return{
            tempProduct:{},
        }
    },
    methods: {
        getProduct(id){
            const api = `${this.user.apiPath}${this.user.uuid}/ec/product/${id}`;
            axios.get(api)
            .then(res=>{
                this.tempProduct = {
                    ...res.data.data,
                    quantity:1
                }
                $('#productModal').modal('show')
                this.$bus.$emit('productStatus')
            })
        },
        addToCart(item){
            this.$bus.$emit('productDetailAddToCart', item)
        }
    },
    created() {
        this.$bus.$on('productDetail', (item)=>{
            this.getProduct(item.id)
        })
    },
}