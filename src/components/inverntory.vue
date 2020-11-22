<template>
    
<div class="row container" >
   <div v-for="(item,index) in items" :key="index" class="card" style="width: 18rem;">
    <img :src="item.photo" class="card-img-top" alt="produnts_pic">
    <div class="card-body">
      <h5 class="card-title">{{item.title}}</h5>
      <p class="card-text">{{item.price}}</p>
      <a @click="addtocart(item)" class="btn btn-success">add to cart</a>
    </div>
    </div>
 </div> 
</template>
<style>
    .container{
        margin-left: 25px;
    }
    .card{
        margin: 5px;
        border: 2px solid
    }

</style>

<script>

export default{
    props:['items'],
    methods:{
        addtocart(item){
            this.$emit('newitemadded',item)
    
            }
    
    
        }
    }

</script>