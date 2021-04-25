<template>
  <div id="app">
    <h1>Buy-sell-car</h1>
    <hr>
    <AdvertList 
      v-bind:adverts="adverts"
    />
  </div>
</template>

<script>
import AdvertList from '@/components/AdvertList'
export default {
  name: 'App',
  data() {
    return {
      adverts: [
        {id: 1, title: 'Audi A6', price: 1800000},
        {id: 2, title: 'BMW 5-series', price: 1020000},
        {id: 3, title: 'Mercedes-benz E-class', price: 1500000}
      ]
    }
  },
  components: {
    AdvertList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
