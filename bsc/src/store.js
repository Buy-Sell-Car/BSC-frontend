import Vue from 'vue'
import Vuex from 'vuex'
import { getApi } from './axios-api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    accessToken: localStorage.getItem('accessToken') || null,
    refreshToken: localStorage.getItem('refreshToken') || null,
    username: localStorage.getItem('username') || null,
    id: localStorage.getItem('id') || null,
  },
  mutations: {
    updateStorage (state, {access, refresh, username, id}) {
      state.accessToken = access
      state.refreshToken = refresh
      state.username = username
      state.id = id
    },
    destroyToken (state) {
      state.accessToken = null,
      state.refreshToken = null,
      state.username = null
      state.id = null
    }
  },
  actions: {
    userLogin (context, usercredentials) {
      return new Promise((resolve, reject) => {
        getApi.post('/api/token/' , {
          username: usercredentials.username,
          password: usercredentials.password
        })
        .then(response => {
          context.commit('updateStorage', { access:response.data.access, refresh:response.data.refresh, username: response.data.user, id:response.data.id});
          localStorage.setItem('accessToken', response.data.access);
          localStorage.setItem('refreshToken', response.data.refresh);
          localStorage.setItem('username', response.data.user);
          localStorage.setItem('id', response.data.id);
          getApi.defaults.headers.common['Authorization'] = "Bearer " + response.data.access;
          resolve()
        })
        .catch(err => {
          reject(err)
        })
      })
    },
    userLogout (context) {
      if (context.getters.loggedIn) {
        context.commit('destroyToken');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('username');
        localStorage.removeItem('id');
      }
    }
  },
  getters: {
    loggedIn (state) {
        return state.accessToken != null
    }
  }
})

export default store