<template>
<header>
    <div id="nav">
        <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-brand href="#">BSC</b-navbar-brand>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <router-link to="/"><b-nav-item href="#">Объявления</b-nav-item></router-link>
              <router-link to="/"><b-nav-item href="#">Продать</b-nav-item></router-link>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <router-link to="/"><b-nav-item href="#">Войти</b-nav-item></router-link>
              <router-link to="/"><b-nav-item href="#">Зарегистрироваться</b-nav-item></router-link>
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