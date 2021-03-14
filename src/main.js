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
  apiKey: process.env.VUE_APP_API_KEY, 
  authDomain: process.env.VUE_APP_AUTH_DOMAIN, 
  projectId: process.env.VUE_APP_PROJECT_ID, 
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET, 
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID, 
  appId: process.env.VUE_APP_APP_ID 
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

firebaseApp.firestore();


export default firebaseApp.firestore();

Vue.config.productionTip = false

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch('detectarUsuario', { email: user.email, uid: user.uid });
  } else {
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


