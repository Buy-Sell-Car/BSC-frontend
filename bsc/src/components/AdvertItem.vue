<template>
    <ul class="list-group mt-4">
        <li class="list-group-item">
        <b-link v-if="advert" :to="{name: 'Detail', params: {id: advert.id}}">
            <div class="row">
                    <div class="wrapper exmp3">
                        <img class="main_img" v-bind:src="advert.advertimage_set[0].image"  alt="">
                    </div>
                    <div class="col-5">
                        <h5 class="carmodel">
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
                                    {{ advert.profile.city }},пш {{advert.advert_date}}
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
                    <div class="col-2">
                        <div class="highlight_price">
                            {{ advert.price }} ₽
                        </div>
                        <div class="mt-2">
                        </div>
                    </div>
                    <div class="col-2">
                        {{ advert.mileage }} км
                    </div>

                </div>
            </div>
        </b-link>
        </li>
    </ul>
</template>

<style scoped>
      .wrapper {
        width: 205px;
        height: 154px;
      }
      .exmp3 img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
      .summary_params {
          display: flex;
      }
      .column_params {
          box-sizing: border-box;
          width: 180px;
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