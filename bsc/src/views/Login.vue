<template>
  <div class="mt-2">
    <b-form>
      <b-form-group id="input-group-1" label="Имя пользователя:" label-for="input-1">
        <b-form-input
          id="input-1"
          type="text"
          placeholder="Имя пользователя"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Пароль:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="password"
          placeholder="Пароль"
          required
        ></b-form-input>
      </b-form-group>

      <b-button block type="submit" variant="primary">Войти</b-button>
    </b-form>
    
    <b-button block to="/">Зарегистрироваться</b-button>
  </div>
</template>