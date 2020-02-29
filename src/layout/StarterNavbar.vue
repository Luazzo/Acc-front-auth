<template>
    <navbar position="fixed"
            type="white"
            menu-classes="ml-auto">

        <template slot-scope="{toggle, isToggled}">
            <router-link v-popover:popover1 class="" to="/accueil">
                <div class="logo-img" style=""> </div>
            </router-link>
        </template>


        <template slot="navbar-menu">
            <router-link class="nav-item nav-link" to="/accueil">
                Accueil
            </router-link>

            <router-link class="nav-item nav-link" to="/particulier">
                Particulier
            </router-link>

            <router-link class="nav-item nav-link" to="/presentation">
                Entreprise
            </router-link>

            <router-link class="nav-item nav-link" to="/presentation">
                Conditions générales
            </router-link>

            <router-link class="nav-item nav-link" to="/contact">
                Contact
            </router-link>
            <template v-if="loggedIn">
                <li class="nav-item nav-link" style="cursor: pointer;" @click.prevent="logout">
                    Deconnexion
                </li>
            </template>
            <template v-else>

                <router-link class="nav-item nav-link" to="/register">
                    Inscription
                </router-link>

                <router-link class="nav-item nav-link" to="/login">
                    Connexion
                </router-link>
            </template>
        </template>

    </navbar>
</template>

<script>
    import { DropDown, NavbarToggleButton, Navbar, NavLink } from '@/components';
    import { Popover } from 'element-ui'
    import {mapMutations, mapState} from "vuex";

    export default {
        name: 'main-navbar',
        components: {
            DropDown,
            Navbar,
            NavbarToggleButton,
            NavLink,
            [Popover.name]: Popover
        },

        computed:{
            ...mapState(["loggedIn"]),
            /*loggedIn(){
                return (localStorage.getItem('user') != null) ? true: false}

            */
        },
        methods:{
            ...mapMutations(['changeLoggedIn']),

            logout() {
                let url = "auth/logout"

                this.$http.post( url,{
                    'token' : JSON.parse(localStorage.getItem('user'))
                })
                .then(response => {
                    if (response.data.message) {

                        localStorage.removeItem('user')

                        this.changeLoggedIn(false)
                        console.log( this.loggedIn )

                        if(this.$route.params.nextURL != null){
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
            }
        },

        created() {
            console.log(localStorage.getItem('user'))
        }

    }
</script>

<style scoped>
    .logo-img{
        background-image: url('/img/icons/logo-horizont.jpg');
        background-size: contain;
        background-repeat: no-repeat;
        height:60px;
        width:200px;
        display: inline-block;
    }
    .navbar-brand {
        padding-top: 0 ;
        padding-bottom: 0;
    }

</style>
