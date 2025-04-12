<script setup>
import { useStrategyStore } from '@/stores/Strategies'
import { storeToRefs } from 'pinia'
import StrategyCard from '@/components/StrategyCard.vue'

defineProps({
  strategyName: String,
  description: String,
})

const strategyStore = useStrategyStore()
const { selectedIndex, navItems, strategies } = storeToRefs(strategyStore)
</script>

<template>
  <div
    class="relative min-h-screen bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364] text-white font-sans overflow-hidden mt-0 sm:mt-0 md:mt-14 lg:mt-[4rem]"
  >
    <img
      src="../assets/images/img3.png"
      alt="Dashboard Background"
      class="absolute top-0 left-0 w-full h-full object-cover opacity-5 pointer-events-none z-0"
    />

    <div class="relative z-10 w-full bg-white/5 backdrop-blur-xl border-b border-white/10 shadow">
      <nav class="overflow-x-auto scrollbar-hide">
        <ul
          class="flex space-x-4 px-4 py-3 whitespace-nowrap text-base sm:text-lg md:text-xl font-medium"
        >
          <li
            v-for="(item, index) in navItems"
            :key="index"
            @click="selectedIndex = index"
            class="relative cursor-pointer px-3 sm:px-4 py-1 hover:text-gray-300 transition-all duration-300"
          >
            {{ item }}
            <span
              class="absolute bottom-0 left-0 right-0 h-0.5 bg-white transition-transform duration-300 origin-left scale-x-0"
              :class="{ 'scale-x-100': selectedIndex === index }"
            ></span>
          </li>
        </ul>
      </nav>
    </div>

    <div class="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <StrategyCard
        v-for="(card, index) in strategies[selectedIndex] || []"
        :key="index"
        :title="card.title"
        :description="card.description"
      />
    </div>
  </div>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
