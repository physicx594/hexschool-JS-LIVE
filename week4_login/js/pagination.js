export default{
    template:`
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item" :class="{disabled:pages.current_page === 1}" >
                <a 
                    class="page-link" 
                    href="#" 
                    @click.prevent="pageNum(pages.current_page -1)">
                        Previous
                </a>
            </li>
            <li class="page-item" v-for="(item, index) in pages.total_pages" :key="index" :class="{active: pages.current_page === item}">
                <a 
                    class="page-link"
                    @click.prevent="pageNum(item)" 
                    href="#">
                        {{item}}
                </a>
            </li>
            <li class="page-item"  :class="{disabled:pages.current_page === pages.total_pages}">
                <a 
                    class="page-link" 
                    href="#" 
                    @click.prevent="pageNum(pages.current_page +1)">
                        Next
                </a>
            </li>
        </ul>
    </nav>`,
    props:['pages'],
    methods: {
        pageNum(item){
            this.$emit('update', item)
            console.log(this.pages)
        }
    },
}