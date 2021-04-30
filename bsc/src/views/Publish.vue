<template>
    <div>
        <b-form class="row">
            <div class="col-6">
            <b-form-group
                id="input-group-1"
                label="Марка"
                label-for="input-1"
            >
            <b-form-input
                id="input-1"
                v-model="username"
                placeholder="Марка"
                required
            ></b-form-input>
            </b-form-group>

            <b-form-group
                id="input-group-2"
                label="Модель"
                label-for="input-2"
            >
            <b-form-input
                id="input-2"
                v-model="username"
                placeholder="Модель"
                required
            ></b-form-input>
            </b-form-group>

            <b-form-group
                id="input-group-3"
                label="Мощность "
                label-for="input-3"
            >
            <b-form-input
                id="input-3"
                v-model="username"
                placeholder="Мощность"
                required
            ></b-form-input>
            </b-form-group>

            <b-form-group
                id="input-group-4"
                label="Топливо"
                label-for="input-4"
            >
            <b-form-select 
                id="input-4"
                v-model="fuel"
                :options="fuel_options"
                required
            ></b-form-select>
            </b-form-group>

            <b-form-group
                id="input-group-5"
                label="Привод"
                label-for="input-5"
            >
            <b-form-select 
                id="input-5"
                v-model="drive"
                :options="drive_options"
                required
            ></b-form-select>
            </b-form-group>

            <b-form-group
                id="input-group-6"
                label="Трансмиссия"
                label-for="input-6"
            >
            <b-form-select 
                id="input-6"
                v-model="transmission"
                :options="transmission_options"
                required
            ></b-form-select>
            </b-form-group>
            </div>

            <div class="col-6">
            <b-form-group
                id="input-group-7"
                label="Кузов"
                label-for="input-7"
            >
            <b-form-select 
                id="input-7"
                v-model="carbody"
                :options="carbody_options"
                required
            ></b-form-select>
            </b-form-group>

            <b-form-group
                id="input-group-8"
                label="Цена"
                label-for="input-8"
            >
            <b-form-input
                id="input-8"
                v-model="username"
                placeholder="Цена"
                required
            ></b-form-input>
            </b-form-group>

            <b-form-group
                id="input-group-9"
                label="Пробег"
                label-for="input-9"
            >
            <b-form-input
                id="input-9"
                v-model="username"
                placeholder="Пробег"
                required
            ></b-form-input>
            </b-form-group>

            <b-form-group
                id="input-group-10"
                label="Количество владельцев по ПТС"
                label-for="input-10"
            >
            <b-form-input
                id="input-10"
                v-model="username"
                placeholder="Количество владельцев по ПТС"
                required
            ></b-form-input>
            </b-form-group>
    
            <b-form-group
                id="input-group-11"
                label="Цвет"
                label-for="input-11"
            >
            <b-form-select 
                id="input-7"
                v-model="color"
                :options="color_options"
                required
            ></b-form-select>
            </b-form-group>

            <b-form-group
                id="input-group-12"
                label="Год выпуска"
                label-for="input-12"
            >
            <b-form-input
                id="input-12"
                v-model="username"
                placeholder="Год выпуска"
                required
            ></b-form-input>
            </b-form-group>
    
            <b-form-group
                id="input-group-13"
                label="Описание"
                label-for="input-13"
            >
            <b-form-input
                id="input-13"
                v-model="username"
                placeholder="Описание"
                required
            ></b-form-input>
            </b-form-group>
            </div>
        </b-form>
    </div>    
</template>

<style scoped>

</style>

<script>
  export default {
    data() {
      return {
        fuel: null,
        fuel_options: [
          { value: 'PR', text: 'Бензин'},
          { value: 'DS', text: 'Дизель' },
          { value: 'EL', text: 'Электричество' },
        ],
        drive: null,
        drive_options: [
            { value: 'FW', text: 'Передний'},
            { value: 'AW', text: 'Полный'},
            { value: 'RW', text: 'Задний'},
        ],
        transmission: null,
        transmission_options: [
            { value: 'MT', text: 'Механическая'},
            { value: 'AT', text: 'Автоматическая'},
            { value: 'CT', text: 'Вариатор'},
            { value: 'RT', text: 'Роботизированная'},
        ],
        carbody: null,
        carbody_options: [
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
        color: null,
        color_options: [
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
        ]
      }
    }
  }
</script>
