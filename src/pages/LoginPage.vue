<template>
    <div class="page-header header-filter" filter-color="orange">
        <div class="page-header-image"
             style="background-image: url('img/login.jpg')">
        </div>
        <div class="content">
            <div class="container">
                <div class="col-md-5 ml-auto mr-auto">
                    <card type="login" plain>
                        <div slot="header" class="logo-container">
                            <img v-lazy="'img/now-logo.png'" alt="">
                        </div>


                        <fg-input addon-left-icon="now-ui-icons ui-1_email-85"
                                  v-model="email"
                                  placeholder="Email">
                        </fg-input>

                        <fg-input addon-left-icon="now-ui-icons text_caps-small"
                                  v-model="password"
                                  placeholder="Mot de passe">
                        </fg-input>

                        <template slot="raw-content">
                            <div class="card-footer text-center">
                                <a href="#pablo" @click.prevent="login" class="btn btn-primary btn-round btn-lg btn-block">Se connecter</a>
                            </div>
                            <div class="pull-left">
                                <h6>
                                    <a href="#pablo" class="link footer-link">Create Account</a>
                                </h6>
                            </div>
                            <div class="pull-right">
                                <h6>
                                    <a href="#pablo" class="link footer-link">Need Help?</a>
                                </h6>
                            </div>
                        </template>
                    </card>
                </div>
            </div>
        </div>
        <main-footer></main-footer>
    </div>
</template>
<script>
    import {mapState, mapActions, mapGetters, mapMutations} from "vuex"
    import { Card, Button, FormGroupInput } from '@/components';
    import MainFooter from '@/layout/MainFooter';
    export default {
        name: 'login-page',
        bodyClass: 'login-page',
        components: {
            Card,
            MainFooter,
            [Button.name]: Button,
            [FormGroupInput.name]: FormGroupInput
        },
        data() {
            return {
                email: null,
                password: null,
                success: false,
                has_error: false,
                error: ''
            }
        },
        computed:{

            ...mapState(["loggedIn"]),
        },
        methods: {
            ...mapMutations(['changeLoggedIn']),

            login(){
                if (this.email.length > 0 && this.password.length > 0) {
                    let url = "auth/login"

                    this.$http.post(url, {
                        email: this.email,
                        password: this.password,
                    })
                    .then(response => {

                        if (response.data.accessToken != null ) {

                            localStorage.setItem('user', JSON.stringify(response.data.accessToken));

                            this.changeLoggedIn(true)

                            console.log(this.loggedIn)

                            if(this.$route.params.nextURL != undefined){
                                this.$router.push(this.$route.params.nextURL)
                            }
                            else{
                                this.$router.push('/')
                            }
                        }

                    })
                    .catch(function (error) {
                        console.error(error.response);
                    });
                } else {
                    this.password = ""

                    return alert("Passwords do not match")
                }
            },

        }
    }
</script>
<style>
</style>
