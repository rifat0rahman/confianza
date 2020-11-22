import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import register from '../views/register.vue'
import login from '../views/login.vue'
import secret from '../views/secret.vue'

import * as firebase from 'firebase/app'
import 'firebase/auth'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/secret',
    name: 'secret',
    component: secret,
    meta:{requiresAuth:true}
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  console.log("isauthenticated", isAuthenticated);
  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});
export default router