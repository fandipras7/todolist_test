<template>
<div class="container" style="margin-top: 180px">
  <div class="row justify-content-md-center">
    <div class="col-md-6">
    <div class="card">
      <div class="card-header bg-warning text-center" style="font-weight: 500"">
        Register
      </div>
      <div class="card-body">
        <div class="alert alert-danger" v-for="(error, index) in errors" :key="index">
      {{ error[0] }}
       </div>
        <form method="post" @submit.prevent="register">
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" v-model="username" class="form-control" placeholder="Enter Username">
          </div>
          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" v-model="email" class="form-control" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" v-model="password" class="form-control"  placeholder="Password">
          </div> 
          <div class="form-group">
            <label for="confirmpassword">Confirm Password</label>
            <input type="password" v-model="confirmpassword" class="form-control"  placeholder="Confirm Password">
          </div> 
          <div class="d-flex align-items-center">
            <button style="height: 40px" type="submit" class="btn btn-warning">Submit</button>
            <nuxt-link class="nav-link" to="/login"><button type="submit" class="btn btn-warning">Login</button>
            </nuxt-link>
          </div>
        </form>
      </div>
     </div>
    </div>
  </div>
</div >
</template>
 
<script> 
export default { 
 middleware: 'guest',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmpassword: '',
      errors: null
    }
  },
  methods: {
    async register() {
      try {
        await this.$axios.post('v1/auth/signup', {
          username: this.username,
          email: this.email,
          password: this.password,
          confirm_password: this.confirmpassword
        }) 

      this.$router.push('/login')
      
      } catch (e) {
        this.errors = e.response.data.errors
      }
    }
  }
}
</script>