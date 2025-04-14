<script setup>
import { ref, computed } from 'vue'
import ChangeInMode from './ChangeInMode.vue'
import { Bell, ChevronDown, AlignJustify } from 'lucide-vue-next'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const currentTitle = computed(() => route.name)

defineEmits(['toggleSidebar'])

const isDropdownOpen = ref(false)

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full z-40 lg:left-60 lg:w-[calc(100%-15rem)] h-16 flex items-center justify-between px-4 bg-white/80 text-gray-800 shadow dark:bg-gradient-to-br dark:from-[#0F2027] dark:via-[#203A43] dark:to-[#2C5364] dark:text-white dark:shadow-md backdrop-blur-xl border-b border-white/20 transition-all duration-300"
  >
    <div class="flex items-center space-x-4">
      <button
        class="lg:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-white/10"
        @click="$emit('toggleSidebar')"
      >
        <AlignJustify class="h-6 w-6 text-gray-800 dark:text-white" />
      </button>
      <h1 class="text-lg font-semibold text-gray-800 dark:text-white whitespace-nowrap">
        {{ currentTitle }}
      </h1>
    </div>

    <div class="flex items-center space-x-4">
      <div class="block p-4 lg:scale-90 sm:ml-[-4px]">
        <ChangeInMode />
      </div>

      <!-- <Bell class="h-6 w-6 cursor-pointer text-gray-800 dark:text-white" /> -->
      <Bell
        class="h-6 w-6 cursor-pointer text-gray-800 dark:text-white transition-all duration-300 ease-in-out transform hover:scale-110 hover:text-gray-800 dark:hover:text-gray-800"
      />

      <div class="relative">
        <div
          @click="toggleDropdown"
          class="flex items-center space-x-2 border-2 p-2 rounded-lg cursor-pointer border-gray-300 dark:border-[#203A43]"
        >
          <img src="../assets/images/Frame.svg" alt="Profile" class="h-8 w-8 rounded-lg" />
          <ChevronDown class="h-4 w-4 text-gray-800 dark:text-white" />
        </div>

        <div
          v-if="isDropdownOpen"
          class="absolute right-0 mt-2 w-48 bg-white dark:bg-[#203A43] border border-gray-300 dark:border-[#203A43] rounded-lg shadow-lg z-10"
        >
          <div class="p-3 border-b border-gray-200 dark:border-[#2C5364]">
            <p class="text-gray-800 dark:text-white font-semibold">Roshni Chandra</p>
            <p class="text-gray-500 dark:text-gray-400 text-sm">chandra012@email.com</p>
          </div>
          <ul class="py-2">
            <li
              class="px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#2C5364] text-gray-800 dark:text-white cursor-pointer"
            >
              <RouterLink to="/profile">My Profile</RouterLink>
            </li>
            <li
              @click="toggleDropdown"
              class="px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#2C5364] text-gray-800 dark:text-white cursor-pointer"
            >
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.glass-upgrade {
  @apply border border-gray-300 dark:border-white/20;
}
.glass-upgrade {
  @apply backdrop-blur-xl border border-white/20 shadow-md hover:shadow-lg transition-all duration-300;
}
</style>
