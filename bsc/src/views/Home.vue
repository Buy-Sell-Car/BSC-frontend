<template>
  <div class="home">
    <AdvertList 
      v-bind:adverts="adverts"
    />
  </div>
</template>

<script>
import AdvertList from '@/components/AdvertList'

export default {
  name: 'Home',
  data() {
    return {
      adverts: null
    }
  },
  components: {
    AdvertList
  },
  created() {
    this.$api
      .get('/api/adverts/')
      .then(response => (this.adverts = response.data));
  }
}
</script>
