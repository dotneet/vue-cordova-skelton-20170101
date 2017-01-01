import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Top from './views/Top.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/home',
      component: Home,
      children: [
        { path: 'top', component: Top }
      ]
    },
    { path: '/', redirect: '/home/top' },
    { path: '/index.html', redirect: '/home/top' }
  ]
})

