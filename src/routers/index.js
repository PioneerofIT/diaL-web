import Vue from 'vue';
import Router from 'vue-router';
import LiveSensorPage from '../components/LiveSensorPage.vue';
import MainLayout from '../MainLayout.vue'; // MainLayout 컴포넌트를 import

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainLayout',
      component: MainLayout
    },
    {
      path: '/LiveSensorPage',
      name: 'LiveSensorPage',
      component: LiveSensorPage
    }
  ]
});

