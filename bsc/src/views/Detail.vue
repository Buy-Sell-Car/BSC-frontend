<template>
  <div v-if="advert">
    <div class="row mt-5">
    <h1 class="col-8">{{ advert.carmodel.brand.name }} {{ advert.carmodel.name }}</h1>
    <h1 class="col-4">{{ advert.price }} ₽</h1>
    </div>
      <div class="row">
    <!-- Карусель -->
        <div class="col-8">
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
        <div class="col-4">
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
              <li class="CardInfo_row">
                <span class="CardRow_label">Дата публикации </span>
                <span class="CardRow_param">{{ advert.advert_date }}</span>
              </li>
          </ul>
          <div class="CardSidebar">
            <div class="CardSidebarActions">
              <h5 class="text-center">Информация о продавце</h5>
              <ul class="CardInfo">
              <li class="CardInfo_row">
                <span class="CardRow_label">Имя </span>
                <span class="CardRow_param"> {{ advert.profile.first_name }}</span>
              </li>
              <li class="CardInfo_row">
                <span class="CardRow_label">Город </span>
                <span class="CardRow_param"> {{ advert.profile.city }}</span>
              </li>
              </ul>
              <a class="TelLink" :href="`tel:${advert.profile.tel}`">
                <div class="TelButton">
                  <span class="TelLabel">Позвонить:</span>
                  <div>{{advert.profile.tel}}</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-5 col-8">
        <div class="comment">Комментарий продавца</div>
        <div class="ad__text">{{advert.description}}</div><br>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-family: Arial,Helvetica,sans-serif;
  font-size: 36px;
  font-weight: 800;
}

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
  
.CardSidebar {
    position: sticky;
    top: 24px;
    margin: 20px 0 0;
    border-radius: 8px;
    background-color: #f0f0f0;
}

.CardSidebarActions {
  padding: 16px;
}

.TelLink {
  text-decoration: none;
  color: white;
}

.TelButton{
  text-decoration: none;
  font-size: 20px;
  background-color: #5b0;
  text-align: center;
  border-radius: 5px;
  font-weight: bold;
}

.TelButton:hover {
  background-color: #77c933;
}

.TelLabel {
  font-size: 14px;
}

.comment {
    font-size: 24px;
    font-weight: bold;
    padding-left: 30px;
    padding-right: 30px;
    position: absolute;
    top: -20px;
    left: 50px;
    background-color: #fff;
}

.ad__text {
    font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
    line-height: 25px;
    border: 2px solid rgba(0, 0, 150, 0.3);
    padding-left: 20px;
    padding-top: 20px;
}
</style>

<script>
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
  methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
  },

  created() {
    this.$api
      .get('/api/adverts/'+this.id+'/')
      .then(response => (this.advert = response.data));
  }
}
</script>
