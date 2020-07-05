<div id="app">
  <img :src="imgUrl" :alt="imgAlt">
  
  <div :class="{river:isChecked}">這裡有一條河</div>
  <label><input type="checkbox" v-model="isChecked">真心鎮的警察是否靠近 {{ isChecked }}</label>
</div>

new Vue({
  el: '#app',
  data: {
    imgUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
    imgAlt: '這是海洋',
    
    isChecked: false
  }
})