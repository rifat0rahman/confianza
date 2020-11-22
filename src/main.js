import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyBy46hoJ2z-hHip-eEN9qS7O8-QSW5V4wk",
    authDomain: "proj1-ecomerce.firebaseapp.com",
    databaseURL: "https://proj1-ecomerce.firebaseio.com",
    projectId: "proj1-ecomerce",
    storageBucket: "proj1-ecomerce.appspot.com",
    messagingSenderId: "655634187819",
    appId: "1:655634187819:web:844025e59f522bb49f4c6e",
    measurementId: "G-QYHLKCMPCD"
  };

firebase.initializeApp(firebaseConfig);

let app;
firebase.auth().onAuthStateChanged(user=>{
	console.log(user);
	if(!app){
		app = createApp(App).use(router).mount('#app')
	}
})


