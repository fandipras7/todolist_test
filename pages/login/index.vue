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
                                        <h1 class="h4 text-gray-900 mb-4">Login</h1>
                                    </div>
                                    <form method="post" @submit.prevent="submit">
                                        <div class="form-group">
                                            <input type="email" class="form-control form-control-user"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Enter Email Address..." v-model="auth.username">
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Password"
                                                v-model="auth.password">
                                        </div>
                                        <button style="width: 100%" type="submit"
                                            class="btn btn-primary">Login</button>
                                    </form>
                                    <div class="text-center mt-2">
                                        <nuxt-link :to="{name: 'register'}">Create Account</nuxt-link>
                                    </div>
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
    import { mapMutations } from 'vuex'

    export default {
        auth: false,
        data() {
            return {
                auth: {
                    username: null,
                    password: null,
                }
            }
        },
        mounted() {
            if (this.$auth.loggedIn) {
                this.$router.push('/')
            }
        },
        methods: {
            ...mapMutations(['SET_IS_AUTH']),
            submit() {
                this.$auth.loginWith('local', {
                    data: {
                        username: this.auth.username,
                        password: this.auth.password
                    }
                }).then(() => {
                    this.SET_IS_AUTH(true)
                    alert('Welcome')
                    this.$router.push('/')
                }).catch((e)=>{
                    alert(e.response.data.message)
                })
            }
        }
    }
</script>