<template>
  <div class="about">
    <h1>Sail your products</h1>
    <div>
        <form @submit.prevent="postproduct">
            <input type="text" placeholder="name" v-model="products.name">
            <input type="file" 
                   placeholder="image"
                   @change="onimage"
                   accept="image/*">
            <input type="price" placeholder="price" v-model="products.price">
            <input type="submit">
        </form>
    </div>
  </div>
</template>
<style type="text/css" scoped>
    form input{
        display: block;
        margin: 20px;
    }
</style>
<script>
import * as firebase from 'firebase/app'
import 'firebase/storage'
import axios from 'axios'
export default{
    data(){
        return {
            imageurl:"",
            products:{
                name:"",
                image:"",
                price:"",
            }
        }
    },
    methods:{
        //get image name in raw file
        onimage(event){
            const files=event.target.files
            // const file_name = files[0].name;
            this.imageurl = files[0]
            console.log(this.imageurl)
        },
        //post the same image into firebase storage
        postproduct(){
            const Image_name = this.imageurl.name;
            firebase.storage().ref('products/'+Image_name).put(this.imageurl).then(()=>{
                firebase.storage().ref('products/'+Image_name).getDownloadURL().then(data=>{
                    this.products.image=data
                }).then(()=>{
                    axios.post('https://first-ecom-66ee9.firebaseio.com/products.json',this.products).then(data=>{
                        console.log(data)
                        this.products.name=''
                        this.products.price=''
                        this.imageurl=''
                    })
                })
            })
        }
    }
}
</script>