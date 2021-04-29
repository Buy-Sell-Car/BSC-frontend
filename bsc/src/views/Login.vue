<template>
  <div class="mt-2">
    <b-alert v-model="showDismissibleAlert" variant="danger">Неверное имя пользователя или пароль</b-alert>
    <b-form @submit.prevent="login">
      <b-form-group id="input-group-1" label="Имя пользователя:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="username"
          type="text"
          placeholder="Имя пользователя"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Пароль:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="password"
          type="password"
          placeholder="Пароль"
          required
        ></b-form-input>
      </b-form-group>

      <b-button block type="submit" variant="primary">Войти</b-button>
    </b-form>
    
    <b-button block to="/">Зарегистрироваться</b-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        showDismissibleAlert: false
      }
    },
    methods: {
      login() {
        this.$store.dispatch('userLogin', {
          username: this.username,
          password: this.password
        })
        .then(() => {
            this.$router.push({name: 'Home'})
        })
        .catch(err => {
            this.showDismissibleAlert = true
        })
      }
    }
  }
</script>