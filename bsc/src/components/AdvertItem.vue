<template>
    <b-list-group class="mt-4">
        <b-list-group-item>
        <b-link v-if="advert" :to="{name: 'Detail', params: {id: advert.id}}">
            <div class="row">
                    <div class="col-lg-3 col-12 wrapper">
                        <img class="main_img" v-bind:src="advert.advertimage_set[0].image"  alt="">
                    </div>
                    <div class="col-lg-5 col-12">
                        <h5 class="carmodel mt-lg-auto mt-2">
                            {{ advert.carmodel.brand.name }} {{ advert.carmodel.name }}
                        </h5>
                        <div class="summary_params">
                            <div class="column_params">
                                <div class="item_params">
                                    {{ advert.power }} л.с. / {{ advert.fuel }}
                                </div>
                                <div class="item_params">
                                    {{ advert.transmission }}
                                </div>
                                <div class="item_params">
                                    {{ advert.carbody }} 
                                </div>
                                <div class="city mt-4">
                                    {{ advert.profile.city }}, {{advert.advert_date}}
                                </div>
                            </div>
                            <div class="column_params">
                                <div class="item_params">
                                    {{ advert.drive }}
                                </div>
                                <div class="item_params">
                                    {{ advert.color }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-6 mt-lg-auto mt-2">
                        <div class="highlight_price">
                            {{ advert.price }} ₽
                        </div>
                    </div>
                    <div class="col-lg-2 col-6 mt-lg-auto mt-2">
                        {{ advert.mileage }} км
                    </div>
            </div>
        </b-link>
        </b-list-group-item>
    </b-list-group>
</template>

<style scoped>
      .wrapper {
        width: 205px;
        height: 154px;
      }
      .wrapper img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
      .summary_params {
          display: flex;
      }
      .column_params {
          box-sizing: border-box;
          padding-right: 12px;
      }
      .item_params {
          font-size: 15px;
          line-height: 22px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: grey;
      }
      a {
          text-decoration: none;
          color: black;
      }
      .highlight_price {
          padding: 2px 4px;
          line-height: 22px;
          margin-top: -4px;
          color: #fff;
          border-radius: 4px;
          background-color: #5b0;
          font-size: 17px;
          font-weight: 700;
          line-height: 20px;
          display: inline-flex;
          align-items: center;
      }
</style>

<script>
export default {
    props: {
        advert: {
            type: Object,
            required: true
        }
    }
}
</script>