import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

/* Vue.component('pulse-loader', require('vue-spinner/src/PulseLoader.vue')); */

import Vuelidate from 'vuelidate';
Vue.use(Vuelidate)

var firebase = require("firebase/app");

require("firebase/auth");
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyA2gVn4BYtz5TsBhUzQkoTDnOOjwwZPTag",
  authDomain: "crud-firebase-623a9.firebaseapp.com",
  databaseURL: "https://crud-firebase-623a9.firebaseio.com",
  projectId: "crud-firebase-623a9",
  storageBucket: "crud-firebase-623a9.appspot.com",
  messagingSenderId: "672398570123",
  appId: "1:672398570123:web:1fe4677d2d2c9238ea9a8e"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

firebaseApp.firestore();


export default firebaseApp.firestore();



Vue.config.productionTip = false

firebase.auth().onAuthStateChanged((user) =>{
  if(user){
    store.dispatch('detectarUsuario', {email:user.email,uid : user.uid});
  }else{
    store.dispatch('detectarUsuario', null);
  }

  new Vue({
    router,
    store,
    /* components: {
      'PulseLoader': PulseLoader
    }, */
    render: h => h(App)
  }).$mount('#app');
  
})


