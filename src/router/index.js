import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/login'
import Index from '@/pages/index/Index'
import Setting from '@/pages/system/components/Setting'
import Personal from '@/pages/system/components/Personal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }, {
      path: '/index',
      name: 'Index',
      component: Index
    }, {
      path: '/setting',
      name: 'Setting',
      component: Setting
    }, {
      path: '/personal',
      name: 'Personal',
      component: Personal
    }
  ]
})
