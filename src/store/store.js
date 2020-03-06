import Vue from "vue"
import VueX from "vuex"
import axios from 'axios';
import router from "../router";
import createPersistedState from "vuex-persistedstate";


Vue.use(VueX)


export const store = new VueX.Store({
    plugins: [createPersistedState()],
    state:{
        user: {},
        token : "",
        loggedIn: false
    },

    getters:{
        user : state =>{ return state.user },
        token : state =>{ return state.token },
    },

    mutations:{
        SET_USER:(state,newValue)=>{
            state.user = newValue
        },
        SET_TOKEN:(state,newValue)=>{
            state.token = newValue
        },
    },

    actions:{

        loginUser({commit,state}, payload){

            axios.post("http://127.0.0.1:8000/api/auth/login", payload)
                .then(response => {

                    //Vue.set(state, "token", JSON.stringify(response.data.accessToken))
                    commit('SET_TOKEN', JSON.stringify(response.data.accessToken))

                    router.push({name:'accueil'})


                    /*Vue.nextTick(function () {
                      state.token.textContent === JSON.stringify(response.data.accessToken)
                    })*/

                })
                .catch(error => {
                    console.log(error);
                });

        },

        logoutUser({commit,state}) {

            axios.post( "http://127.0.0.1:8000/api/auth/logout",{
                'token' : JSON.parse(state.token)
            })
                .then(response => {
                    if (response.data.message) {

                        console.log(response.data.message)
                        router.push({name:'login'})

                        commit('SET_TOKEN', '')


                    }
                })
                .catch(function (error) {
                    commit('SET_TOKEN', '')
                    console.error(error.response);
                });
        }
    },


})
