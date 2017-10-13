import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/view/index';
import Anchor from '@/components/Anchor';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'v-link-active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/anchor',
      name: 'Anchor',
      component: Anchor
    },
  ],
});
