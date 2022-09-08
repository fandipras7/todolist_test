<template>
  <div class="container" style="margin-top: 200px">
    <div class="row justify-content-md-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header bg-warning text-center" style="font-weight: 500">
            Login Todo App
          </div>
          <div class="card-body">
            <div class="alert alert-danger" v-for="(error, index) in errors" :key="index">
              {{ error[0] }}
            </div>
            <form method="post" @submit.prevent="userLogin">
              <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" v-model="login.username" class="form-control" placeholder="Enter email">
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" v-model="login.password" class="form-control" placeholder="Password">
              </div>
              <div class="d-flex align-items-center">
                <button style="height: 40px" type="submit" class="btn btn-warning">login</button>
                <nuxt-link class="nav-link" to="/register"><button type="submit" class="btn btn-warning">Signup</button>
                </nuxt-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    middleware: 'guest',

    data() {
      return {
        login: {
          username: '',
          password: ''
        },
        errors: null
      }
    },
    methods: {
      async userLogin() {
        try {
          let response = await this.$auth.loginWith('local', {
            data: JSON.stringify(this.login),
            headers: {
              'Content-type': 'application/json',
              "Access-Control-Allow-Origin": "http://52.77.253.103:3000/api/v1/auth/login"
            }
          })
          console.log(response)

          this.$router.push('/');

        } catch (e) {
          this.errors = e.response.data.errors
        }
      }
    }
  }
</script>