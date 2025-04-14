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
    class="fixed lg:static top-0 left-0 h-screen w-60 bg-white text-gray-900 dark:bg-gradient-to-br dark:from-[#0F2027] dark:via-[#203A43] dark:to-[#2C5364] dark:text-white shadow-md dark:shadow-none z-40"
    :class="sidebarClasses"
  >
    <div class="border-b border-gray-300 dark:border-white/10 py-[6%] px-2 flex justify-center">
      <span
        class="text-2xl md:text-3xl lg:text-3xl font-bold text-green-600 dark:text-green-400 tracking-wide"
      >
        Fusion<span class="text-green-500 dark:text-green-300">X</span>
      </span>
    </div>

    <nav class="mt-6 px-2">
      <ul class="space-y-2">
        <li v-for="item in menuItems" :key="item.path">
          <RouterLink
            :to="item.path"
            class="group flex items-center px-3 py-3 rounded-lg transition-all duration-300 ease-in-out transform-gpu will-change-transform"
            :class="{
              'bg-gray-200 dark:bg-white/15 font-medium text-gray-900 dark:text-white':
                route.path === item.path,
              'text-gray-600 hover:bg-gray-100 hover:text-black dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/10':
                route.path !== item.path,
            }"
          >
            <component
              :is="item.icon"
              class="w-5 h-6 transition-transform duration-300 ease-in-out transform-gpu group-hover:scale-110"
            />
            <span
              class="ml-3 whitespace-nowrap text-sm md:text-base lg:text-lg xl:text-md font-medium transition-all duration-300 ease-in-out transform-gpu group-hover:translate-x-1 group-hover:font-semibold will-change-transform"
            >
              {{ item.label }}
            </span>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>