<script setup>
import {
  Home,
  CalendarArrowUp,
  Users,
  Activity,
  ChartLine,
  Video,
  ChartNoAxesCombined,
} from 'lucide-vue-next'
import { RouterLink, useRoute } from 'vue-router'
import { computed, defineProps } from 'vue'

const route = useRoute()

const props = defineProps({
  isOpen: Boolean,
})

const sidebarClasses = computed(() => {
  return [
    'transform transition-transform duration-300 ease-in-out',
    'lg:translate-x-0', 
    props.isOpen ? 'translate-x-0' : '-translate-x-full',
  ]
})

const menuItems = [
  { label: 'DashBoard', path: '/', icon: Home },
  { label: 'My Strategies', path: '/my-strategies', icon: Activity },
  { label: 'Strategies', path: '/strategies', icon: ChartLine },
  { label: 'Broker', path: '/broker', icon: Users },
  { label: 'Position', path: '/position', icon: ChartNoAxesCombined },
  { label: 'Order', path: '/order', icon: CalendarArrowUp },
  { label: 'Videos', path: '/videos', icon: Video },
]
</script>

<template>
  <aside
    class="fixed lg:static top-0 left-0 h-screen w-60 bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364] text-white z-40"
  :class="sidebarClasses"
  >
    <div class="border-b border-white/10 py-6 px-4 flex justify-center">
      <img src="../assets/images/Logo.svg" alt="Logo" class="w-40 transition-all duration-300" />
    </div>

    <nav class="mt-6 px-2">
      <ul class="space-y-2">
        <li v-for="item in menuItems" :key="item.path">
          <RouterLink
            :to="item.path"
            class="flex items-center px-3 py-3 rounded-lg transition-all duration-200"
            :class="{
              'bg-white/15 font-semibold text-white': route.path === item.path,
              'text-gray-300 hover:text-white hover:bg-white/10': route.path !== item.path,
            }"
          >
            <component :is="item.icon" class="w-5 h-6" />
            <span class="ml-3 whitespace-nowrap">{{ item.label }}</span>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>
