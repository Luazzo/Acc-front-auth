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
                <li class="nav-item nav-link" style="cursor: pointer;" @click.prevent="logoutUser">
                    Deconnexion {{loggedIn}} XX
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
    import {mapMutations, mapGetters, mapState, mapActions} from "vuex";
    import Vue from "vue";

    export default {
        name: 'main-navbar',
        components: {
            DropDown,
            Navbar,
            NavbarToggleButton,
            NavLink,
            [Popover.name]: Popover
        },
        data(){
            return{
            }
        },

        computed:{
            //...mapState(['token']),

            /*token:{
                get: function () {
                    return (this.$store.state.token !== '')
                },
            }*/

            loggedIn() {
                console.log('StarterNavbar ', this.$store.state.token )
                console.log(this.$store.state.token !== '' ) //true
                return (this.$store.state.token !== '')
            }
        },

        methods:{
            ...mapActions(['logoutUser']),

            /*updateToken: async function (newValue) {

                this.$nextTick(function () {
                    this.$store.state.token = newValue
                })
            },*/
        },

        mounted() {
            console.log("token : " + this.$store.state.token )
            // Vue.nextTick(callback)

            /* this.updateToken(this.token)

            Vue.nextTick(function () {
                console.log(this.$store.state.token !== '' )
                return (this.$store.state.token !== '')
            })*/
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
