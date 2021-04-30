<template>
  <div v-if="advert">
    {{ advert }}
    <h1>{{ advert.carmodel.brand.name }} {{ advert.carmodel.name }}</h1>
    <!-- Карусель -->
      <div class="row">
        <div class="col-6">
            <b-carousel
              id="carousel-1"
              v-model="slide"
              controls
              indicators
              background="#ababab"
              img-width="1024"
              img-height="480"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <b-carousel-slide v-for="img in advert.advertimage_set">
                <template #img>
                  <img
                    class="d-block img-fluid w-100"
                    width="1024"
                    height="480"
                    :src=img.image
                  >
                </template>
              </b-carousel-slide>
            </b-carousel>
        </div>
        <div class="col-6">
          <ul class="СardInfo">
              <li class="CardInfo_row">
                <span class="CardRow_label">Год выпуска </span>
                <span class="CardRow_param"> {{ advert.prod_year }}</span>
              </li>
              <li class="CardInfo_row">
                <span class="CardRow_label">Пробег </span>
                <span class="CardRow_param">{{ advert.mileage }}</span>
              </li>
              <li class="CardInfo_row">
                <span class="CardRow_label">Кузов </span>
                <span class="CardRow_param">{{ advert.carbody }}</span>
              </li>
              <li class="CardInfo_row">
                <span class="CardRow_label">Цвет </span>
                <span class="CardRow_param">{{ advert.color }}</span>
              </li>
              <li class="CardInfo_row">
                <span class="CardRow_label">Двигатель </span>
                <span class="CardRow_param">{{ advert.power }} л.с. / {{ advert.fuel }} </span>
              </li>
              <li class="CardInfo_row">
                <span class="CardRow_label">Коробка </span>
                <span class="CardRow_param">{{ advert.transmission }}</span>
              </li>
              <li class="CardInfo_row">
                <span class="CardRow_label">Привод </span>
                <span class="CardRow_param">{{ advert.drive }}</span>
              </li>
              <li class="CardInfo_row">
                <span class="CardRow_label">Владельцы </span>
                <span class="CardRow_param">{{ advert.owners }}</span>
              </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<style scoped>
.СardInfo {
  font-size: 15px;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
}

.CardInfo_row {
  display: flex;
}

.CardRow_label {
  flex-shrink: 0;
  width: 140px;
  line-height: 22px;
  display: block;
  padding: 3px 0;
  text-overflow: ellipsis;
  color: grey;
}
.CardRow_param {
    flex-grow: 1;
    padding-left: 8px;
    color: #000;
    line-height: 22px;
    display: block;
    padding: 3px 0;
    text-overflow: ellipsis;
}
</style>

<script>
import axios from 'axios'

export default {
  props: ['id'],
  name: 'Home',
  data() {
    return {
      advert:null,
      slide: 0,
      sliding: null,
    }
  },
  components: {
  
  },

  methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
  },

  mounted() {
    axios
      .get('http://127.0.0.1:8000/api/adverts/'+this.id+'/')
      .then(response => (this.advert = response.data));
  }
}
</script>
