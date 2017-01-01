// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'
import router from './router'
import 'animejs/anime.js'
import './style/main.sass'

function applicationEndPoint () {
  Vue.use(VueResource)

  sync(store, router)

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    render: function (h) {
      return h('App')
    },
    components: { App },
    router,
    store
  })

  router.push('/home/top')
}

function setUpDummyCordovaObject () {
  window.device = {
    platform: 'browser'
  }
}

let interval = null
console.log('INITIALIZE')
document.addEventListener('deviceready', applicationEndPoint)
interval = setInterval(function () {
  if (window.cordova_loading_status === 'success') {
    clearInterval(interval)
  } else if (window.cordova_loading_status === 'failed') {
    clearInterval(interval)
    setUpDummyCordovaObject()
    applicationEndPoint()
  }
}, 20)

