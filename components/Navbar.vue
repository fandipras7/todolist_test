//Navbar.vue
<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand"><h3>Todo App</h3></a>
      <nuxt-link class="nav-link" to="/login"> <button class="btn btn-outline-success btn-sm "
        type="submit">Logout</button></nuxt-link>
      <!-- <div class="d-flex">
        
        <nuxt-link class="nav-link" to="/register"> <button class="btn btn-outline-success btn-sm "
            type="submit">Signup</button></nuxt-link>
      </div> -->
    </div>
  </nav>
</template>

<script>
  export default {}
</script>