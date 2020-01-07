import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _65ccee0c = () => interopDefault(import('../pages/formTest.vue' /* webpackChunkName: "pages/formTest" */))
const _18c317e6 = () => interopDefault(import('../pages/listTest.vue' /* webpackChunkName: "pages/listTest" */))
const _bed6997a = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
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
    path: "/",
    component: _5225dfa8,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
