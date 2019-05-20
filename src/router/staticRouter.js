import TheLayout from '@/pages/layout/TheLayout'
import AppLogin from '@/pages/login/AppLogin'
import AppRegister from '@/pages/login/AppRegister'
import AppError401 from '@/pages/error/AppError401'
import AppError404 from '@/pages/error/AppError404'
import FuncHome from '@/pages/functions/home/FuncHome'
import FuncTable from '@/pages/functions/table/FuncTable'
import FuncCharts from '@/pages/functions/charts/FuncCharts'
import FuncFormsBase from '@/pages/functions/forms/FuncFormsBase'
import FuncFormsEdit from '@/pages/functions/forms/FuncFormsEdit'
import FuncDrag from '@/pages/functions/drag/FuncDrag'
import FuncUserPassword from '@/pages/functions/user/FuncUserPassword'
import FuncUserPermissions from '@/pages/functions/user/FuncUserPermissions'
import FuncAbout from '@/pages/functions/about/FuncAbout'

/* 静态页面路由 */
const staticRouter = [
  {
    path: '/',
    redirect: '/index'
  }, {
    path: '/login',
    name: 'login.login',
    component: AppLogin
  }, {
    path: '/register',
    name: 'login.register',
    component: AppRegister
  }, {
    path: '/',
    component: TheLayout,
    menu: true,
    children: [
      {
        path: '/index',
        alias: '/home',
        name: 'menu.home',
        icon: 'iconfont iconlaptop',
        component: FuncHome
      }
    ]
  }, {
    path: '/',
    component: TheLayout,
    menu: true,
    name: 'menu.manage',
    icon: 'iconfont icondatabase-fill',
    children: [
      {
        path: '/forms/base',
        name: 'menu.versionManage',
        component: FuncFormsBase
      }, {
        path: '/forms/edit',
        name: 'menu.memberManage',
        component: FuncFormsEdit
      }
    ]
  }, {
    path: '/',
    component: TheLayout,
    menu: true,
    children: [
      {
        path: '/table',
        name: 'menu.statis',
        icon: 'iconfont iconchart-line',
        component: FuncTable
      }
    ]
  }, {
    path: '/',
    component: TheLayout,
    menu: true,
    children: [
      {
        path: '/charts',
        name: 'menu.func',
        icon: 'iconfont iconall-fill',
        component: FuncCharts
      }
    ]
  }, {
    path: '/',
    component: TheLayout,
    menu: true,
    children: [
      {
        path: '/drag',
        name: 'menu.dev',
        icon: 'iconfont iconbug-report',
        component: FuncDrag
      }
    ]
  }, {
    path: '/',
    component: TheLayout,
    menu: true,
    name: 'menu.extend',
    icon: 'iconfont iconpaperplane-fill',
    children: [
      {
        path: '/user/password',
        name: 'menu.modifyPass',
        component: FuncUserPassword
      }, {
        path: '/user/permissions',
        name: 'menu.permissions',
        component: FuncUserPermissions
      }
    ]
  }, {
    path: '/',
    component: TheLayout,
    menu: true,
    children: [
      {
        path: '/about',
        name: 'menu.settings',
        icon: 'iconfont iconresource',
        component: FuncAbout
      }
    ]
  }, {
    path: '/error/401',
    name: 'error.401',
    meta: {errorPage: true},
    component: AppError401
  }, {
    path: '*',
    name: 'error.404',
    meta: {errorPage: true},
    component: AppError404
  }
]

export default staticRouter
