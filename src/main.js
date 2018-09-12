import '@babel/polyfill'
import 'vuetify/dist/vuetify.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router';
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuetify, {
  iconfont: 'fa'
})

import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Projects from './pages/Projects.vue';
import Contact from './pages/Contact.vue';

Vue.component('portfolio-header', () => import('./components/Header.vue'));

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/about', component: About, name: 'ABOUT' },
  { path: '/projects', component: Projects, name: 'PROJECTS' },
  { path: '/contact', component: Contact, name: 'CONTACT'}
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
