<template>
  <div class="home">
    <AdvertList 
      v-bind:adverts="adverts"
    />
  </div>
</template>

<script>
import axios from 'axios'
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
  mounted() {
    axios
      .get('http://127.0.0.1:8000/api/adverts/')
      .then(response => (this.adverts = response.data));
  }
}
</script>
