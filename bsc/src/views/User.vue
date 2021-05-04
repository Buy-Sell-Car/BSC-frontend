<template>
<div>
  <div v-if="user">
    <h3 class="mt-5">Редактирование профиля</h3>
    <div class="userEdit">
      <div class="row mt-4">
          <div class="text-right col-4 mt-2">Логин:</div>
          <b-form-input class="col-3" v-model="username" readonly></b-form-input>
          <button class="editButton col-1 ml-2"><b-icon-pencil></b-icon-pencil></button>
      </div>
      <div class="row mt-3">
          <div class="text-right col-4 mt-2">Имя:</div>
          <b-form-input class="col-3" v-model="username" readonly></b-form-input>
          <button class="editButton col-1 ml-2"><b-icon-pencil></b-icon-pencil></button>
      </div>
      <div class="row mt-3">
          <div class="text-right col-4 mt-2">Фамилия:</div>
          <b-form-input class="col-3" v-model="username" readonly></b-form-input>
          <button class="editButton col-1 ml-2"><b-icon-pencil></b-icon-pencil></button>
      </div>
      <div class="row mt-3">
          <div class="text-right col-4 mt-2">Электронная почта:</div>
          <b-form-input class="col-3" v-model="username" readonly></b-form-input>
          <button class="editButton col-1 ml-2"><b-icon-pencil></b-icon-pencil></button>
      </div>
      <div class="row mt-3">
          <div class="text-right col-4 mt-2">Город:</div>
          <b-form-input class="col-3" v-model="username" readonly></b-form-input>
          <button class="editButton col-1 ml-2"><b-icon-pencil></b-icon-pencil></button>
      </div>
      <div class="row mt-3">
          <div class="text-right col-4 mt-2">Телефон:</div>
          <b-form-input class="col-3" v-model="username" readonly></b-form-input>
          <button class="editButton col-1 ml-2"><b-icon-pencil></b-icon-pencil></button>
      </div>

      <div>Ник: {{ user.username }}</div>
      <div>Имя: {{ user.first_name }}</div>
      <div>Фамилия: {{ user.last_name }}</div>
      <div>Электронная почта: {{ user.email }}</div>
      <div>Город: {{ user.city }}</div>
      <div>Телефон: {{ user.tel }}</div>
    </div>
  </div>
  <div>
    <h3 class="mt-5">Избранные Объявления</h3>
    <div class="favAdverts">
      <AdvertList 
        v-bind:adverts="adverts"
      />
    </div>
  </div>

  <div>
    <h3 class="mt-5">Мои объявления</h3>
    <div class="favAdverts mb-5">
      <AdvertList 
        v-bind:adverts="adverts"
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
      username: null,
      adverts: null,
      user:null,
    }
  },
  components: {
    AdvertList
  },
  created() {
    this.$api
      .get('/api/profiles/'+this.id+'/')
      .then(response => (this.user = response.data));
    this.$api
      .get('/api/adverts/')
      .then(response => (this.adverts = response.data));
  }
}
</script>