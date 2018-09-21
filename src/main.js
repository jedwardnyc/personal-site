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
import Blog from './pages/Blog.vue';
import Projects from './pages/Projects.vue';


Vue.component('portfolio-header', () => import('./components/Header.vue'));
Vue.component('project', () => import('./components/Project.vue'));

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/about', component: About, name: 'ABOUT' },
  { path: '/blog', component: Blog, name: 'BLOG'},
  { path: '/projects', component: Projects, name: 'PROJECTS' }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
