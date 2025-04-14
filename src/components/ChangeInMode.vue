<script setup>
import { useThemeStore } from '@/stores/theme'
const themeStore = useThemeStore()
</script>
<template>
  <div
    @click="themeStore.toggleTheme"
    class="w-12 h-7 sm:w-14 sm:h-8 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 cursor-pointer transition-colors duration-300"
  >
    <div
      class="w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center"
      :class="
        themeStore.isDark
          ? 'translate-x-5 sm:translate-x-6 bg-white text-white'
          : 'translate-x-0 bg-white text-yellow-400'
      "
    >
      <img
        v-if="themeStore.isDark"
        src="@/assets/images/darkmode.svg"
        alt="Dark Mode"
        class="w-3 h-3 sm:w-4 sm:h-4"
      />
      <img
        v-else
        src="@/assets/images/lightmode.svg"
        alt="Light Mode"
        class="w-3 h-3 sm:w-4 sm:h-4"
      />
    </div>
  </div>
</template>
