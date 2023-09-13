import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';  // App 컴포넌트 import 추가
import LiveSensorPage from './component/LiveSensorPage.vue';  // 경로 수정

Vue.config.productionTip = false;
Vue.use(Router);  // Vue에 Router 사용 설정

const router = new Router({
  routes: [
    {
      path: '/LiveSensorPage',
      component: LiveSensorPage
    }
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
