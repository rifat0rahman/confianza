<template>
<div>
  <ul v-for="(item,index) in items" :key = 'index'>
    <li>Name:{{item.title}}</li>
    <li>price:{{item.price}}</li>
    <button class="btn btn-danger" @click="remove(index)">remove</button>
     </ul>
  <li>total:{{totalprice}}</li>
</div>

</template>

<script>

export default{
    props:['items'],

    computed:{
    totalprice (){
      var total = 0;
      this.items.forEach(item =>{
        total = total +parseFloat(item.price);
      })
      return total
    }

  },
  methods:{
    remove(index){
        this.$emit('removeitem',index)
    }
  }

}
</script>