import Vue from 'vue'
import App from './App.vue'
import router from './router'
import rihuanshi from "./views/rihuanshi.vue";
import count from "./count/count";
import guessNumCss from "./guessNum/guessNumCss";


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)}).$mount('#app1')
  // render: h => h(count)}).$mount('#app1')
  // render: h => h(rihuanshi)}).$mount('#app1')

