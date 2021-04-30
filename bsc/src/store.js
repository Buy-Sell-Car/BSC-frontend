import Vue from 'vue'
import Vuex from 'vuex'
import { getApi } from './axios-api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    accessToken: null,
    refreshToken: null,
    username: null,
  },
  mutations: {
    updateStorage (state, {access, refresh, username}) {
      state.accessToken = access
      state.refreshToken = refresh
      state.username = username
    },
  },
  actions: {
    userLogin (context, usercredentials) {
      return new Promise((resolve, reject) => {
        getApi.post('/api/token/' , {
          username: usercredentials.username,
          password: usercredentials.password
        })
        .then(response => {
          context.commit('updateStorage', { access:response.data.access, refresh:response.data.refresh, username: usercredentials.username})
          resolve()
        })
        .catch(err => {
          reject(err)
        })
      })
    }
  }
})

export default store