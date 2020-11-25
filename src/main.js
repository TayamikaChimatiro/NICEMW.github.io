import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios"
import MaterialKit from "./plugins/material-kit";
import 'es6-promise/auto';
import VueResourse from 'vue-resource'
import Vue2Editor from "vue2-editor";
import {fb}   from './firebaseInit'

Vue.use(Vue2Editor);

Vue.use(VueResourse)
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

Vue.use(MaterialKit);

const NavbarStore = {
  showNavbar: false
};

Vue.mixin({
  data() {
    return {
      NavbarStore
    };
  }
});

let app = '';

fb.auth().onAuthStateChanged( (user) => {
  console.log(user);
  if(!app) {
   app = new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
   
  }
})

