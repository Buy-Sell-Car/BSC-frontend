<template>
<div>
  <div v-if="user">
    <b-alert v-model="showDismissibleAlert" variant="danger">{{this.err}}</b-alert>
    <b-alert v-model="showSuccess" variant="success">Обновлено!</b-alert>
    <h3 class="mt-5">Редактирование профиля</h3>
    <div class="userEdit py-4">
      <div class="row">
          <div class="text-right col-4 mt-2">Логин:</div>
          <b-form-input class="col-3" readonly :value="this.user.username"></b-form-input>
      </div>
      <div class="row mt-3">
          <div class="text-right col-4 mt-2">Телефон:</div>
          <b-form-input class="col-3" readonly :value="this.user.tel"></b-form-input>
      </div>
      <div class="row mt-3">
          <div class="text-right col-4 mt-2">Имя:</div>
          <b-form-input class="col-3" v-model="user.first_name" :readonly="field_state.first_name"></b-form-input>
          <button class="editButton col-1 ml-2" @click="field_state.first_name = !field_state.first_name; if (field_state.first_name) updateUser(); else {showSuccess = false; showDismissibleAlert = false}"><b-icon-pencil></b-icon-pencil></button>
      </div>
      <div class="row mt-3">
          <div class="text-right col-4 mt-2">Фамилия:</div>
          <b-form-input class="col-3" v-model="user.last_name" :readonly="field_state.last_name"></b-form-input>
          <button class="editButton col-1 ml-2" @click="field_state.last_name = !field_state.last_name; if (field_state.last_name) updateUser(); else {showSuccess = false; showDismissibleAlert = false}"><b-icon-pencil></b-icon-pencil></button>
      </div>
      <div class="row mt-3">
          <div class="text-right col-4 mt-2">Электронная почта:</div>
          <b-form-input class="col-3" v-model="user.email" :readonly="field_state.email"></b-form-input>
          <button class="editButton col-1 ml-2" @click="field_state.email = !field_state.email; if (field_state.email) updateUser(); else {showSuccess = false; showDismissibleAlert = false}"><b-icon-pencil></b-icon-pencil></button>
      </div>
      <div class="row mt-3">
          <div class="text-right col-4 mt-2">Город:</div>
          <b-form-input class="col-3" v-model="user.city" :readonly="field_state.city"></b-form-input>
          <button class="editButton col-1 ml-2" @click="field_state.city = !field_state.city; if (field_state.city) updateUser(); else {showSuccess = false; showDismissibleAlert = false}"><b-icon-pencil></b-icon-pencil></button>
      </div>
    </div>
  </div>
  <div>
    <h3 class="mt-5">Избранные Объявления</h3>
    <div class="favAdverts" v-if="user">
      <AdvertList 
        v-bind:adverts="user.favourite"
      />
    </div>
  </div>

  <div>
    <h3 class="mt-5">Мои объявления</h3>
    <div class="favAdverts mb-5" v-if="user">
      <AdvertList 
        v-bind:adverts="user.advert_set"
      />
    </div>
  </div>
</div>
</template>

<style scoped>
  .userEdit {
    border: 1px solid rgb(170, 170, 170);
    border-radius: 2px;
  }
  .favAdverts {
    border: 1px solid rgb(170, 170, 170);
    border-radius: 2px;
  }
  .editButton {
    background-color: white; 
    border: 1px solid grey; 
    border-radius: 5px;
  }
</style>

<script>
import AdvertList from '@/components/AdvertList'
export default {
  props: ['id'],
  name: 'User',
  data() {
    return {
      user:null,
      field_state: {
          first_name: true,
          last_name: true,
          email: true,
          city: true
      },
      err: null,
      showDismissibleAlert: false,
      showSuccess: false,
    }
  },
  components: {
    AdvertList
  },
  created() {
    this.$api
      .get('/api/profiles/'+this.id+'/')
      .then(response => (this.user = response.data));
  },
  methods: {
    updateUser() {
      let token = this.$store.state.accessToken;
      this.$api.patch('/api/profiles/'+this.id+'/', this.user, { headers: { Authorization: "Bearer " + token } })
        .then(() => {
            this.showSuccess = true;
        })
        .catch(err => {
            this.err = err.request.response,
            this.showDismissibleAlert = true;
        })
    }
  }
}
</script>