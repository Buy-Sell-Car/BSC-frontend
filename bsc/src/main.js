import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import store from './store'
import { getApi } from './axios-api'
import VueMask from 'v-mask'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueMask)


Vue.config.productionTip = false
Vue.prototype.$api = getApi;
const token = localStorage.getItem('accessToken')
if (token) {
  Vue.prototype.$api.defaults.headers.common['Authorization'] = "Bearer " + token
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresLogin)) {
    if (!store.getters.loggedIn) {
      next({ name: 'login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
