<template>
  <div>
    <b-alert v-model="showDismissibleAlert" variant="danger">{{this.err}}</b-alert>
    <b-form @submit.prevent="register">
      <b-form-group 
        id="input-group-1" 
        label="Имя пользователя:" 
        label-for="input-1"
        description="Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only."
      >
        <b-form-input
          id="input-1"
          v-model="username"
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

      <b-form-group
        id="input-group-3"
        label="Email адрес:"
        label-for="input-3"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-3"
          v-model="email"
          type="email"
          placeholder="Введите email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Имя:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="firstname"
          type="text"
          placeholder="Имя"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Фамилия:" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="lastname"
          type="text"
          placeholder="Фамилия"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-6" label="Город:" label-for="input-6">
        <b-form-input
          id="input-6"
          v-model="city"
          type="text"
          placeholder="Город"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-7" label="Телефон:" label-for="input-7">
        <b-form-input
          id="input-7"
          v-model="phone"
          v-mask="'+7 (###) ###-##-##'"
          type="text"
          placeholder="+7 ("
          required
        ></b-form-input>
        {{phone}}
      </b-form-group>

      <b-button block type="submit" variant="primary">Зарегистрироваться</b-button>
      
    </b-form>
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        email: '',
        firstname: '',
        lastname: '',
        city: '',
        phone: '',
        showDismissibleAlert: false,
        err: null
      }
    },
    methods: {
      register() {
        this.$api.post('/api/profiles/', {
          username: this.username,
          first_name: this.firstname,
          last_name: this.lastname,
          email: this.email,
          password: this.password,
          city: this.city,
          tel: this.phone
        })
        .then(() => {
            this.$router.push({name: 'user'})
        })
        .catch(err => {
            this.err = err.request.response,
            this.showDismissibleAlert = true
        })
      }
    }
  }
</script>