import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import Exchange from '../views/Exchange.vue'
import Assets from '../views/Assets.vue'
import Transaction from '../views/Transaction.vue'
import Analysis from '../views/Analysis.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Landing
  },
  {
    path: '/exchange',
    name: 'Exchange',
    component: Exchange
  },
  {
    path: '/assets',
    name: 'Assets',
    component: Assets
  },
  {
    path: '/transactions',
    name: 'Transaction',
    component: Transaction
  },
  {
    path: '/analysis',
    name: 'Analysis',
    component: Analysis
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
