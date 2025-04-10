import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import MyStrategies from '@/views/MyStrategies.vue'
import Strategies from '@/views/Strategies.vue'
import Broker from '@/views/Broker.vue'
import Position from '@/views/Position.vue'
import Order from '@/views/Order.vue'
import videos from '@/views/Videos.vue'
import Profile from '@/views/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Dashboard', component: Dashboard, meta: { title: 'Dashboard' } },
    {
      path: '/my-strategies',
      name: 'MyStrategies',
      component: MyStrategies,
      meta: { title: 'MyStrategies' },
    },
    {
      path: '/strategies',
      name: 'Strategies',
      component: Strategies,
      meta: { title: 'Strategies' },
    },
    {
      path: '/broker',
      name: 'Broker',
      component: Broker,
      meta: { title: 'Broker' },
    },
    {
      path: '/position',
      name: 'Position',
      component: Position,
      meta: { title: 'Position' },
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
      meta: { title: 'Order' },
    },
    {
      path: '/videos',
      name: 'Videos',
      component: videos,
      meta: { title: 'videos' },
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: { title: 'Profile' },
    },
  ],
})

export default router
