<template>
<header>
    <div id="nav">
        <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-brand to="/">BSC</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item to="/">Объявления</b-nav-item>
              <b-nav-item :to="{name: 'publish'}">Продать</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item :to="{name: 'login'}" v-if="!$store.getters.loggedIn">Войти</b-nav-item>
              <b-nav-item-dropdown right v-else>
                <!-- Using 'button-content' slot -->
                <template #button-content>
                    <em>{{ $store.state.username }}</em>
                </template>
                <b-dropdown-item :to="{name: 'user', params: {id: $store.state.id}}">Профиль</b-dropdown-item>
                <b-dropdown-item @click="logout">Выйти</b-dropdown-item>
                </b-nav-item-dropdown>
            
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
    </div>
</header>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('userLogout')
    }
  }
}
</script>