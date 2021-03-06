import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _65ccee0c = () => interopDefault(import('../pages/formTest.vue' /* webpackChunkName: "pages/formTest" */))
const _18c317e6 = () => interopDefault(import('../pages/listTest.vue' /* webpackChunkName: "pages/listTest" */))
const _bed6997a = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _2a7e7393 = () => interopDefault(import('../pages/basicInfo/floor.vue' /* webpackChunkName: "pages/basicInfo/floor" */))
const _8d9d3280 = () => interopDefault(import('../pages/basicInfo/major.vue' /* webpackChunkName: "pages/basicInfo/major" */))
const _624df07c = () => interopDefault(import('../pages/basicInfo/organization.vue' /* webpackChunkName: "pages/basicInfo/organization" */))
const _8a322982 = () => interopDefault(import('../pages/basicInfo/role.vue' /* webpackChunkName: "pages/basicInfo/role" */))
const _4b458ff5 = () => interopDefault(import('../pages/basicInfo/teacherManages.vue' /* webpackChunkName: "pages/basicInfo/teacherManages" */))
const _f74e7796 = () => interopDefault(import('../pages/basicInfo/term.vue' /* webpackChunkName: "pages/basicInfo/term" */))
const _5225dfa8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/formTest",
    component: _65ccee0c,
    name: "formTest"
  }, {
    path: "/listTest",
    component: _18c317e6,
    name: "listTest"
  }, {
    path: "/login",
    component: _bed6997a,
    name: "login"
  }, {
    path: "/basicInfo/floor",
    component: _2a7e7393,
    name: "basicInfo-floor"
  }, {
    path: "/basicInfo/major",
    component: _8d9d3280,
    name: "basicInfo-major"
  }, {
    path: "/basicInfo/organization",
    component: _624df07c,
    name: "basicInfo-organization"
  }, {
    path: "/basicInfo/role",
    component: _8a322982,
    name: "basicInfo-role"
  }, {
    path: "/basicInfo/teacherManages",
    component: _4b458ff5,
    name: "basicInfo-teacherManages"
  }, {
    path: "/basicInfo/term",
    component: _f74e7796,
    name: "basicInfo-term"
  }, {
    path: "/",
    component: _5225dfa8,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
