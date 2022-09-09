//Navbar.vue
<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand">
        <h3>Todo App</h3>
      </a>
      <button v-if="isAuth" @click="onLogout" class="btn btn-outline-success btn-sm " type="submit">Logout</button>

      <nuxt-link v-else class="nav-link" to="/login"> <button class="btn btn-outline-success btn-sm "
          type="submit">Login</button></nuxt-link>
    </div>
  </nav>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    computed: {
      ...mapState(['isAuth']),
    },

    methods: {
     async onLogout() {
         await this.$auth.logout()
         this.$router.push('/login')
      }
    },
  }
</script>