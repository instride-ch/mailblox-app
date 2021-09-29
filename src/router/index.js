import { createRouter, createWebHistory } from 'vue-router'
import Map from '@/views/Map'
import Addresses from '@/views/Addresses'

const routes = [
  {
    path: '/',
    name: 'Map',
    component: Map
  },
  {
    path: '/adressen',
    name: 'Addresses',
    component: Addresses
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
