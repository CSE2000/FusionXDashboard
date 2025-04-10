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
    { path: '/', name: 'Dashboard', component: Dashboard },
    {
      path: '/my-strategies',
      name: 'MyStrategies',
      component: MyStrategies,
    },
    {
      path: '/strategies',
      name: 'Strategies',
      component: Strategies,
    },
    {
      path: '/broker',
      name: 'Broker',
      component: Broker,
    },
    {
      path: '/position',
      name: 'Position',
      component: Position,
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
    },
    {
      path: '/videos',
      name: 'Videos',
      component: videos,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
  ],
})

export default router
