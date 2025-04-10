<script setup>
import { ref } from 'vue'
import { Plus, Bell, ChevronDown, AlignJustify } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

defineEmits(['toggleSidebar'])

const isDropdownOpen = ref(false)

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}
</script>

<template>
  <header
    class="glass-upgrade fixed top-0 left-0 w-full z-40 md:left-60 md:w-[calc(100%-15rem)] h-16 flex items-center justify-between px-4"
  >
    <div class="flex items-center space-x-4">
      <button class="md:hidden p-2 rounded hover:bg-white/10" @click="$emit('toggleSidebar')">
        <AlignJustify class="h-6 w-6 text-[#FFFF]" />
      </button>
      <h1 class="text-lg text-[#ffffff] font-semibold whitespace-nowrap">Hello Shubham</h1>
    </div>

    <div class="flex items-center space-x-4">
      <button class="border flex items-center px-3 py-2 border-[#203A43] rounded-lg">
        <Plus class="h-4 w-4 mr-2 text-[#fff]" />
        <span class="hidden sm:inline text-[#FFFFFF]">Add broker</span>
      </button>
      <Bell class="h-6 w-6 cursor-pointer text-[#fff]" />
      <div class="relative">
        <div
          @click="toggleDropdown"
          class="flex items-center space-x-2 border-2 p-2 border-[#203A43] rounded-lg cursor-pointer"
        >
          <img src="../assets/images/Frame.svg" alt="Profile" class="h-8 w-8 rounded-lg" />
          <ChevronDown class="h-4 w-4 text-[#fff] font-bold" />
        </div>

        <div
          v-if="isDropdownOpen"
          class="absolute right-0 mt-2 w-48 bg-[#203A43] border border-[#203A43] rounded-lg shadow-lg z-10"
        >
          <div class="p-3 border-b border-[#2C5364]">
            <p class="text-white font-semibold">Roshni Chandra</p>
            <p class="text-gray-400 text-sm">chandra012@email.com</p>
          </div>
          <ul class="py-2">
            <li class="px-4 py-2 hover:bg-[#2C5364] text-white cursor-pointer">
              <RouterLink to="/profile">My Profile</RouterLink>
            </li>
            <li
              @click="toggleDropdown"
              class="px-4 py-2 hover:bg-[#2C5364] text-white cursor-pointer"
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
  @apply bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364] 
         bg-black/10 backdrop-blur-xl border border-white/20 shadow-md hover:shadow-lg transition-all duration-300;
}
</style>
