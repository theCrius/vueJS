import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Vuetify from "vuetify";
Vue.use(Vuetify);

import Vuelidate from "vuelidate";
import "vuetify/dist/vuetify.min.css";
Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
