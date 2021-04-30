<template>
  <div>{{user}}</div>
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