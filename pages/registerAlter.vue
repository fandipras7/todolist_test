<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-xl-10 col-lg-12 col-md-9">
                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block">
                                <img class="center" src="~/assets/images/logo.png" alt="">
                            </div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Register</h1>
                                    </div>
                                    <form method="post" @submit.prevent="register">
                                        <div class="form-group">
                                            <input type="text" class="form-control form-control-user" id="username"
                                                placeholder="Enter Username..." v-model="username">
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control form-control-user"
                                                id="email" aria-describedby="emailHelp"
                                                placeholder="Enter Email Address..." v-model="email">
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Password"
                                                v-model="password">
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Confirm Password"
                                                v-model="confirmpassword">
                                        </div>
                                        <button style="width: 100%" type="submit"
                                            class="btn btn-primary">Register</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .center {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
        margin-top: 30px;
    }
</style>

<script>
export default { 
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

      this.$router.push('/loginAlter')
      
      } catch (e) {
        this.errors = e.response.data.errors
      }
    }
  }
}
</script>