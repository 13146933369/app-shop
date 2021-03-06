import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueResource from  'vue-resource'
import "./common/stylus/index.styl"

Vue.config.productionTip = false;
Vue.use(VueResource)

new Vue({
  router,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
