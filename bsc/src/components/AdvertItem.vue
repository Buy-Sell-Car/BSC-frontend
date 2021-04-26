<template>
    <ul class="list-group mt-4">
        <li class="list-group-item">
            <div class="row">
                <a class="advert_item_link col-9 mb-2" href="#">
                    {{ advert.brand }} {{ advert.model }}
                </a>
                <div class="advert_item_date col-3" style="text-align: right;">
                    {{ advert.date }}
                </div>
            </div>
            <div class="row">
                <div class="wrapper col-4">
                    <img class="main_img" v-bind:src="advert.main_img"  alt="">
                </div>
                <div class="col-8 p-0">
                    <div class="advert_item_info col-5">
                        <div class="advert_item_mileage">
                            Пробег: {{ advert.mileage }} км
                        </div>
                        <div class="advert_item_year">
                            Год выпуска: {{ advert.year }}
                        </div>
                        <div class="advert_item_price mt-5">
                            {{ advert.price }} ₽
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</template>

<style scoped>
    .list-group-item {
        border-color: rgba(0, 0, 150, 0.3);
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    }
    
    .advert_item_link {
        float: left;
        font-size: 20px;
        font-weight: bolder;
        color: rgb(49, 1, 77);
    
    }

    .advert_item_date {
        font-style: italic;
    }

    .advert_item_price {
        float: right;
        padding: 5px 10px;
        border: 2px solid orange;
        border-radius: 10px;
        background-color: orange;
        color: white;
        font-weight: bold;
        font-size: 24px;
    }

    .advert_item_mileage {
        float: right;
        font-size: 17px;
    }
    
    .advert_item_year {
        float: right;
        font-size: 17px;
    }
    
    .wrapper {
        max-height: 160px;
    }
    .main_img {
        object-fit: cover;
        width: 70%;
        height: 100%;
    }
    .advert_item_info {
        float: right;
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