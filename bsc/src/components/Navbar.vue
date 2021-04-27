<template>
<header>
    <div id="nav">
        <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-brand href="#">BSC</b-navbar-brand>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item to="/">Объявления</b-nav-item>
              <b-nav-item to="/">Продать</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item to="/">Войти</b-nav-item>
              <b-nav-item to="/">Зарегистрироваться</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
    </div>
</header>
</template>

<script>
export default {
}
</script>