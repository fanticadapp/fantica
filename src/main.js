import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify'
import axios from "axios";

Vue.config.productionTip = false
Vue.prototype.$http = axios;
Vue.prototype.$HOST = 'http://64.225.5.32'; // 'http://localhost:3005';
const VueCookie = require('vue-cookie');
Vue.use(VueCookie);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
