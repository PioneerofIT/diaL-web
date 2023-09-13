import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainLayout',
      component:() => import ('../MainLayout.vue')
    },
    {
      path: '/LiveSensorPage',
      name: 'LiveSensorPage',
      component: () => import('../component/LiveSensorPage.vue') 
    },
    {
      path: '/TwinPage',
      name: 'TwinPage',
      component: () => import('../component/TwinPage.vue') 
    },
    {
      path: '/MLPage',
      name: 'MLPage',
      component: () => import('../component/MLPage.vue') 
    },
    {
      path: '/LiveCCTV',
      name: 'LiveCCTV',
      component: () => import('../component/LiveCCTV.vue') 
    }
    
  ]
});

