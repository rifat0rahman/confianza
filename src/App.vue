<template>
  <div id="nav">
    <div v-show="cond">
      <button @click="logout">LogOut</button>
      <p>User logged:{{state}}</p>
    </div>
    <router-link to="/">Home</router-link> |
    <router-link to="/register" v-show='!cond'>Register |</router-link>
    <router-link to="/login" v-show='!cond'> login |</router-link>
    <router-link to="/secret"> secret</router-link>
  </div>
  <router-view/>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
export default {
  data(){
    return{
      state:"",
      cond:false
    }
  },
  mounted(){
    firebase.auth().onAuthStateChanged(user=>{
      if (user){
        this.state="True"
        this.cond=true
      }
      else{
        this.state="False"
        this.cond=false
      }
    })
  },
  methods:{
    logout(){
      firebase.auth().signOut().then(()=>{
        console.log('LogOut')
      })
    }
  }
}
</script>
