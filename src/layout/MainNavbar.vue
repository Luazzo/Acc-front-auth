<template>
    <navbar position="fixed"
            :color-on-scroll="colorOnScroll"
            menu-classes="ml-auto">

        <template slot-scope="{toggle, isToggled}">
            <router-link v-popover:popover1 class="navbar-brand" to="/accueil">
                <div class="logo-img" style="">
                </div>
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

            <!--   <tabs slot="raw-content" tab-content-classes="tab-content-padding text-center">
                <tab-pane>
                    <template slot="label">
                        <i class="now-ui-icons objects_umbrella-13"></i> Home
                    </template>
                </tab-pane>
                <tab-pane>
                    <template slot="label">
                        <i class="now-ui-icons shopping_cart-simple"></i> Profile
                    </template>
                </tab-pane>
                <tab-pane>
                    <template slot="label">
                        <i class="now-ui-icons shopping_shop"></i> Messages
                    </template>

                </tab-pane>
                <tab-pane>
                    <template slot="label">
                        <i class="now-ui-icons ui-2_settings-90"></i> Settings
                    </template>
                </tab-pane>
            </tabs>




            <drop-down tag="li" title="Particulier" class="nav-item">
                <nav-link to="/components">
                    <font-awesome-icon icon="building" class="now-ui-icons"/> Habitation
                </nav-link>
                <nav-link to="/components">
                    <font-awesome-icon icon="car" class="now-ui-icons"/> Voiture
                </nav-link>
                <nav-link to="/components">
                    <font-awesome-icon icon="heart" class="now-ui-icons"/>  Famille
                </nav-link>
                <nav-link to="/components">
                    <font-awesome-icon icon="leaf" class="now-ui-icons"/>  Vie
                </nav-link>
                <nav-link to="/components">
                    <font-awesome-icon icon="hospital-alt" class="now-ui-icons"/>  Hospitalisation
                </nav-link>
                <nav-link to="/components">
                    <font-awesome-icon icon="shield-alt" class="now-ui-icons"/>  Protection juridique
                </nav-link>
                <nav-link to="/components">
                    <font-awesome-icon icon="globe" class="now-ui-icons"/>  Voyage
                </nav-link>
            </drop-down>


            <drop-down tag="li" title="Entreprise" class="nav-item">
                <nav-link class="dropdown-item" to="/sections#headers">
                    <font-awesome-icon icon="fire-alt" class="now-ui-icons"/> Encendie
                </nav-link>
                <nav-link class="dropdown-item" to="/sections#features">
                    <font-awesome-icon icon="car" class="now-ui-icons"/> Véhicules
                </nav-link>
                <nav-link class="dropdown-item" to="/sections#blogs">
                    <font-awesome-icon icon="address-card" class="now-ui-icons"/> Responsabilité
                </nav-link>
                <nav-link class="dropdown-item" to="/sections#teams">
                    <font-awesome-icon icon="first-aid" class="now-ui-icons"/> Accident de travail
                </nav-link>
                <nav-link class="dropdown-item" to="/sections#projects">
                    <font-awesome-icon icon="coins" class="now-ui-icons"/> Placement et prévoyance
                </nav-link>
                <nav-link class="dropdown-item" to="/sections#pricing">
                    <font-awesome-icon icon="shield-alt" class="now-ui-icons"/> Protection juridique
                </nav-link>
            </drop-down>    -->


        </template>
    </navbar>
</template>

<script>
    import { DropDown, NavbarToggleButton, Navbar, NavLink, TabPane, Tabs} from '../components';
    import { Popover } from 'element-ui'
    export default {
        name: 'main-navbar',
        props: {
            transparent: Boolean,
            colorOnScroll: Number,
        },
        components: {
            TabPane,
            Tabs,
            DropDown,
            Navbar,
            NavbarToggleButton,
            NavLink,
            [Popover.name]: Popover
        }
    }
</script>

<style scoped>
    .logo-img{
        background-image: url('/img/icons/logo-horizont.jpg');
        background-size: contain; background-repeat: no-repeat;
        height:80px; width:220px; background-position:0 6px; display: inline-block;
    }
    .navbar-brand {
        padding-top: 0 ;
        padding-bottom: 0;
    }

</style>
