<template>
  <div class="flex justify-center items-center">
    <div
      class="bg-white dark:bg-white/5 rounded-2xl shadow-md dark:shadow-lg w-full max-w-md p-4 space-y-4"
    >
      <h1
        class="text-3xl font-bold text-gray-800 dark:text-white text-center py-2 rounded-md bg-[#dbeafe] dark:bg-[#203A43]"
      >
        {{ strategyName }}
      </h1>

      <p class="text-center text-sm text-gray-700 dark:text-gray-300">{{ description }}</p>

      <div
        class="bg-white dark:bg-white/10 rounded-xl py-4 px-2 flex flex-col justify-center items-center w-full h-auto shadow-md dark:shadow-none"
      >
        <span class="text-lg font-semibold text-[#0F2027] dark:text-white w-full">
          <SimpleLineChart class="w-full h-[200px] sm:h-[220px] md:h-[230px] lg:h-[250px]" />
        </span>
      </div>

      <p class="text-center text-sm font-semibold text-gray-700 dark:text-white mt-2">
        {{ positionStatus }}
      </p>

      <div class="flex justify-between text-sm font-semibold text-gray-800 dark:text-white">
        <p>
          Total PNL: <span class="font-normal">{{ totalPNL }}</span>
        </p>
        <p class="uppercase font-medium">High</p>
      </div>

      <div>
        <p class="font-semibold text-gray-800 dark:text-white">
          Required CAPITAL:
          <span class="text-blue-600 dark:text-blue-400">{{ requiredCapital }}</span>
        </p>
      </div>

      <div class="flex justify-between pt-4">
        <button
          class="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition duration-200"
        >
          Subscribe
        </button>
        <button
          class="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg transition duration-200 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-100"
        >
          More Info
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SimpleLineChart from './SimpleLineChart.vue'

const strategyName = ref('NIFTY')
const description = ref('kuldeepmnewe we')
const totalPNL = ref('₹ 0.00')
const requiredCapital = ref('₹ 15K Per lot')
const positionStatus = ref('No Position')
</script>
