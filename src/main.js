import Vue from 'vue';
import App from './App.vue';
import router from './routers/index'; // index.js 라우터 설정 임포트

Vue.config.productionTip = false;

new Vue({
  router, // 라우터 연결
  render: h => h(App),
}).$mount('#app');
