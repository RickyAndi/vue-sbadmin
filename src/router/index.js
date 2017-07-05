/* eslint-disable */

import Vue from 'vue'
import Router from 'vue-router'

import Table from '@/components/pages/Table'
import Dashboard from '@/components/pages/Dashboard';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
    	path: '/table',
    	name: 'Table',
    	component: Table
    },
    {
      path: '/',
      name: 'Home',
      redirect: '/dashboard'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    console.log('cok')
    return { x: 0, y: 0 }
  }
})
