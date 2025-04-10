<template>
  <div class="flex justify-center items-center">
    <div class="bg-white/5 rounded-2xl shadow-lg w-full max-w-md p-4 space-y-4">
      <h1 class="text-3xl font-bold text-white text-center py-2 rounded-md bg-[#2C5364]">
        {{ strategyName }}
      </h1>
      <p class="text-white text-center text-sm">{{ description }}</p>

      <div
        class="bg-white rounded-xl py-4 px-2 flex flex-col justify-center items-center w-full h-auto xs:px-2 xs:py-3 sm:px-2 sm:py-2 md:col-span-2 md:px-4 md:py-4"
      >
        <span class="text-lg font-semibold text-[#0F2027] w-full">
          <SimpleLineChart class="w-full h-[200px] sm:h-[220px] md:h-[230px] lg:h-[250px]" />
        </span>
      </div>

      <!-- <div class="bg-white rounded-xl py-4 px-2 flex justify-center items-center md:col-span-2 flex-col ">
        <span class="text-lg font-semibold text-[#0F2027]"> <SimpleLineChart class="w-full h-[230px]" /></span>
      </div> -->

      <p class="text-center text-sm font-semibold text-white mt-2">{{ positionStatus }}</p>

      <div class="flex justify-between text-white text-sm font-semibold">
        <p>
          Total PNL: <span class="font-normal">{{ totalPNL }}</span>
        </p>
        <p class="uppercase font-medium text-sm">High</p>
      </div>

      <div>
        <p class="text-white font-semibold">
          Required CAPITAL: <span class="text-blue-400">{{ requiredCapital }}</span>
        </p>
      </div>
      <div class="flex justify-between pt-4">
        <button
          class="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition duration-200"
        >
          Subscribe
        </button>
        <button
          class="bg-white hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg transition duration-200"
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
