import Vue from 'vue';
import App from './App.vue';
import router from './routers/index'; // Assuming this is your router configuration
import BootstrapVue from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';



Vue.use(BootstrapVue);
Vue.config.productionTip = false;


new Vue({
  router, // Use the router
  render: h => h(App),
}).$mount('#app');
