<template>
  <div v-if="user">
      <div>Ник: {{ user.username }}</div>
      <div>Имя: {{ user.first_name }}</div>
      <div>Фамилия: {{ user.last_name }}</div>
      <div>Электронная почта: {{ user.email }}</div>
      <div>Город: {{ user.city }}</div>
      <div>Телефон: {{ user.tel }}</div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  name: 'User',
  data() {
    return {
      user:null,
    }
  },
  created() {
    this.$api
      .get('/api/profiles/'+this.id+'/')
      .then(response => (this.user = response.data));
  }
}
</script>