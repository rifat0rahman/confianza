<template>
  <div class="about">
    <div class="modal-content">
      <h4>Login</h4><br />
      <form id="signup-form" @submit.prevent="submit">
        <div class="input-field">
          <input type="email" v-model ="email" required />
        </div>
        <div class="input-field">
          <input type="password" v-model ="password" required />
        </div>
        <button type="submit">login</button><br>
        <span>dont you have?? <routerLink to='/register'>Register</routerLink></span>
      </form>
    </div>
  </div>
</template>
<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
export default {
    data(){
        return{
            email:'',
            password:'',
            error:''
        }
    },
    methods:{
        submit(){
            firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(data=>{
                console.log(data.user)
                this.$router.replace({name:'secret'})
            }).catch(err=>{
                console.log(err.message)
            })
        }
    }
 }
</script>