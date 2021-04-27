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
