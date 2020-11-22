<template>
<section class="container">
<div class="row">
    <div class="col">
        <div class="card" style="width:20rem;">
          <img :src="image" class="card-img-top">
          <button class="btn btn-small btn-info m-auto" @click="change()">change</button>
          <div class="card-body">
            <h5 class="card-title">{{products.name}}</h5>
            <p class="card-text">Price-<b>{{products.price}}৳</b></p>
            <h4>Description</h4>
            <p class="card-text">{{products.description}}</p>
            <form v-show="itemsincart" @submit.prevent="addtocart(products)">
               <button class="btn btn-success">{{added}}</button> 
            </form>
            <p v-show="!itemsincart" class="badge badge-danger">Item already added</p>
          </div>
        </div>
    </div>
</div>
</section>
</template>

<style scoped>
    section{
        margin-top: 20px;
        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        flex-direction: column;
    }
    .row{
        position:absolute;
        text-align: center;

    }
    .btn-small{
        border: 2px solid white;
        width: 67px;
        font-size: 10px;

    }
</style>

<script>
import axios from 'axios'

export default{
  data(){
    return {
        id:this.$route.params.id,
        products:[],
        image:'',
        condition:true,
        cart:[],
        added:null,
        itemsincart:true,
        cart_length:null,

    }
  },
  mounted(){
  // get cart from localstorage
    if(localStorage.getItem('cart')){
        this.cart = JSON.parse(localStorage.getItem('cart'))
    }

 axios.get('https://my-ecommerce-1f046.firebaseio.com/products/'+this.id+'.json').then(data=>{
    this.products = data.data
    this.image = this.products.image1
    this.added = "Add to cart"
    this.cart.forEach(data=>{
        if(data.image1 == this.products.image1){
            this.itemsincart = false
        }
    })
 })
  },
  methods:{
    change(){
        this.condition = !this.condition
        if(this.condition){
            this.image = this.products.image1
        }
        else{
            this.image = this.products.image2 
        }
    },
    addtocart(products){
        this.cart.push(products)
        this.itemsincart = false
        this.savecart();
        if(this.cart){
            this.cart_length = this.cart.length
        }

    },
    // save cart to localstorage
    savecart(){
        var cart_parsed = JSON.stringify(this.cart)
        localStorage.setItem('cart',cart_parsed)
    }

  }
}
</script>






