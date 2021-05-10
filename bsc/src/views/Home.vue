<template>
<div>
  <div class="filter m-auto">
  <b-form @submit.prevent="find">
    <div class="row">
      <b-form-select class="ml-5 mt-3 col-4" @change="carbrand_entered"
          id="input-1"
          v-model="filters.brand"
          :options="brand_options"
      ></b-form-select>
      <b-form-select class="ml-4 mt-3 col-4" :disabled="carmodel_disabled"
          id="input-2"
          v-model="filters.carmodel"
          :options="carmodel_options"
      ></b-form-select>
      <b-form-select class="ml-4 mt-3 col-2"
          id="input-3"
          v-model="filters.color"
          :options="color_options"
      ></b-form-select>
    </div>
    <div class="row">
      <b-form-select class="ml-5 col-2 mt-2 leftInput"
          id="input-4"
          v-model="filters.carbody"
          :options="carbody_options"
      ></b-form-select>
      <b-form-select class="mt-2 col-2 rightInput"
          id="input-5"
          v-model="filters.transmission"
          :options="transmission_options"
      ></b-form-select>
      <b-form-select class="ml-4 mt-2 col-2 leftInput"
          id="input-6"
          v-model="filters.fuel"
          :options="fuel_options"
      ></b-form-select>
      <b-form-select class="mt-2 col-2 rightInput"
          id="input-7"
          v-model="filters.drive"
          :options="drive_options"
      ></b-form-select>
      <b-form-select class="ml-4 mt-2 col-2"
          id="input-8"
          v-model="filters.owners"
          :options="owners_options"
      ></b-form-select>
    </div>
    <div class="row">
      <b-form-input class="ml-5 mt-2 col-2 leftInput"
          id="input-9"
          v-model="filters.year_from"
          placeholder="Год от"
      ></b-form-input>
      <b-form-input class="mt-2 col-2 rightInput"
          id="input-10"
          v-model="filters.year_to"
          placeholder="до"
      ></b-form-input>      

      <b-form-input class="ml-4 mt-2 col-2 leftInput"
          id="input-11"
          v-model="filters.price_from"
          placeholder="Цена от"
      ></b-form-input>
      <b-form-input class="mt-2 col-2 rightInput"
          id="input-12"
          v-model="filters.price_to"
          placeholder="до"
      ></b-form-input>
      <b-form-checkbox  class="ml-4 mt-3 col-2"
        id="input-13"
        v-model="filters.withPhoto"
        name="withPhoto"
      >Только с фото</b-form-checkbox>
    </div>
    <div class="row">
      <b-form-input class="ml-5 mt-2 col-2 leftInput"
          id="input-14"
          v-model="filters.mileage_from"
          placeholder="Пробег от"
      ></b-form-input>
      <b-form-input class="mt-2 col-2 rightInput"
          id="input-15"
          v-model="filters.mileage_to"
          placeholder="до"
      ></b-form-input>
      <b-form-select class="ml-4 mt-2 col-4"
          id="input-16"
          v-model="filters.sort"
          :options="sort_options"
      ></b-form-select>
      <b-button class="mb-3 ml-4 mt-2 col-2" type="submit"
        variant="info"
      >Найти</b-button>
    </div>
  </b-form>
  </div>
  <div class="home">
    <AdvertList 
      v-bind:adverts="adverts"
    />
  </div>
</div>
</template>

<style scoped>
  .leftInput {
    border-right: none;
    border-radius: 5px 0 0 5px;
  }
  .rightInput {
    border-radius: 0 5px 5px 0;
  }
  .filter {
    border: 1px solid grey;
    border-radius: 5px;
  }
</style>

<script>
import AdvertList from '@/components/AdvertList'

export default {
  name: 'Home',
  data() {
    this.carmodel_disabled = false;
    return {
      adverts: null,
      filters: {
          brand: null,
          fuel: null,
          drive: null,
          transmission: null,
          carbody: null,
          price: null,
          mileage_from: null,
          mileage_to: null,
          year_from: null,
          year_to: null,
          owners: null,
          color: null,
          carmodel: null,
          sort: 'PD',
          withPhoto: false,
      },
      sort_options: [
        { value: 'PD', text: 'По дате размещения'},
        { value: 'YN', text: 'По году: новее'},
        { value: 'YO', text: 'По году: старше'},
        { value: 'MI', text: 'По пробегу'},
        { value: 'PI', text: 'По возрастанию цены'},
        { value: 'PM', text: 'По убыванию цены'},
      ],
      owners_options: [
        { value: null, text: 'Неважно'},
        { value: 1, text: 'Один'},
        { value: 2, text: 'Не более двух'},
      ],
      fuel_options: [
          { value: null, text: 'Двигатель', disabled: true},
          { value: 'PR', text: 'Бензин'},
          { value: 'DS', text: 'Дизель' },
          { value: 'EL', text: 'Электричество' },
      ],
      drive_options: [
          { value: null, text: 'Привод', disabled: true},
          { value: 'FW', text: 'Передний'},
          { value: 'AW', text: 'Полный'},
          { value: 'RW', text: 'Задний'},
      ],
      transmission_options: [
          { value: null, text: 'Коробка', disabled: true},
          { value: 'MT', text: 'Механическая'},
          { value: 'AT', text: 'Автоматическая'},
          { value: 'CT', text: 'Вариатор'},
          { value: 'RT', text: 'Роботизированная'},
      ],
      carbody_options: [
          { value: null, text: 'Кузов', disabled: true},
          { value: 'SD', text: 'Седан'},
          { value: 'HB', text: 'Хэтчбэк'},
          { value: 'LB', text: 'Лифтбэк'},
          { value: 'SV', text: 'Внедорожник'},
          { value: 'CP', text: 'Купе'},
          { value: 'CB', text: 'Кабриолет'},
          { value: 'WG', text: 'Универсал'},
          { value: 'MV', text: 'Минивэн'},
          { value: 'PC', text: 'Пикап'},
          { value: 'LM', text: 'Лимузин'},
          { value: 'VN', text: 'Фургон'},
      ],
      color_options: [
          { value: null, text: 'Выберите цвет', disabled: true},
          { value: 'BK', text: 'Черный'},
          { value: 'SI', text: 'Серебристый'},
          { value: 'WH', text: 'Белый'},
          { value: 'GY', text: 'Серый'},
          { value: 'BL', text: 'Синий'},
          { value: 'RE', text: 'Красный'},
          { value: 'GN', text: 'Зеленый'},
          { value: 'BR', text: 'Коричневый'},
          { value: 'BE', text: 'Бежевый'},
          { value: 'YE', text: 'Желтый'},
          { value: 'PU', text: 'Фиолетовый'},
          { value: 'PI', text: 'Розовый'},
          { value: 'OR', text: 'Оранжевый'},
      ],
      brand_options: [
        { value: null, text: 'Марка', disabled: true}
      ],
      carmodel_options: [
        { value: null, text: 'Модель', disabled: true}
      ]
    }
  },
  components: {
    AdvertList
  },
  created() {
    let brands_arr = [];
    this.$api
      .get('/api/brands/')
      .then(response => {
        brands_arr = response.data;
        for (let car in brands_arr) {
          this.brand_options.push({value: brands_arr[car].id, text: brands_arr[car].name})
        }
      });
    
    this.$api
      .get('/api/adverts/')
      .then(response => (this.adverts = response.data));
  },
  methods: {
    carbrand_entered() {
      this.carmodel_disabled = false;
      this.$api
        .get('/api/models/')
        .then(response => {
          let models_arr = response.data;
          for (let car in models_arr) {
            this.carmodel_options.push({value: models_arr[car].id, text: models_arr[car].name})
          }
          });
      },
    find() {
      let query = new URLSearchParams();
      for (let filter in this.filters) {
        if (this.filters[filter] != null)
            query.append(filter, this.filters[filter]);
      }
      let link = '/api/adverts/?' + query.toString();
      this.$api
        .get(link)
        .then(response => (this.adverts = response.data));
    }
  }
}
</script>
