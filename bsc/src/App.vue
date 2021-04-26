<template>
  <div class="mt-0" id="app">
    <body>
    <header>
      <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-brand href="#">BSC</b-navbar-brand>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="#">Объявления</b-nav-item>
              <b-nav-item href="#">Продать</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item href="#">Войти</b-nav-item>
              <b-nav-item href="#">Зарегистрироваться</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </header>
    <div class="container">
    <AdvertList 
      v-bind:adverts="adverts"
    />
    </div>

    </body>
  </div>
</template>

<script>
import AdvertList from '@/components/AdvertList'
export default {
  name: 'App',
  data() {
    return {
      adverts: [
        {id: 1, brand: 'Audi',model: 'A6', price: 1800000, mileage:100000, year:2020, date: '26 дек. 12:52', main_img: 'https://avatars.mds.yandex.net/get-autoru-vos/4373680/a19966389a2a88091ae89ab63edccd38/320x240'},
        {id: 2, brand: 'BMW', model: '5-series',price: 1020000, mileage:100000, year:2020, date: '26 дек. 2:52', main_img: 'https://avatars.mds.yandex.net/get-autoru-vos/1577915/689f5e7120204fac610de700f4e0d4ff/320x240'},
        {id: 3, brand: 'Mercedes-benz',model: 'E-class', price: 1500000, mileage:100000, year:2020, date: '26 дек. 212:52', main_img: 'https://avatars.mds.yandex.net/get-autoru-vos/4402933/32007bcb6b7d51ed7e82bcc49a0aa7a4/320x240'}
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
