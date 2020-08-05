export default {
    template:`  
    <div class="productList col-9 p-0">
        <div class="card" v-for="(item, index) in products" :key="index">
            <div class="card_img">
                <figure><img  :src="item.imageUrl[0]"></figure>
            </div>
            <div class="card_body">
                <div class="description text-left">
                    <h6 class="card-subtitle">{{item.category}}</h6>
                    <h5 class="title card-title">{{item.title}}</h5>
                </div>
                <div class="money text-right">
                <div v-if="!item.price">
                    <div style=" visibility:hidden">0</div>
                    <div class="origin_price text-decoration-none text-danger"><h5>{{item.origin_price | filter}}</h5></div>
                    </div>
                    <div v-else>
                        <div class="origin_price">{{item.origin_price | filter}}</div>
                        <div class="price"><h5>{{item.price | filter}}</h5></div>
                    </div>  
                </div>
            </div>
            <div class="card-footer">
                <button class="btn detail btn-outline-dark float-left" @click.prevent="openProductModal(item), status=(item.id)" :disabled="status === item.id">詳細資料
                    <span class="spinner-border spinner-border-sm" v-if="status === item.id"></span>
                </button>
                <button href="#" class="btn addCart btn-dark float-right" @click="addToCart(item);status=(item.id)" :disabled="status === item.id">加入購物車
                    <span class="spinner-border spinner-border-sm" v-if="status === item.id"></span>    
                </button>
            </div>
        </div>

        <loading :active.sync="isLoading"></loading>

        <!-- addCart Modal -->
        <div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog"
            aria-labelledby="mySmallModalLabel" aria-hidden="true" id="successCart">
            <div class="modal-dialog modal-sm ">
                <div class="modal-content p-3 ">
                    <span v-if="this.status.cart" style="lineHeight: 16px">
                        <i class="spinner-grow spinner-grow-sm text-danger"></i>
                        {{this.status.cart}}
                    </span>
                    <span v-else style="lineHeight: 16px">
                        <i class="spinner-grow spinner-grow-sm text-success"></i>
                        已加入購物車
                    </span>
                </div>
            </div>
        </div>
    </div>`,
    props:['user'],
    data(){
        return{
            isLoading: false,
            status:{},
            products: [],
        }
    },
    methods: {
        getProducts(){
            const api = `${this.user.apiPath}${this.user.uuid}/ec/products`;
            axios.get(api)
            .then(res=>{
                this.products = res.data.data;
            })
            .catch(res=>{
                console.log(res)
            })
        },
        addToCart(item, quantity=1){
            const api = `${this.user.apiPath}${this.user.uuid}/ec/shopping`;
            const cart = {
                product: item.id,
                quantity
            }
            axios.post(api, cart)
            .then((res) => {
                this.status={}
                $("#productModal").modal("hide");
                $("#successCart").modal('show')
                setTimeout(()=>{
                $("#successCart").modal('hide')
                },1000)
                this.getProducts()
            })
            .catch(error => {
                this.status={}
                this.status.cart = error.response.data.errors[0]
                $("#productModal").modal("hide");
                $("#successCart").modal('show')
                setTimeout(()=>{
                    $("#successCart").modal('hide')
                },1000)
            });
        },
        openProductModal(item){
            this.$bus.$emit('productDetail', item)
        }
    },
    created() {
        this.getProducts()
        this.$bus.$on('productDetailAddToCart', (item)=>{
            this.addToCart(item, item.quantity)
        })
        this.$bus.$on('productStatus', (item)=>{
            this.status={}
        })
    },
}