import Vue from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import store from "./store";
import "./plugins/element.js";

Vue.config.productionTip = false;
Vue.use(router);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

