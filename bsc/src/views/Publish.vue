<template>
    <div>
        <b-alert v-model="showDismissibleAlert" variant="danger">{{this.err}}</b-alert>
        <b-alert v-model="showSuccess" variant="success">Объявление добавлено!</b-alert>
        <b-form class="row" @submit.prevent="publish">
            <div class="col-6">
            <b-form-select class="mt-3" @change="carbrand_entered"
                id="input-1"
                v-model="brand"
                :options="brand_options"
                required
            ></b-form-select>

            <b-form-select class="mt-3" :disabled="carmodel_disabled"
                id="input-2"
                v-model="form.carmodel"
                :options="carmodel_options"
                required
            ></b-form-select>

            <b-form-input class="mt-3"
                id="input-3"
                v-model="form.power"
                placeholder="Мощность"
                required
            ></b-form-input>

            <b-form-select class="mt-3"
                id="input-4"
                v-model="form.fuel"
                :options="fuel_options"
                required
            ></b-form-select>

            <b-form-select class="mt-3"
                id="input-5"
                v-model="form.drive"
                :options="drive_options"
                required
            ></b-form-select>

            <b-form-select class="mt-3"
                id="input-6"
                v-model="form.transmission"
                :options="transmission_options"
                required
            ></b-form-select>
            </div>

            <div class="col-6">
            <b-form-select class="mt-3"
                id="input-7"
                v-model="form.carbody"
                :options="carbody_options"
                required
            ></b-form-select>

            <b-form-input class="mt-3"
                id="input-8"
                v-model="form.price"
                placeholder="Цена"
                required
            ></b-form-input>

            <b-form-input class="mt-3"
                id="input-9"
                v-model="form.mileage"
                placeholder="Пробег"
                required
            ></b-form-input>

            <b-form-input class="mt-3"
                id="input-10"
                v-model="form.owners"
                placeholder="Количество владельцев по ПТС"
                required
            ></b-form-input>

            <b-form-select class="mt-3"
                id="input-7"
                v-model="form.color"
                :options="color_options"
                required
            ></b-form-select>

            <b-form-input class="mt-3"
                id="input-12"
                v-model="form.prod_year"
                placeholder="Год выпуска"
                required
            ></b-form-input>
            </div>
            <div class="col-12">

            <b-form-textarea class="mt-3"
                id="input-13"
                v-model="form.description"
                placeholder="Описание"
                rows = 5
                max-rows = 10
                required
            >
            </b-form-textarea>

            <div >
                <UploadImages class="mt-3" 
                    :max=15 
                    fileError="Поддерживаются файлы формата .png, .jpg, .jpeg"
                    maxError="Загружено максимальное количество изображений!"
                    @change="handleImages"/>
            </div>
            <b-button class="mt-3"  block type="submit" variant="primary" :disabled="send_disabled">Опубликовать</b-button>

            </div>
        </b-form>
  </div>
</template>

<style scoped>

</style>

<script>
  import UploadImages from "vue-upload-drop-images"
  export default {
    components: {
        UploadImages,
    },
    data() {
      return {
        err: null,
        image: null,
        carmodel_disabled: true,
        send_disabled: true,
        showDismissibleAlert: false,
        showSuccess: false,
        brand: null,
        form: {
            power: null,
            fuel: null,
            drive: null,
            transmission: null,
            carbody: null,
            description: null,
            price: null,
            mileage: null,
            prod_year: null,
            owners: null,
            color: null,
            carmodel: null,
        },
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
            { value: null, text: 'Выберите марку', disabled: true}
        ],
        carmodel_options: [
            { value: null, text: 'Выберите модель', disabled: true}
        ]
      }
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
    },
    methods: {
        handleImages(files){
            this.image = files;
            if (files.length > 0)
                this.send_disabled = false
            else
                this.send_disabled = true
        },
        carbrand_entered() {
            this.carmodel_options = [{ value: null, text: 'Выберите модель', disabled: true}];
            this.carmodel_disabled = false;
            let link = '/api/models/?brand=' + this.brand;
            this.form.carmodel = null;
            this.$api
            .get(link)
            .then(response => {
                let models_arr = response.data;
                for (let car in models_arr) {
                    this.carmodel_options.push({value: models_arr[car].id, text: models_arr[car].name})
                }
            });
        },
        publish() {
            let formData = new FormData();
            for (let obj in this.form) {
                formData.append(obj, this.form[obj]);
            }
            for (let img in this.image) {
                formData.append('file', this.image[img]);
            }
            this.$api.post('/api/adverts/', formData, { headers: { "Content-Type": "multipart/form-data" } })
            .then((response) => {
                this.showSuccess = true;
                this.$router.push({name: 'Detail', params: {id: response.data.id}})
            })
            .catch(err => {
                this.err = err.request.response;
                this.showDismissibleAlert = true;
            })
        },
    }
}
</script>
