<template>
  <div>
    {{ advert }}
    <h1>{{ advert.carmodel.brand.name }} {{ advert.carmodel.name }}</h1>
    <!-- Карусель -->
      <div class="row">
        <div class="col-6">
          <div>
            <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="4000"
              controls
              indicators
              background="#ababab"
              img-width="1024"
              img-height="480"
              style="text-shadow: 1px 1px 2px #333;"
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

        </div>

              <!-- <b-carousel-slide v-for="img in advert.advertimage_set">
                <template #img>
                <img
                  width="720"
                  height="480"
                  :src=img.image
                >
                </template>
              </b-carousel-slide>
            </b-carousel> -->
      </div>
  </div>
</template>

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
