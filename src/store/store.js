import Vue from "vue"
import VueX from "vuex"
//import axios from 'axios';


Vue.use(VueX)

export const store = new VueX.Store({
    state:{
        jwt: null,
        loggedIn : false
    },

    getters:{
    },

    mutations:{
        changeLoggedIn(state, etat){
            return state.loggedIn = etat
        },
    },

    actions:{
    }


})
