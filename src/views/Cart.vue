<template>
<div>
   <section style="margin: 30px 30px;text-align: center;">
    <ul class="list-group">
        <li class="list-group-item">Check your items here</li>
    </ul>
</section>
    <!-- items view -->
    <section class="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Items</th>
              <th scope="col">Name</th>
              <th scope="col">price</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody v-for="(item,index) in cart" :key="index">
            <tr>
              <th scope="row">{{index + 1}}</th>
              <td><img :src="item.image1" alt="image" style="width:50px;"></td>
              <td>{{item.name}}</td>
              <td>{{item.price}}৳</td>
              <td>1</td>
            </tr>
          </tbody>
          <tr>
             <th scope="row">#</th>
              <td><b>Total-price</b></td>
              <td></td>
              <td>{{totalPrice}}৳</td>
              <td></td>
            </tr>
        </table>
    </section>
    <div style="text-align:center">
        <button class="btn"><router-link to="/Checkout" class="btn btn-success">Checking</router-link></button>
    </div>

</div>
</template>

<script>
import mitt from 'mitt'
const emitter = mitt()
export default {
  data(){
    return{
      cart:[],
      totalprice:0,
    }
  },
  mounted(){
    if(localStorage.getItem('cart')){
      this.cart = JSON.parse(localStorage.getItem('cart'))
    }

    emitter.on('fun',function(data){
      console.log(data)
    })
    console.log(emitter)
  },
  computed:{
    totalPrice(){
     this.cart.forEach(data=>{
      var price = parseFloat(data.price)
      this.totalprice = this.totalprice + price
    })
     return this.totalprice;
    }
  },


}
</script>