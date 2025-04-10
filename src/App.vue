<script setup>
import { ref } from 'vue'
import Sidebar from './components/Sidebar.vue'
import Topbar from './components/Topbar.vue'

const isSidebarOpen = ref(false)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
  <div class="flex h-screen overflow-hidden">
    <Sidebar :isOpen="isSidebarOpen" />

    <div class="flex flex-col flex-1 overflow-hidden">
      <Topbar @toggleSidebar="toggleSidebar" />
      <main class="flex-1 overflow-y-auto mt-[64px] md:mt-0">
        <RouterView />
      </main>
    </div>
  </div>
</template>
