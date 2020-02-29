import Vue from "vue";
import Router from "vue-router";
import Accueil from "./pages/Accueil.vue";
import StarterNavbar from "./layout/StarterNavbar.vue"
import MainFooter from "./layout/MainFooter.vue"
import Register from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/ProfilePage'


Vue.use(Router);

const router = new Router({

  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/accueil"
    },
    {
      path: "/accueil",
      name: "accueil",
      components: {default: Accueil, header: StarterNavbar, footer: MainFooter},
      props: {header: {colorOnScroll: 450}}
    },
    {
      path: "/login",
      name: "login",
      components: {default: LoginPage, header: StarterNavbar, footer: MainFooter},
      props: {header: {colorOnScroll: 450}},
      meta: {
        auth: false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        auth: false
      }
    },
    // USER ROUTES
    {
      path: '/dashboard',
      name: 'dashboard',
      component: {default: Dashboard, header: StarterNavbar, footer: MainFooter},
      meta: {
        auth: true
      }
    }
  ],
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  },
});

export default router;
