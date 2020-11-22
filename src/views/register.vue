<template>
  <div class="about">
    <div class="modal-content">
      <h4>Sign up</h4><br />
      <form id="signup-form" @submit.prevent="submit">
        <div class="input-field">
          <input type="email" v-model ="email" required />
        </div>
        <div class="input-field">
          <input type="password" v-model ="password" required />
        </div>
        <button type="submit">Sign up</button>
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
            const user = firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
            console.log(user)
            this.$router.replace({name:'home'})
        }
    }
}
</script>
