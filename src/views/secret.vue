<template>
  <div class="about">
    <div>
        <form @submit.prevent="postdata()">
            <input type="text" placeholder="name" v-model="product.name"><br>
            <input type="text" placeholder="price" v-model="product.price"><br>
            <input type="text" placeholder="description" v-model="product.description"><br>
            <input 
            type="file" 
            placeholder="image" 
            accept="image/*"
            @change="onfilepicked"><br>
            <input type="submit">
        </form>
    </div>
    <div>
        <div v-for="(item,index) in items" :key="index.id">
            <img :src="item.image">
            <h3>{{item.name}}</h3>
            <p><b>{{item.price}}</b></p>
            <button @click="addtocart(item)">Add to cart</button>
        </div>
    </div>
    <div style="background:red">
        <p>items in cart-</p>
        <div v-for='pro in cart' :key="pro.id">
            <p>{{pro.name}}</p>
            <img :src="pro.image" style="width:80px">
        </div>
        <div>
        <form @submit.prevent="checkout()">
            <input type="text" placeholder="phone number" v-model="collections.phone">
            <input type="text" placeholder="address" v-model="collections.address">
            <input type="submit" value="checkout">
        </form>
        </div>
    </div>
  </div>
</template>
// <script>
import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
import axios from 'axios'
export default {
    data(){
        return{
            product:{
                name:'',
                price:"",
                description:'',
                image:'',
                rawimg:'',
            },
            imageurl:'',
            items:[],
            cart:[],
            collections:{
                address:'',
                email:'',
                phone:'',
            }
        }
    },
    mounted(){
        axios.get('https://proj1-ecomerce.firebaseio.com/product.json').then(data=>{
            return data
        }).then(data=>{
            this.items=data.data
            console.log(this.items)
        })
        const user = firebase.auth().currentUser;
        this.collections.email = user.email;
    },
    methods:{
        postdata(){
            const filename = this.product.rawimg.name
            const ext = filename.slice(filename.lastIndexOf('.'));
            const current_image = filename +'.'+ ext
            firebase.storage().ref('products/'+ current_image).put(this.product.rawimg).then(()=>{
                firebase.storage().ref('products/'+current_image).getDownloadURL().then(data=>{
                this.product.image = data
                console.log(this.product.image)
            }).then(()=>{
                axios.post('https://proj1-ecomerce.firebaseio.com/product.json',this.product).then(data=>{
                console.log(this.product)
                console.log(data)
            })
            })
            })
        },
        onfilepicked(event){
            const files = event.target.files
            let filename = files[0].name;
            if (filename.lastIndexOf('.')<=0){
                return alert('please add a valid')
            }
            const filereader= new FileReader()
            filereader.addEventListener('load',()=>{
                this.imageurl = filereader.result
            })
            filereader.readAsDataURL(files[0])
            this.product.rawimg = files[0]
        },
        addtocart(item){
            this.cart.push(item)
        },
        checkout(){
            firebase.firestore().collection('products').add({
                items:this.cart,
                phone:this.collections.phone,
                email:this.collections.email,
                address:this.collections.address,
            })
        }
    }
}
</script>